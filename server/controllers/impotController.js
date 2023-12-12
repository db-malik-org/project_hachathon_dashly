// userController.js

const { Impot, sequelize } = require('../models/impot')

// Controller to get selected columns for all impots
exports.getAllImpot = async (req, res) => {
  try {
    const impots = await Impot.findAll({
      attributes: [
        'region',
        'departement',
        'code_Departement',
        'code_INSEE_Commune',
        'ville',
        'nombre_de_Contribuables',
        'moyenne_Actifs_Euros',
        'moyenne_Impot_Euros',
        'annee',
        'code_Region',
      ],
    })
    res.json(impots)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

// Controller to get all regions with corresponding data
exports.getAllRegions = async (req, res) => {
  try {
    const regions = await Impot.findAll({
      attributes: [
        'region',
        [sequelize.fn('avg', sequelize.col('moyenne_Impot_Euros')), 'avgImpot'],
        [sequelize.fn('sum', sequelize.col('nombre_de_Contribuables')), 'sumContribuables'], 
      ],
      group: ['region'],
    })
    res.json(regions)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

// get progress of avrgImpot by region
exports.getImpotByRegion = async (req, res) => {
  try {
    const allRegions = await Impot.findAll({
      attributes: [
        'id',
        'region',
        'departement',
        'code_Departement',
        'code_INSEE_Commune',
        'ville',
        'nombre_de_Contribuables',
        'moyenne_Actifs_Euros',
        'moyenne_Impot_Euros',
        'annee',
        'code_Region',
      ],
    });
    const transformedData = allRegions.reduce((result, item) => {
      // Find the region in the result array
      let regionObj = result.find((entry) => entry.region === item.region);
      // If the region doesn't exist, create a new entry
      if (!regionObj) {
        regionObj = {
          region: item.region,
          data: [],
        };
        result.push(regionObj);
      }
    
      // Find the department in the region's data array
      let departmentObj = regionObj.data.find((entry) => entry.departement === item.departement);
    
      // If the department doesn't exist, create a new entry
      if (!departmentObj) {
        departmentObj = {
          departement: item.departement,
          data: [],
        };
        regionObj.data.push(departmentObj);
      }
    
      // Add the data for the current entry
      const entryData = {
        ville: item.ville,
        data: {
          nombre_de_Contribuables: item.nombre_de_Contribuables,
          moyenne_Actifs_Euros: item.moyenne_Actifs_Euros,
          moyenne_Impot_Euros: item.moyenne_Impot_Euros,
          annee: item.annee,
        },
      };
    
      // Add the entryData to the department's data array
      departmentObj.data.push(entryData);
    
      return result;
    }, []);
    res.json(transformedData);
  } catch (error) {
    console.error('Error fetching region data:', error);
    throw error;
  }
};

// userController.js

const { Impot } = require('../models/impot');

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
    });
    res.json(impots);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

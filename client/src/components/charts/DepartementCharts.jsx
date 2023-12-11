import React from 'react'
import VilleChart from './VilleChart'
import 'chart.js/auto'

const DepartmentCharts = ({ impots }) => {
  // Group impots by 'departement', 'ville', and 'annee'
  const groupedData = impots.reduce((acc, entry) => {
    const key = entry.departement
    acc[key] = acc[key] || {}
    acc[key][entry.ville] = acc[key][entry.ville] || []
    acc[key][entry.ville].push(entry)
    return acc
  }, {})

  // Create components for each ville in each department
  const departmentComponents = Object.keys(groupedData).map((departement) => (
    <div key={departement}>
      <h2>{`Charts for ${departement}`}</h2>
      {Object.keys(groupedData[departement]).map((ville) => (
        <div key={ville}>
          <h3>{`Charts for ${ville}`}</h3>
          <VilleChart villeData={groupedData[departement][ville]} villeName={ville} />
        </div>
      ))}
    </div>
  ))

  return <div style={{ display: 'flex',flexDirection:'column', flexWrap: 'wrap' }}>{departmentComponents}</div>
}

export default DepartmentCharts

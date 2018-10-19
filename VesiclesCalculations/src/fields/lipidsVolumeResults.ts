export default ({
    molarPercentage: { type: 'text', label: 'Molar percentage of lipids in vesicle', helpText: 'Your lipid name', units: '%' },
    molecularWeight: { type: 'text', label: 'Molecular weight of lipids', helpText: 'Lipid percentage in solution, from 0.01% to 100%', units: 'g/mol' },
    solutionConcentration: { type: 'text', label: 'Concentration of lipids stock solution', helpText: 'Lipid concentration in solution (float)', units: 'g/l' },
    requiredVolume: { type: 'text', label: 'Required volume of lipids solution', helpText: 'Lipid molecular weight (float)', units: 'µl' },
})
import { TitleValidator, FloatValidator, PercentageValidator } from "../validations/validator";

export default ({
    name: { type: 'text', label: 'Name', helpText: 'Lipid name used when downloading results', validator: TitleValidator },
    percentage: { type: 'number', label: 'Percentage', helpText: 'Lipid percentage in solution, from 0.01% to 100%', units: '%', validator: PercentageValidator },
    concentration: { type: 'number', label: 'Concentration', helpText: 'Lipid concentration in solution (float)', units: 'g/l', validator: FloatValidator },
    molWeight: { type: 'number', label: 'Molecular Weight', helpText: 'Lipid molecular weight (float)', units: 'g/mol', validator: FloatValidator },
})
import { TitleValidator, NumberValidator } from "../validations/validator";

export default ({
    title: { type: 'text', label: 'Project Title', validator: TitleValidator },
    solutionMass: { type: 'number', label: 'Solution Mass', helpText: 'Overall solution mass', units: 'g' },
    solutionVolume: { type: 'number', label: 'Solution Volume', helpText: 'Overall solution volume', units: 'µl' },
    lipidsCount: { type: 'number', label: 'Lipids Count', helpText: 'Initial lipids count, you can also add/remove them in next step', validator: NumberValidator }
})

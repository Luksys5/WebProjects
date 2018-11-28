import { TitleValidator, NumberValidator } from "../validations/validator";

export default ({
    title: { type: 'text', label: 'Project Title', validator: TitleValidator },
    finalMass: { type: 'number', label: 'Final Mass', helpText: 'Overall solution mass', units: 'g' },
    finalVolume: { type: 'number', label: 'Final Volume', helpText: 'Overall solution volume', units: 'µl' },
    lipidsCount: { type: 'number', label: 'Lipids Count', helpText: 'Initial lipids count, you can also add/remove them in next step', validator: NumberValidator }
})

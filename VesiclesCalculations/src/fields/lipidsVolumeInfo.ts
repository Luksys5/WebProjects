import { TitleValidator, NumberValidator } from "../validations/validator";

export default ({
    title: { type: 'text', label: 'Project Title', validator: TitleValidator },
<<<<<<< HEAD
    solutionMass: { type: 'number', label: 'Solution Mass', helpText: 'Overall solution mass', units: 'g' },
    solutionVolume: { type: 'number', label: 'Solution Volume', helpText: 'Overall solution volume', units: 'µl' },
=======
    finalMass: { type: 'number', label: 'Final Mass', helpText: 'Overall solution mass', units: 'g' },
    finalVolume: { type: 'number', label: 'Final Volume', helpText: 'Overall solution volume', units: 'µl' },
>>>>>>> 56840ff... VCC. Released production version v1.0.0
    lipidsCount: { type: 'number', label: 'Lipids Count', helpText: 'Initial lipids count, you can also add/remove them in next step', validator: NumberValidator }
})

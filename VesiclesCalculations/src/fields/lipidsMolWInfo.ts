import { TitleValidator, NumberValidator, FloatValidator, GreaterThanValidator } from "../validations/validator";

export default ({
    title: { type: 'text', label: 'Project Title', validator: TitleValidator },
    diameterStart: { type: 'number', label: 'Vesicle diameter start', helpText: 'Used as from to vesicle diameter range', units: 'µl', validator: FloatValidator },
    diameterEnd: { type: 'number', label: 'Vesicle diameter end', helpText: 'Used as from to vesicle diameter range', units: 'µl', validator: FloatValidator },
    step: { type: 'number', label: 'Step', helpText: 'Delta diameter', units: 'µl', validator: (value: string) => GreaterThanValidator(value, 0) },
    lipidsCount: { type: 'number', label: 'Lipids Count', helpText: 'Initial lipids count, you can also add/remove them in next step', validator: NumberValidator }
})

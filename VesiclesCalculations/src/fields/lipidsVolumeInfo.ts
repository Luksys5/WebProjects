import { TitleValidator, NumberValidator } from "../validations/validator";
import { FaSearch } from "react-icons/fa";
import React = require("react");

export default ({
    title: { type: 'text', label: 'Project Title', validator: TitleValidator, units: React.createElement(FaSearch), unitClassName: 'field__search' },
    finalMass: { type: 'number', label: 'Final Mass', helpText: 'Overall solution mass', units: 'g' },
    finalVolume: { type: 'number', label: 'Final Volume', helpText: 'Overall solution volume', units: 'µl' },
    lipidsCount: { type: 'number', label: 'Lipids Count', helpText: 'Initial lipids count, you can also add/remove them in next step', validator: NumberValidator }
})

import * as React from 'react';
import { TitleValidator, FloatValidator, PercentageValidator } from '../validations/validator';

export default ({
    name: { type: 'text', label: 'Name', helpText: 'Your lipid name', validator: TitleValidator },
    percentage: { type: 'number', label: 'Percentage', helpText: 'Lipid percentage in solution, from 0.01% to 100%', units: '%', validator: PercentageValidator },
    molWeight: { type: 'number', label: 'Molecular Weight', helpText: 'Lipid molecular weight (float)', units: 'g/mol', validator: FloatValidator },
    height: { type: 'number', label: 'Height', helpText: 'Lipid concentration in solution (float)', units: 'µl', validator: FloatValidator },
    area: { type: 'number', label: 'Area', helpText: 'Area of lipid(horizontal diameter * vertical diameter)', units: 
        React.createElement('span', null, ['µl',
            React.createElement('sup', { key: 0 }, '2')
        ]), validator: FloatValidator
    },
})
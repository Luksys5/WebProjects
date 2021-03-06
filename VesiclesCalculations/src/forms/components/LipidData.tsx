import * as React from 'react';
import { IField } from '../../models';
import { Field, GenericField } from 'redux-form';
import { FormField, FormButton } from '.';
import { map } from 'lodash';

const FieldCustom = Field as new() => GenericField<any>;
export const LipidData = (data, index, fields, removeLipidData, copyLipidData, pasteLipidData, cloneLipidData) : JSX.Element => {

    return (
    <div className='lipid-data'>
        <h2 className='lipid__name'>Lipid #{ index + 1 }</h2>
        <i className='remove-data-btn fa fa-trash' style={{ fontSize: 20 }} onClick={ removeLipidData } /> 
        { map(fields, (field: IField, name) => (
            <FieldCustom
                key={ name }
                name={ `${data}.${name}` }
                type={ field.type }
                component={ FormField }
                label={ field.label }
                helpText={ field.helpText }
                units={ field.units }
            />
        )) }

        <div className='lipid-btn-container'>
            { FormButton('button', 'Copy Data', 'fas fa-copy', 'lipid__button', copyLipidData) }
            { FormButton('button', 'Paste Data', 'fas fa-paste', 'lipid__button', pasteLipidData) }
            { FormButton('button', 'Clone', 'fas fa-clone', 'lipid__button', cloneLipidData) }
        </div>
    </div>
    );
}
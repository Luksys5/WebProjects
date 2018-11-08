import * as React from 'react';
import { IField } from '../../models';
import { Field, GenericField } from 'redux-form';
import { FaTrash, FaCopy, FaPaste, FaClone } from 'react-icons/fa';
import { FormField, FormButton } from '.';
import * as _ from 'lodash';

const FieldCustom = Field as new() => GenericField<any>;
export const LipidData = (data, index, fields, removeLipidData, copyLipidData, pasteLipidData, cloneLipidData) : JSX.Element => {

    return (
    <div className='lipid-data'>
        <h2 className='lipid__name'>Lipid #{ index + 1 }</h2>
        <FaTrash className='remove-data-btn' type='button' size={20} onClick={ removeLipidData } />

        { _.map(fields, (field: IField, name) => (
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
            { FormButton('button', 'Copy Data', FaCopy, 'lipid__button', copyLipidData) }
            { FormButton('button', 'Paste Data', FaPaste, 'lipid__button', pasteLipidData) }
            { FormButton('button', 'Clone', FaClone, 'lipid__button', cloneLipidData) }
        </div>
    </div>
    );
}
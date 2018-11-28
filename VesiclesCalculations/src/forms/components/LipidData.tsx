import * as React from 'react';
import { IField } from '../../models';
import { Field, GenericField } from 'redux-form';
<<<<<<< HEAD
import { FaTrash, FaCopy, FaPaste } from 'react-icons/fa';
=======
>>>>>>> 56840ff... VCC. Released production version v1.0.0
import { FormField, FormButton } from '.';
import { map } from 'lodash';
import { faCopy, faClone, faPaste } from '@fortawesome/free-solid-svg-icons';

const FieldCustom = Field as new() => GenericField<any>;
export const LipidData = (data, index, fields, removeLipidData, copyLipidData, pasteLipidData) : JSX.Element => {

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
<<<<<<< HEAD
            { FormButton('button', 'Copy Data', FaCopy, 'lipid__button', copyLipidData) }
            { FormButton('button', 'Paste Data', FaPaste, 'lipid__button', pasteLipidData) }
=======
            { FormButton('button', 'Copy Data', faCopy, 'lipid__button', copyLipidData) }
            { FormButton('button', 'Paste Data', faPaste, 'lipid__button', pasteLipidData) }
            { FormButton('button', 'Clone', faClone, 'lipid__button', cloneLipidData) }
>>>>>>> 56840ff... VCC. Released production version v1.0.0
        </div>
    </div>
    );
}
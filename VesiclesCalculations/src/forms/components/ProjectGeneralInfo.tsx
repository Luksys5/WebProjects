import * as React from 'react';
import { Field, GenericField } from 'redux-form';
import { FormField, FormButton } from '.';
import { IField } from '../../models/subModels/IField';
import { map } from 'lodash';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FieldCustom = Field as new() => GenericField<any>;
export const ProjectGeneralInfo = (props) => {
    const { handleSubmit, header } = props;
    return (
    <form id='lipids-vol-info-form' className='form' onSubmit={ handleSubmit }>
        <div className='form__example'>
            <h2 className='form__header'>Example</h2>
            <img src={ props.exampleSrc }
                id={`${header}-example`}
                className='example__img'/> 
            <p className='example__text'>
                Setup for looping all vesicles from diameter 10 to 2000 and each step increasing diameter by 5 and searching best fitting vesicle for later specified lipids
            </p>
        </div>
        <div>
            <h2 className='form__header'>{ header }</h2>
            <div className='form__fields'>
                { map(props.formFields, (field: IField, name: number) => (
                    <FieldCustom
                        key={ name }
                        label={ field.label }
                        name={ name }
                        helpText={ field.helpText }
                        component={ FormField }
                        type={ field.type }
                        units={ field.units }
                        placeholder={ field.label }
                    />
                ))}
                <div className='field'>
                    { FormButton('submit', 'Next', faArrowRight) } 
                </div>
            </div>
        </div>
    </form>
    );
}
import * as React from 'react';
import { ShareButton } from '../../components/subComponents';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export const FormField = ({ input, unitClassName, label, type, helpText, units, meta: { touched, error, warning }}): JSX.Element => (
    <div className='field'>
        <label className='field__name'>
            { label }
            { !helpText ? '' : 
                <ShareButton
                    id={ null } 
                    className='field__help'
                    iconComponent={ faQuestionCircle }
                    tooltipClassName='help__tooltip'
                    tooltipText={ helpText } 
                    iconColor='black'
                    iconSize={ 24 }
                    iconClick={ null }
                /> 
            
            }
        </label>
        <div className={`field__input-block type-${type} ${!!error && touched && 'error'}`}>
            <input className={ `field__input ${ !unitClassName && 'no-units' }` } {...input } placeholder={ label } type={ type } />
            { units && <div className={`field_units ${unitClassName}`}><span>{ units }</span></div> }
        </div>
        { touched && ((!!error && <p className='field__error'>{ error }</p>)) }
        { touched && ((!!warning && <p className='field__warning'>{ warning }</p>)) }
    </div>
)
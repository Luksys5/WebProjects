import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const FormButton = (type: string, label: string, icon?: IconProp, className?: string, 
    onClick?: any, children?: any) => (
    <button type={type} className={(className || '') + " button-with-icon"} onClick={ onClick }>
        { icon && <FontAwesomeIcon icon={icon} className='button__icon' style={{ fontSize: 16 }} /> }
        { label }
        { children }
    </button>
)
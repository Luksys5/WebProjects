import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

<<<<<<< HEAD
export const FormButton = (type: string, label: string, iconComponent?: any, className?: string, 
    onClick?: () => void) => (
    <button type={type} className={(className || '') + " button-with-icon"} onClick={ onClick }>
        { React.createElement(iconComponent, { className: 'button__icon', size: 16 }) }
=======
export const FormButton = (type: string, label: string, icon?: IconProp, className?: string, 
    onClick?: any, children?: any) => (
    <button type={type} className={(className || '') + " button-with-icon"} onClick={ onClick }>
        { icon && <FontAwesomeIcon icon={icon} className='button__icon' style={{ fontSize: 16 }} /> }
>>>>>>> 56840ff... VCC. Released production version v1.0.0
        { label }
    </button>
)
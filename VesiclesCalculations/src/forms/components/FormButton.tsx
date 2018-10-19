import * as React from 'react';

export const FormButton = (type: string, label: string, iconComponent?: any, className?: string, 
    onClick?: () => void) => (
    <button type={type} className={(className || '') + " button-with-icon"} onClick={ onClick }>
        { React.createElement(iconComponent, { className: 'button__icon', size: 16 }) }
        { label }
    </button>
)
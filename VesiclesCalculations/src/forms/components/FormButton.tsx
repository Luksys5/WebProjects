import * as React from 'react';

export const FormButton = (type: string, label: string, icon?: string, className?: string, 
    onClick?: any, children?: any) => (
    <button type={type} className={(className || '') + " button-with-icon"} onClick={ onClick }>
        { icon && <i className={`button__icon ${icon}`} style={{ fontSize: 16 }} /> }
        { label }
        { children }
    </button>
)
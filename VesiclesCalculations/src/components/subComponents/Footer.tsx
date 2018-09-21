import * as React from 'react';
export type footerType = () => JSX.Element;

export const Footer: footerType = (): JSX.Element => {
    return (
        <footer className='footer'>
            <div>About</div>
            <div>Questions/Answers</div>
            <div>Contact</div>
            <div>Support</div>
        </footer>
    );
}
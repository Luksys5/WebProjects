import * as React from 'react';

export type footerType = (setCookies: () => void, callHelp: () => void) => JSX.Element;
export const Footer: footerType = (setCookies: () => void, callHelp: () => void): JSX.Element => {
    return (
        <footer className='footer'>
            <ul>
                <li>
                    <div className='left'>About Us</div>
                    <div className='right'>We are small motivated group and our aim is to help scientists prepare their vesicles content solutions</div>
                </li>
                <li>
                    <div className='left'>Contact Us</div>
                    <div className='right'>vesiclescalculations@gmail.com</div>
                </li>
                <li>
                    <div className='left'><a href='https://www.paypal.me/vescalc' target='_blank' >Support Us</a></div>
                </li>
                <li>
                    <div className='left' onClick={ callHelp }><a href='#'>Help</a></div>
                </li>
                <li>
                    <div className='left'><a href='#' onClick={ setCookies }>Cookies</a></div>
                </li>
            </ul>
        </footer>
    );
}
import * as React from 'react';
import { Link } from 'react-router-dom';

export type footerType = () => JSX.Element;
export const Footer: footerType = (): JSX.Element => {
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
                    <Link to='/home' className='left'>Help</Link>
                </li>
            </ul>
        </footer>
    );
}
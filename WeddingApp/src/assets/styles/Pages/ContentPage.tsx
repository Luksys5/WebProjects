import * as React from 'react';

export const ContentPage: React.SFC<any> = (props) => {
    const { title, children } = props;
    return (
        <div className='p-content-page'>
            <header className='p-content-page__title'>
                <h4>{title}</h4>
            </header>
            { children }
        </div>
    );

}
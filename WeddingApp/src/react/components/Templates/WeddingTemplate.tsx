import * as React from 'react';
import { PageMenu } from '../Organisms/PageMenu';
import { ContentPage } from '../../../assets/styles/Pages/ContentPage';

export const WeddingTemplate: React.SFC = (props: any) => {
    return (
    <div className='t-wedding-template'>
        <header className='t-wedding-template__header'>
            <h4>
                Meme Review Page
            </h4>
        </header>
        <div className='t-wedding-template__container'>
            <PageMenu />
            <ContentPage title='About'>
                { props.children }
            </ContentPage>
        </div>
    </div>
    );
};
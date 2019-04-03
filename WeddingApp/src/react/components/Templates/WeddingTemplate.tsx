import * as React from 'react';
import { PageSidebar } from '../Organisms/PageSidebar';
import { ContentPage } from '../Pages/ContentPage';
import { TextContainer } from '../Organisms/TextContainer';

export const WeddingTemplate: React.SFC = (props: any) => {
    return (
    <div className='t-wedding-template'>
        <header className='t-wedding-template__header'>
            <h4>
                Meme Review Page
            </h4>
        </header>
        <div className='t-wedding-template__container'>
            <PageSidebar />
            <ContentPage title='About'>
              <TextContainer title="test" />
            </ContentPage>
        </div>
    </div>
    );
};
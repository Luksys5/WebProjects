import * as React from 'react';
import { PageSidebar } from '../Organisms/PageSidebar';
import { Footer } from '../Organisms/Footer';

export const WeddingTemplate: React.SFC = (props: any) => {

    return (
      <div className='t-wedding-template'>
          <header className='t-wedding-template__header'>
              <h3>
                  Vytautes ir Mindaugo Vestuves
                  <div className='t-wedding-template__header__date'>2019-07-10</div>
              </h3>
              <PageSidebar />
          </header>
          {props.children}
          <>
            <Footer />
          </>
      </div>
    );
};
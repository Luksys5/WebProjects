import * as React from 'react';
import { PageNavigation } from '../Organisms/PageNavigation';
import { Footer } from '../Organisms/Footer';

export const WeddingTemplate: React.SFC = (props: any) => {

    return (
      <div className='t-wedding-template'>
          <header className='t-wedding-template__header'>
              <h3>
                  Vytautes ir Mindaugo Vestuves
                  <div className='t-wedding-template__header__date'>2019-07-06</div>
              </h3>
              <PageNavigation />
          </header>
          {props.children}
          <>
            <Footer />
          </>
      </div>
    );
};
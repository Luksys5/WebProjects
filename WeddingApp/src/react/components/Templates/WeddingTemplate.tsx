import React, {useContext} from 'react';
import { PageNavigation } from '../Organisms/PageNavigation';
import { Message } from '../Molecules/Message';
import { RegistrationFormContext, ActionTypesEnum } from '../../App';
import {FaConciergeBell, FaExclamationCircle} from 'react-icons/fa';
import { Footer } from '../Organisms/Footer';
import { Overlay } from '../Molecules/Overlay';


export const WeddingTemplate: React.SFC = (props: any) => {
  const { state: {error, info, overlay}, dispatch} = useContext(RegistrationFormContext);

  return (
    <div className='t-wedding-template'>
      {
        error &&
        <Message
          icon={FaConciergeBell}
          message={error}
          className='error-message'
          onClose={() => dispatch({type: ActionTypesEnum.setError, payload: ''})} 
        />
      }
      {
        info &&
        <Message
          icon={FaExclamationCircle}
          message={info}
          className='info-message'
          onClose={() => dispatch({type: ActionTypesEnum.setInfo, payload: ''})}
        />
      }
      {
        overlay &&
        <Overlay />
      }
      <header className='t-wedding-template__header'>
        <h3>
          Vytautes ir Mindaugo Vestuves
          <div className='t-wedding-template__header__date'>2019-07-06</div>
        </h3>
        <PageNavigation />
      </header>
      {props.children}
    </div>
  );
};
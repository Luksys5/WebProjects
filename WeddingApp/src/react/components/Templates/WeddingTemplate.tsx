import React, {useContext, useEffect, useState} from 'react';
import { PageNavigation } from '../Organisms/PageNavigation';
import { Message } from '../Molecules/Message';
import { RegistrationFormContext, ActionTypesEnum } from '../../App';
import {FaConciergeBell, FaExclamationCircle} from 'react-icons/fa';
import { Overlay } from '../Molecules/Overlay';
import Navigation from '../../../data/Navigation';
import { withRouter, RouteComponentProps } from 'react-router';
import { INavigationItem } from '../../../types/Navigation';

interface WeddingTemplateProps {
  children: any;
}

const WeddingTemplate: React.FunctionComponent<WeddingTemplateProps & RouteComponentProps> = (props) => {
  const { state: {error, info, overlay}, dispatch} = useContext(RegistrationFormContext);
  const [imageClassName, setImageClassName] = useState('');

  useEffect(() => {
    const currentLocationNavigationItem: INavigationItem | undefined = Navigation.find(nav => new RegExp(nav.name+'$').test(location.pathname));
    if(currentLocationNavigationItem) {
      setImageClassName(currentLocationNavigationItem.name);
    }
  }, [location.pathname])

  return (
    <div className='t-wedding-template'>
      <div className={`t-wedding-template__background-image ${imageClassName}`}></div>
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

export default withRouter(WeddingTemplate);
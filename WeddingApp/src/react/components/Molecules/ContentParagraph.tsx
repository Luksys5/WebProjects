import React, { lazy, Suspense } from 'react'
import { IContainerText } from '../../../types/ContainerTexts';
import { ParagraphTitle } from '../Atoms/ParagraphTitle';
import { Link } from 'react-router-dom';

export interface ContentParagraphProps extends IContainerText {
  index: number;
}


export const ContentParagraph: React.StatelessComponent<ContentParagraphProps> = (props) => {
  const MapContainer = lazy(() => import(/* webpackChunkName: 'ReactMaps' */'./MapContainer'));
  const {index, title, className, icon, iconProps, content, contentEnding, contentEndingClass, link, map, boldFirstWord} = props;
  return (
    <div key={index} className='m-content-par'>
      <ParagraphTitle title={title} icon={icon} iconProps={iconProps} />
      <p className={`m-content-par__content ${boldFirstWord ? 'bold-first-word' : ''}`}>
        <span className={className}>{content}</span>
        {
          contentEnding &&
          <span className={contentEndingClass}>{contentEnding}</span>
        }
      </p>
      {
        !!link &&
        <div className='m-content-par__link'>
          <span className={link.textBeforeClass}>{link.textBefore}</span>
          {
            link.navItem ?
              <Link to={link.href}>{link.text}</Link> :
              <a target="_blank" href={link.href}>{link.text}</a>
          }
        </div>
      }
      {
        map &&
        <Suspense fallback=''>
          <MapContainer />
        </Suspense> 
      }
    </div>
  );
}
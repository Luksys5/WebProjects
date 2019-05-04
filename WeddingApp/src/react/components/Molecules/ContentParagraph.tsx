import React, { lazy, Suspense } from 'react'
import { IContainerText } from '../../../types/ContainerTexts';
import { ParagraphTitle } from '../Atoms/ParagraphTitle';

export interface ContentParagraphProps extends IContainerText {
  index: number;
}


export const ContentParagraph: React.StatelessComponent<ContentParagraphProps> = (props) => {
  const MapContainer = lazy(() => import(/* webpackChunkName: 'ReactMaps' */'./MapContainer'));
  const {index, title, icon, iconProps, content, contentEnding, contentEndingClass, link, map, boldFirstWord} = props;
  return (
    <div key={index} className='m-content-par'>
      <ParagraphTitle title={title} icon={icon} iconProps={iconProps} />
      <p className={`m-content-par__content ${boldFirstWord ? 'bold-first-word' : ''}`}>
        {content}
        {
          contentEnding &&
          <span className={contentEndingClass}>{contentEnding}</span>
        }
      </p>
      {
        !!link &&
        <a className="m-content-par__link" target="_blank" href={link.href}>{link.text}</a>
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
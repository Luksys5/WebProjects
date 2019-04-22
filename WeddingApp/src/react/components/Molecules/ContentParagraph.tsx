import React, { lazy, Suspense } from 'react'
import { IContainerText } from '../../../Types/ContainerTexts';
import { ParagraphTitle } from '../Atoms/ParagraphTitle';

export interface ContentParagraphProps extends IContainerText {
  index: number;
}


export const ContentParagraph: React.StatelessComponent<ContentParagraphProps> = (props) => {
  const MapContainer = lazy(() => import(/* webpackChunkName: 'ReactMaps' */'./MapContainer'));
  const {index, title, icon, content, contentEnding, contentEndingClass, link, map} = props;
  return (
    <div key={index} className='m-content-par'>
      <ParagraphTitle title={title} icon={icon} />
      <p className='m-content-par__content'>
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
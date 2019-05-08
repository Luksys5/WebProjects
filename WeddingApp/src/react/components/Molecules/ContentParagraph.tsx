import React, { lazy, Suspense } from 'react'
import { IParagraphText } from '../../../types/ContainerData';
export const MapContainer = lazy(() => import(/* webpackChunkName: 'ReactMaps' */'./MapContainer'));

export const ContentParagraph: React.StatelessComponent<IParagraphText> = ({ content, contentEnding, contentEndingClass, map, link }) => {
  return (
    <React.Fragment>
      <p>
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
    </React.Fragment>
  );
}
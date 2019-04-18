import React from 'react'
import { ILinkProps } from '../../../Types/ContainerTexts';

export interface ContentParagraphProps {
  index: number;
  class: string;
  title?: string;
  content: string;
  link?: ILinkProps;
}

export const ContentParagraph: React.SFC<ContentParagraphProps> = (props) => {
  const {index, title, content, link} = props;
  return (
    <div key={index} className='m-content-par'>
      { 
        !!title &&
        <div className='m-content-par__title'>{title}</div>
      }
      <p className='m-content-par__content'>
        {content}
      </p>
      {
        !!link &&
        <a className="m-content-par__link" target="_blank" href={link.href}>{link.text}</a>
      }
    </div>

  );
}
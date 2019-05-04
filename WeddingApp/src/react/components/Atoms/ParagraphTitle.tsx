import React from 'react';
import { IconType } from 'react-icons/lib/iconBase';

export interface ParagraphTitleProps {
  title?: string | undefined;
  icon?: IconType | undefined;
  iconProps?: any;
}

export const ParagraphTitle: React.StatelessComponent<ParagraphTitleProps> = ({title, icon, iconProps}) => {
  if(!title) {
    return null;
  }

  return (
    <div className='a-paragraph-title'>
      {
        icon &&
        <div className='a-paragraph-title__icon'>
          {React.createElement(icon, {...iconProps})}
        </div>
      }
      {
        title &&
        <div
          className={`a-paragraph-title__title ${icon ? '' : 'a-paragraph-title__title--without-icon'}`}
        >
          {title}
        </div>
      }
    </div>
  )

}
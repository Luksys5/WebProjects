import React from 'react';
import { IconType } from 'react-icons/lib/iconBase';

export interface ParagraphTitleProps {
  icon?: IconType | undefined;
  title?: string | undefined;
}

export const ParagraphTitle: React.StatelessComponent<ParagraphTitleProps> = ({icon, title}) => {
  if(!title && !icon) {
    return null;
  }

  return (
    <div className='a-paragraph-title'>
      {icon && <div className='a-paragraph-title__icon'>{React.createElement(icon)}</div>}
      {title && <div className='a-paragraph-title__title'>{title}</div>}
    </div>
  )

}
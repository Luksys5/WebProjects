import * as React from 'react';
import { map } from 'lodash';
import { ContainerText } from '../../../Types/ContainerTexts';
import Texts from '../../../Data/About';

export interface TextContainerProps {
    title: string;
}

export const TextContainer: React.SFC<TextContainerProps> = (props) => {
    return (
    <div className='o-text-container'>
        <header className='o-text-container__header'>
            <h4>{props.title}</h4>
        </header>
        { map(
            Texts,
            (text: ContainerText) => 
                <p className='o-text-container__par'>{text.content}</p>
        )}
    </div>
    );
}
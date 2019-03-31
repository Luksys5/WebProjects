import * as React from 'react';
import { map } from 'lodash';
import Texts from '../../../Data/About';
import { ContainerText } from '../../../Types/ContainerTexts';

export interface TextContainerProps {
    title: string;
}

export const TextContainer: React.SFC<TextContainerProps> = (props) => {
    return (
    <div className='o-text-container'>
        <header>
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
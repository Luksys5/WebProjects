import React, { useState } from 'react';
import { IconSprite } from '../atoms/IconSprite';

type ExpandableItemProps = {
    header: string;
    valuableInfo: string;
    info: string;
    content: string[];
}

export const ExpandableItem: React.FC<ExpandableItemProps> = ({ header, valuableInfo, info, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="m-expandable-item"> 
            <div className="m-expandable-item__summary"  onClick={() => setIsOpen(!isOpen)}> 
                <div>
                    <h4>{ header }</h4>
                    <div>
                        <span className="m-expandable-item__valuable-info">{ valuableInfo }</span>
                        <span className="m-expandable-item__info">{ info }</span>
                    </div>
                </div>

                { isOpen ?
                    <IconSprite className="active" name="unfoldLess" />
                    :
                    <IconSprite name="unfoldMore" />
                }
            </div>

            { isOpen && 
                <div className="m-expandable-item__content">
                    <div className="m-expandable-item__separator" /> 
                    { 
                        content.map(
                            (par, index) => (
                                <p key={index} className="a-paragraph">
                                    { par }
                                </p>
                            )
                        )
                    }
                    <div className="m-expandable-item__separator" />  
                </div>
            }
        </div>
    )
}
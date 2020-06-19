import React, { useContext } from 'react';
import { IconNames, IconSprite } from '../atoms/IconSprite';
import { Link } from 'react-router-dom';
import { StorageContext } from '../../storage/StorageContext';

type SectionProps = {
    className?: string;
    contentClassName?: string;
    iconName?: IconNames;
    paragraphs?: string[];
    header: string;
}

export const Section: React.FC<SectionProps> = ({ className, contentClassName, iconName, header, paragraphs, children }) => {
    const {setNavTitle} = useContext(StorageContext);

    const mapTextWithLink = (splitText: string[], matches: IterableIterator<RegExpMatchArray>) => {
        let result = matches.next();
        if (result.done) {
            return !!splitText.length ? splitText[0] : '';
        } else {
            const componentArray: JSX.Element[] = [];
            let index = 0;
            while (!result.done) {
                const values = result.value[1].split(';');
                const link = values[0];
                const linkTitle = values[1];
                componentArray.push(
                    <span key={index++}>
                        { splitText[0] }
                        <Link
                            to={link}
                            onClick={
                                () => setNavTitle(linkTitle[0].toLocaleUpperCase() + linkTitle.slice(1))
                            }
                        >
                            { linkTitle }
                        </Link>
                    </span>
                );
                result = matches.next();
            }
            return componentArray;
        }
    }

    return (
        <div className={`m-section ${className || ''}`}>
            <div className="m-section__header">
                { iconName && <IconSprite name={iconName} /> }
                <h2 className="h2">{ header }</h2>
            </div>
            <div className="m-section__paragraphs">
                { paragraphs && paragraphs.map(
                    (par: string, index: number) => {
                        const splitted = par.split(/`{[^}]*}`/);
                        const linkDataMatches = par.matchAll(/`{([^}]*)}`/g);
                        const content = mapTextWithLink(splitted, linkDataMatches);
                        return ( 
                            <p key={index} className="a-paragraph">
                                { content }
                            </p>
                        );
                    }
                ) }
            </div>
            <div className={`m-section__content ${contentClassName || ''}`}>
                { children }
            </div>
        </div>
    )
}
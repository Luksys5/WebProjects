import React from 'react';
import Card from '../molecules/Card';
import { Section } from '../molecules/Section';
import { Link } from 'react-router-dom';
import { Image } from '../molecules/Image';
import Texts from '../../Texts';
import { IconSprite } from '../atoms/IconSprite';

export const AboutPage: React.FC = () => {
    return (
        <Card contentClassName="p-about">
            <Image
                src="images/background/me-1920.png"
                placeholderSrc="images/background/me-1920-treshold.png"
                credit="Photo by: H J"
                creditUrl="https://www.flickr.com/people/183565491@N03/"
            />
            <Section header="Well hello there!" iconName="hello" paragraphs={Texts.aboutMe} />

            <Section header="Education" iconName="education">
                <p className="a-paragraph">
                    <span className="bold">Step one:</span> finish Jonas Biliūnas gymnasium. <span className="bold">Success!</span>
                </p>
                <p className="a-paragraph">
                    <span className="bold">Step two:</span> get a bachelor degree of Bioinformatics Vilnius university. <span className="bold">Success!</span>
                </p>
                <p className="a-paragraph">
                    <span className="bold">Step three:</span> get a good knowledge in entirely unrelated topic of developing websites. <span className="bold">Success!</span>
                </p>
                <p className="a-paragraph">
                    <span className="bold">Step four:</span> get a job in IT and make good self development. <span className="bold">Success!</span>
                </p>
                <p className="a-paragraph">
                    <span className="bold">Step five:</span> profit. <span className="bold">Nope!</span>
                </p>
            </Section>

            <Section className='p-about__hobbies' header="Hobbies!" >
                <IconSprite data-tip="Development of websites and games" name='skills' />
                <IconSprite data-tip="Playing with guitar or creating music" name='musicNote' />
                <IconSprite data-tip="BASKETBALL!!" name='basketball' />
                <IconSprite data-tip="Jogging" name='running' />
                <IconSprite data-tip="C'mon of course it's tennis" name='tennis' />
                <IconSprite data-tip="Martial arts and Porno" name='judo' />
                <IconSprite data-tip="Camping" name='fireplace' />
                <IconSprite data-tip="Cooking" name='grill' />
            </Section>


        </Card>
    );
}
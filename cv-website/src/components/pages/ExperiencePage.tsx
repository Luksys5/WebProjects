import React, { useState, useEffect } from 'react';
import { Section } from '../molecules/Section';
import Texts from '../../Texts';
import { ExpandableItem } from '../molecules/ExpandableItem';
// @ts-ignore
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import Card from '../molecules/Card';
import { IconSprite } from '../atoms/IconSprite';
import { useQuery } from '@apollo/react-hooks';
import { SkillGroupQuery } from '../../graphqlApi/types/Queries';
import { GET_SKILLS_QUERY } from '../../graphqlApi/queries/SkillGroupQuery';
import { Loader } from '../atoms/Loader';
import { GraphError } from '../atoms/GraphError';

const projects = [
    {
        title: 'Intertrust',
        at: 'Macaw',
        generalInfo: '2019-2020, Front-end developer',
        content: Texts.projectIntertrust
    },
    {
        title: 'Cargo Schmitz Bull',
        at: 'Macaw',
        generalInfo: '2020-2020, Front-end developer',
        content: Texts.projectCargoSchmitzBull
    },
    {
        title: 'Westernacher',
        at: 'Amidus',
        generalInfo: '2016-2018, Full-stack developer',
        content: Texts.projectWesternacher
    },
    {
        title: 'EIGE',
        at: 'Amidus',
        generalInfo: '2018-2018, Front-end developer',
        content: Texts.projectIntertrust
    },
    {
        title: 'TIC',
        at: 'Amidus',
        generalInfo: '2017-2018, Full-stack developer',
        content: Texts.projectTIC
    }
];

type TransformedSkills = {
    title: string;
    values: [{
        data: {
            [x: string]: number;
        };
        meta: { color: string }
    }];
    keys: {
        [x: string]: string
    };
}

export const ExperiencePage: React.FC = () => {
    const { loading, error, data } = useQuery<SkillGroupQuery>(GET_SKILLS_QUERY);
    const [skills, setSkills] = useState<undefined | TransformedSkills[]>(undefined);

    useEffect(
        () => {
            const transformedSkills: TransformedSkills[] | undefined = data?.skills.map(
                skill => {
                    let mappedKeys = {};
                    let mappedValues = {};
                    for(let index = 0; index < skill.keys.length; index++) {
                        const key = 'key' + index.toString();
                        mappedKeys = Object.assign(mappedKeys, { [key]: skill.keys[index] });
                        mappedValues = Object.assign(mappedValues, { [key]: parseFloat(skill.values[index]) });
                    }

                    return {
                        title: skill.title,
                        keys: mappedKeys,
                        values: [{
                            data: mappedValues,
                            meta: { color: skill.color }
                        }]
                    }
                }
            );
            if (transformedSkills) {
                setSkills(transformedSkills);
            }
        },
        [data]
    )

    return (
        <Card contentClassName="p-experience" links={[
            <IconSprite key={0} onClick={() => window.open('https://www.linkedin.com/in/lukas-tutkus-08657815b/', '_blank')} noWrapper={false} name="linkedin" />,
            <IconSprite key={1} onClick={() => window.open('mailto:lt.tutkus7@gmail.com', '_blank')} data-tip="Contact via email" name="email" />
        ]}>
            <Section iconName="identity" header="Profile" paragraphs={Texts.profile} />

            <Section iconName='website' header="Projects">
                { projects.map((project, index) => 
                    <ExpandableItem
                        key={index}
                        header={project.title}
                        valuableInfo={project.at}
                        info={project.generalInfo}
                        content={project.content}
                    />
                )}
            </Section>

            <Section iconName='skills' header="Skills" contentClassName="flex-row">
                { loading && <Loader size="medium" /> }
                { error && <GraphError message={error.message} error={error} /> }
                {
                    skills && skills.map((skill, index) => 
                        <div key={index} className="flex-col">
                            <h3 className="h3">
                                { skill.title }
                            </h3>
                            <RadarChart
                                data={skill.values}
                                captions={skill.keys}
                                size={400}
                            />
                        </div>
                    )
                }
            </Section>
        </Card>
    );
}
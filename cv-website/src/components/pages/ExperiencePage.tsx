import React from 'react';
import { Section } from '../molecules/Section';
import Texts from '../../Texts';
import { ExpandableItem } from '../molecules/ExpandableItem';
// @ts-ignore
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import Card from '../molecules/Card';

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

const chartData = [
    {
        data: {
            communication: 0.9,
            sprintPlanning: .7,
            testing: 0.7,
            sprintRefinment: 0.9,
            onTime: 0.8
        },
        meta: { color: 'blue' }
    },
];

const captions = {
    communication: 'Communication',
    sprintPlanning: 'Planning',
    testing: 'Testing',
    sprintRefinment: 'Refinement',
    onTime: 'on Time'
};

export const ExperiencePage: React.FC = () => {
    return (
        <Card className="p-experience">
            <Section iconName="identity" header="Profile">
                {
                    Texts.profile.map(
                        (par, index) => (
                            <p key={index} className="a-paragraph">
                                { par }
                            </p>
                    ))
                }
            </Section>

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

            <Section iconName='skills' header="Skills">
                <RadarChart data={chartData} captions={captions} size={400} />
            </Section>

        </Card>
    );
}
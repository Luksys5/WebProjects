import * as React from 'react';
import { Tooltip, CartesianGrid, Line, XAxis, YAxis, Legend, ResponsiveContainer, LineChart } from 'recharts/es6';
import { LipidsMolWResults } from '../../models';

enum ShowLine {
    both = 0,
    lipidsCount = 1,
    molWeight = 2
}

interface IMolWResultProps {
    results: LipidsMolWResults;
}

interface IMolWResultState {
    showLine: number;
}

export default class LipidsMolWResult extends React.Component<IMolWResultProps, IMolWResultState> {
    constructor(props) {
        super(props);

        this.state = { showLine: 0 };
    }

    _selectLinesToRender(ev) {
        this.setState({ showLine: ev.target.selectedIndex });
    }

    render() {
        const { results } = this.props;
        const { showLine } = this.state;

        // if results undefined empty return null
        if(!results || !results.data || results.data.length === 0)
            return null;
        
        return (
        <div className='lipid-result extend--width'>
            <ResponsiveContainer className='chart-container' height='90%' width='100%'>
            <LineChart data={ results.data } margin={{ top: 5, right: 30, left: 20, bottom: 5 }} isAnimationActive={false}>
                <XAxis dataKey='diameter' />
                <YAxis dataKey='lipidsTotalMolW'/>
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray='3 3' />
                { showLine !== ShowLine.molWeight && <Line name='Lipids count in vesicle' type='monotone' dataKey='lipidsInVesicle' stroke='black'  isAnimationActive={false}/> }
                { showLine !== ShowLine.lipidsCount && <Line name='Lipids molecular weight' type='monotone' dataKey='lipidsTotalMolW' stroke='#8884d8'  isAnimationActive={false}/> }
            </LineChart>
            </ResponsiveContainer>
            <div className='result__selection'>
                <label className=''>Show Lines</label>
                <select onChange={ this._selectLinesToRender.bind(this) }>
                    <option key={ ShowLine.both }>Both</option>
                    <option key={ ShowLine.lipidsCount }>Lipids in Vesicle</option>
                    <option key={ ShowLine.molWeight }>Lipids molecular weight</option>
                </select>
            </div>
        </div>
        );
    }
}
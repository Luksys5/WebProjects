import * as React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';
import * as _ from 'lodash';
const data = [
      {name: 'Page A', uv: 4000 },
      {name: 'Page B', uv: 3000 },
      {name: 'Page C', uv: 2000 },
      {name: 'Page D', uv: 2780 },
      {name: 'Page E', uv: 1890 },
      {name: 'Page F', uv: 2390 },
      {name: 'Page G', uv: 3490 },
];

export const LipidMolWResult = (results: any) => (index: number): JSX.Element => {
    // if results undefined empty return null
    if(!results || !results.lipids || results.lipids.length < index + 1)
        return null;

    const result: any= results[index];
    if(result == null) {

    }
    return (
    <div className='lipid-result'>
        <ResponsiveContainer height='100%' width='100%'>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey='name' />
            <YAxis />
            <Legend />
            <CartesianGrid strokeDasharray='3 3' />
            <Line type='monotone' dataKey='uv' stroke='#8884d8' />
        </LineChart>
        </ResponsiveContainer>
    </div>
    );
}
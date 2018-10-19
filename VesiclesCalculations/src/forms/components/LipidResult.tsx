import * as React from 'react';
import { IField } from '../../models';
import { ILipidVolResult } from '../../models/subModels/ILipidVolumeResult';
import { LipidsVolResultFields as FIELDS } from '../../fields';
import * as _ from 'lodash';

export const LipidResult = (result: ILipidVolResult | any, index): JSX.Element => {

    return (
    <div className='lipid-result'>
        <h2 className='lipid__name'>Lipid Result #{ index + 1 }</h2>
        {
            _.map(FIELDS, (field: IField, name: string) => (
                <div key={ name + index } className='field'>
                    <div className='field__name'>{ field.label }</div>
                    <div className='field__input'>
                        { `${!result[name] ? '' : result[name] + field.units}` }
                    </div>
                </div>
            ))
        }
    { /*calculated &&
        <div className='solution-results'>
            <h2>Solution Results</h2>
            { !solutionMass ? null : (
                <div className='solution-result'>
                    <div className='name'>Solution Mass</div>
                    <span className='value'>{ solutionMass }mg</span>
                </div>
            )}
            { !solutionVol ? null : ( 
                <div className='solution-result'>
                    <div className='name'>Solution Vol</div>
                    <span className='value'>{ solutionVol }ml</span>
                </div>
            )}
        </div>
            */
    }
    </div>
    );
}
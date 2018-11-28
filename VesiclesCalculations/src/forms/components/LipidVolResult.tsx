import * as React from 'react';
import { IField } from '../../models';
import { ILipidVolResult } from '../../models/subModels/ILipidVolumeResult';
import { LipidsVolResultFields as FIELDS } from '../../fields';
// @ts-ignore
import { map } from 'lodash';

export const LipidVolResult = (results: any) => (index: number): JSX.Element => {
    // if results undefined empty return null
    if(!results || !results.lipids)
        return null;

    let result: ILipidVolResult = null;
    if(index < results.lipids.length) {
        result = results.lipids[index];
    }
    return (
    <div className='lipid-result'>
        <h2 className='lipid__name'>Lipid Result #{ index + 1 }</h2>
        {
            map(FIELDS, (field: IField, name: string) => (
                <div key={ name + index } className='field'>
                    <div className='field__name'>{ field.label }</div>
                    <div className='field__input'>
                        { result && `${!result[name] ? '' : result[name] + ' ' + field.units}` }
                    </div>
                </div>
            ))
        }
    </div>
    );
}
import * as React from 'react';
import { FormButton } from '.';
import { FaRecycle, FaPlusSquare } from 'react-icons/fa'
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import { LipidVolData } from '../../models';
import { LipidData} from './LipidData'
import { LipidResult } from './LipidResult';
import * as _ from 'lodash';

interface LipidsArrayProps {
    fields: FieldArrayFieldsProps<any>;
    formFields: any;
    meta: FieldArrayMetaProps;
    lipidData: LipidVolData[];
    copiedLipid: LipidVolData;
    copyLipidVolData: (lipidsVolData: LipidVolData) => void;
    clearLipidsVolData: () => void;
    [x: string]: any;
}

export const removeLipidData = (props, index) => {
    props.fields.remove(index);
}

export const copyLipidData = (props, index) => {
    props.copyLipidVolData(props.fields.get(index)) 
}

export const pasteLipidData = (props, index) => {
    props.fields.insert(index, props.copiedLipid);
    props.fields.remove(index + 1);
}

type RenderLipidsType = ({}: LipidsArrayProps) => JSX.Element;
export const LipidsData: RenderLipidsType = (props: LipidsArrayProps): JSX.Element => (
    <ul className='lipids-vol-data'>
        { props.fields.map((member: string, index: number) => (
            <li key={index} className='lipid-element'>
                { LipidData(member, index, props.formFields,
                    () => removeLipidData(props, index),
                    () => copyLipidData(props, index),
                    () => pasteLipidData(props, index)
                )}
                {
                    LipidResult({}, index)
                }
            </li>
        ))}
        <div className='lipid-actions'>
            { FormButton('button', 'Add Lipid', FaPlusSquare, '', () => {
                props.fields.push({});
            }) } 
            { FormButton('button', 'Clear Data and Results', FaRecycle, '', () => {
                props.fields.removeAll();
                props.clearLipidsVolData()
            }) } 
            <span className='form__error'>{ props.meta.submitFailed ? props.meta.error : '' }</span>
        </div>
    </ul>
)

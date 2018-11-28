import * as React from 'react';
import { FormButton } from '.';
<<<<<<< HEAD
import { FaRecycle, FaPlusSquare } from 'react-icons/fa'
=======
// @ts-ignore
>>>>>>> 56840ff... VCC. Released production version v1.0.0
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import { LipidVolData } from '../../models';
import { LipidData} from './LipidData'
<<<<<<< HEAD
import { LipidResult } from './LipidResult';
import * as _ from 'lodash';
=======
import { Link } from 'react-router-dom';
import { setDialogEmailForm, setStringifiedResults, setError  } from '../../actions';
import { faRecycle, faPlusSquare, faDownload, faEnvelope, faCalculator, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
>>>>>>> 56840ff... VCC. Released production version v1.0.0

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

<<<<<<< HEAD
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
=======
                <div className='lipid-actions'>
                    <div className='row-end'>
                        {
                            FormButton('button', 'Add Lipid', faPlusSquare, 'block', () => fields.push({})) 
                        } 
                        {
                            FormButton('button', 'Clear Data', faRecycle, 'block', () => {
                                fields.removeAll();
                                clearLipidsVolData();
                                this._elementsCount = 0;
                            })
                        } 
                    </div>
                    {   
                        <Link to='/lipidsVolume/0' className='row-end button-with-icon' onClick={ goToPreviousPage } >
                            <FontAwesomeIcon icon={ faArrowLeft } className='button__icon' style={{ fontSize: 16 }}/>Back 
                        </Link>
                    }
                    <div className='form__error row-end'>
                        <span>{ meta.submitFailed ? meta.error : '' }</span>
                    </div>
                    { FormButton('submit', 'Calculate', faCalculator, 'row-end') }
                    {
                         !!results && results.calculated &&
                        <div>
                            { FormButton(
                                'button',
                                'Download',
                                faDownload,
                                'block',
                                handleSubmit(this._stringifyAndDownload.bind(this)),
                                <a ref={(el) => this._linkElement = el }
                                    onClick={ (ev) => ev.stopPropagation() }
                                    download='LVC-Results.csv'
                                    href={null}
                                    style={{ display: 'none' }}
                                />
                            ) }
                            { FormButton('button', 'Send To Email', faEnvelope, 'block',
                                handleSubmit((values, dispatch) => {
                                    try {
                                        const results: string = this.props.stringifyResults(values);
                                        setStringifiedResults(results)(dispatch);
                                        setDialogEmailForm(dispatch);
                                    } catch(ex) {
                                        setError(`Error occurred: ${ex.toString()}`)(dispatch);
                                    }
                                })
                            ) }
                        </div>
                    }
                    { saveProjectBtn }
                </div>
            </ul>
        )
    }
}
>>>>>>> 56840ff... VCC. Released production version v1.0.0

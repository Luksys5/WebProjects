import * as React from 'react';
import { FormButton } from '.';
// @ts-ignore
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import { LipidVolData, LipidsVolResults, LipidsVolInfo } from '../../models';
import { LipidData} from './LipidData'
import { Link } from 'react-router-dom';
import { setDialogEmailForm, setStringifiedResults, setError  } from '../../actions';
import { faRecycle, faPlusSquare, faDownload, faEnvelope, faCalculator, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LipidsArrayProps {
    fields: FieldArrayFieldsProps<any>;
    formFields: any;
    meta: FieldArrayMetaProps;
    lipidData: LipidVolData[];
    copiedLipid: LipidVolData;
    results: LipidsVolResults;
    saveProjectBtn: JSX.Element;
    solutionResults: JSX.Element;
    resultComponent: (index: number) => JSX.Element
    copyLipidVolData: (lipidsVolData: LipidVolData) => void;
    clearLipidsVolData: () => void;
    stringifyResults: (values: any) => string;
    goToPreviousPage: () => void;
    handleSubmit: (method: any) => void;
    [x: string]: any;
}

interface LipidsArrayState {
    stringifiedResults: string;
}

export class LipidsData extends React.Component<LipidsArrayProps, LipidsArrayState> {
    private _listElement : any = null;
    private _linkElement: any = null;
    private _elementsCount: number = 0;

    constructor(props) {
        super(props);
        this._elementsCount = props.fields.length;

        this.state = {
            stringifiedResults: null
        }
    }

    componentDidUpdate() {
        if(!!this._listElement) {
            const childNodes: any[] = this._listElement.childNodes;
            let childCount: number = 0;
            childNodes.forEach(el => el.className == 'lipid-element' ? childCount++ : null);

            if(this._elementsCount < childCount) {
                this._listElement.scrollIntoView(false);
                this._elementsCount = childCount;
            }
        }
    }

    private _removeLipidData = (index) => {
        const { fields } = this.props;
        fields.remove(index);
        this._elementsCount -= 1;
    }

    private _copyLipidData = (index) => {
        const { fields, copyLipidVolData } = this.props; 
        copyLipidVolData(fields.get(index)) 
    }

    private _pasteLipidData = (index) => {
        const { fields, copiedLipid } = this.props; 
        fields.insert(index, copiedLipid);
        fields.remove(index + 1);
    }

    private _cloneLipidData = (index) => {
        const { fields } = this.props;
        fields.push(fields.get(index))   
    }

    private _encodeURIComponent = (encoder: any, uri: string) => {
        return 'data:text/plain;charset=utf-8,' + encoder.encodeURIComponent(uri);
    }

    private _stringifyAndDownload(values: LipidsVolInfo) {
        const stringifiedResults = this.props.stringifyResults(values);
        const encodedResults = this._encodeURIComponent(window, stringifiedResults);

        // set link href value and manually download results
        this._linkElement.href = encodedResults;
        this._linkElement.click();
    }
    
    public render() {
        const { fields, formFields, results, resultComponent, solutionResults, meta,
            saveProjectBtn, clearLipidsVolData, goToPreviousPage, handleSubmit
        } = this.props;

        return (
            <ul className='lipids-vol-data' ref={ (el) => this._listElement = el }>
                { fields.map((member: string, index: number) => (
                    <li key={index} className='lipid-element'>
                        { LipidData(member, index, formFields,
                            () => this._removeLipidData(index),
                            () => this._copyLipidData(index),
                            () => this._pasteLipidData(index),
                            () => this._cloneLipidData(index) 
                        )}
                        {
                            resultComponent(index)
                        }
                    </li>
                ))}
                    
                { solutionResults }

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
import * as React from 'react';
import { reduxForm, FieldArray, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateData } from '../validations';
import { FormButton, LipidsDataContent } from './components';
import { setLipidsVolData, setLipidsVolInfoAndData, copyLipidsVolData, clearLipidsVolData, saveProject, setVolFormStep } from '../actions';
import { LipidsVolInfoFields, LipidsVolDataFields } from '../fields';
import { ILipidData } from '../models';
import { LipidVolResult } from './components/LipidVolResult';
import { stringifyResults } from '../actions/globalActions';

export let linkElement = null;

const LipidsVolumeData = (props: InjectedFormProps | any) => {
    const {
        cookies, volumeInfo, results, copiedLipid, canUseCookies, dirty,
        handleSubmit, copyLipidsVolData, clearLipidsVolData
    } = props;

    return (
    <form className='form' onSubmit={
        handleSubmit((values, dispatch) => { setLipidsVolData(values, 1, volumeInfo)(dispatch); }) 
    }>
        <h2 className='form__header'>{ volumeInfo.title  }</h2>
        <div>
            <FieldArray
                name='lipids'
                component={ LipidsDataContent }
                formFields={ LipidsVolDataFields }
                results={ results }
                copiedLipid={ copiedLipid }
                resultComponent={ LipidVolResult(results) }
                saveProjectBtn={
                    dirty && canUseCookies &&
                    FormButton('submit', 'Save', 'fas fa-save', 'row-end', handleSubmit(
                        (values, dispatch) => {
                            setLipidsVolInfoAndData(volumeInfo, values, false)(dispatch);
                            canUseCookies && saveProject(cookies, volumeInfo, values, 'VCC-L')(dispatch);
                        }
                    ))
                }
                solutionResults={
                    results.calculated &&
                        <div className='solution-results'>
                            <h2>Solution Results</h2>
                            <div className='solution-result'>
                                <div className='name'>Total mass of lipids in solution</div>
                                <span className='value'>{ !!results && results.totalMass }mg</span>
                            </div>
                            <div className='solution-result'>
                                <div className='name'>Total volume of lipids in solution</div>
                                <span className='value'>{ !!results && results.totalVolume }ml</span>
                            </div>
                        </div>
                }
                copyLipidVolData={ copyLipidsVolData }
                clearLipidsVolData={ clearLipidsVolData }
                prevPagePath={ '/lipidsVolume/0' } 
                handleSubmit={handleSubmit}
                stringifyResults={
                    (values: ILipidData) => stringifyResults(LipidsVolInfoFields, LipidsVolDataFields, volumeInfo, values, 0)
                } 
            />
        </div>
    </form>
    );
}

const LipidsVolumeDataForm = reduxForm({
    form: 'lipidsVolumeData',
    validate: (values: ILipidData) => validateData(values, LipidsVolDataFields, true),
})(LipidsVolumeData);

const mapStateToProps = (state, ownProps) => ({
    initialValues: state.lipidsVolume.lipidsVolData,
    volumeInfo: state.lipidsVolume.lipidsVolInfo,
    copiedLipid: state.lipidsVolume.copiedVolData,
    results: state.lipidsVolume.lipidsVolResults,
    stringifiedResults: state.lipidsVolume.stringifiedResults,
    canUseCookies: ownProps.canUseCookies,
    cookies: ownProps.cookies,
});

const mapDispatchToProps = dispatch => bindActionCreators({
        setLipidsVolData,
        copyLipidsVolData,
        clearLipidsVolData,
        setVolFormStep 
    }, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(LipidsVolumeDataForm);
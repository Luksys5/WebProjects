import * as React from 'react';
import { reduxForm, FieldArray, InjectedFormProps } from 'redux-form';
<<<<<<< HEAD
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
=======
>>>>>>> 56840ff... VCC. Released production version v1.0.0
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateData } from '../validations';
import { FormButton, LipidsDataContent } from './components';
<<<<<<< HEAD
import { setLipidsVolData, copyLipidsVolData, clearLipidsVolData } from '../actions';
import { LipidsVolDataFields } from '../fields';
import { ILipidData } from '../models';

const LipidsVolumeData = (props: InjectedFormProps | any) => {
    const { handleSubmit, volumeInfo, copiedLipid, copyLipidsVolData, clearLipidsVolData } = props;
    const { projectName } = volumeInfo;
=======
import { setLipidsVolData, setLipidsVolInfoAndData, copyLipidsVolData, clearLipidsVolData, saveProject, setVolFormStep } from '../actions';
import { LipidsVolInfoFields, LipidsVolDataFields } from '../fields';
import { ILipidData } from '../models';
import { LipidVolResult } from './components/LipidVolResult';
import { stringifyResults } from '../actions/globalActions';
import { faSave } from '@fortawesome/free-solid-svg-icons';

export let linkElement = null;

const LipidsVolumeData = (props: InjectedFormProps | any) => {
    const {
        cookies, volumeInfo, results, copiedLipid, canUseCookies, dirty,
        handleSubmit, copyLipidsVolData, clearLipidsVolData, setVolFormStep 
    } = props;
>>>>>>> 56840ff... VCC. Released production version v1.0.0

    return (
    <form className='form' onSubmit={
        handleSubmit((values, dispatch) => { setLipidsVolData(values, 1, volumeInfo)(dispatch); }) 
    }>
        <h2 className='form__header'>{ projectName  }</h2>
        <div>
            <FieldArray
                name='lipids'
                component={ LipidsDataContent }
                formFields={ LipidsVolDataFields }
                copiedLipid={ copiedLipid }
<<<<<<< HEAD
                copyLipidVolData={ copyLipidsVolData }
                clearLipidsVolData={ clearLipidsVolData } />
        </div>
        <div className='form__back-btn'>
            { FormButton('button', 'Back', FaArrowLeft, '',
                handleSubmit(
                    (values, dispatch) => { setLipidsVolData(values, 0, null)(dispatch); }
                )) 
            } 
        </div>
        <div className='form__forward-btn'>
            { props.calculated && FormButton('submit', 'Save Project', FaArrowRight) }
            { FormButton('submit', 'Calculate', FaArrowRight) }
=======
                resultComponent={ LipidVolResult(results) }
                saveProjectBtn={
                    dirty && canUseCookies &&
                    FormButton('submit', 'Save', faSave, 'row-end', handleSubmit(
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
                goToPreviousPage={ () => {
                    setVolFormStep(0);
                } }
                handleSubmit={handleSubmit}
                stringifyResults={
                    (values: ILipidData) => stringifyResults(LipidsVolInfoFields, LipidsVolDataFields, volumeInfo, values, 0)
                } 
            />
>>>>>>> 56840ff... VCC. Released production version v1.0.0
        </div>
    </form>
    );
}

const LipidsVolumeDataForm = reduxForm({
    form: 'lipidsVolumeData',
    validate: (values: ILipidData) => validateData(values, LipidsVolDataFields, true),
})(LipidsVolumeData);

const mapStateToProps = state => ({
    initialValues: state.lipidsVolume.lipidsVolData,
    volumeInfo: state.lipidsVolume.lipidsVolInfo,
    copiedLipid: state.lipidsVolume.copiedVolData,
    calculated: state.lipidsVolume.lipidsVolResults.calculated
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        setLipidsVolData,
        copyLipidsVolData,
        clearLipidsVolData
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LipidsVolumeDataForm);
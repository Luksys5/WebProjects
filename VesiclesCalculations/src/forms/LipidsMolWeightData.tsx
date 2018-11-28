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
import { setLipidsMolWData, setVolFormStep, copyLipidsMolWData, clearLipidsMolWData } from '../actions';
import { LipidsMolWDataFields } from '../fields';
import { ILipidData } from '../models';
=======
import { setLipidsMolWData, setLipidsMolWInfoAndData,
    copyLipidsMolWData, clearLipidsMolWData, saveProject, stringifyResults } from '../actions';
import { LipidsMolWDataFields, LipidsMolWInfoFields } from '../fields';
import { ILipidData } from '../models';
import LipidsMolWResult from './components/LipidsMolWResult';
import { faSave } from '@fortawesome/free-solid-svg-icons';
>>>>>>> 56840ff... VCC. Released production version v1.0.0

const LipidsMolWeightData = (props: InjectedFormProps | any) => {
    const { handleSubmit, projectName, copiedLipid, copyLipidsMolWData, clearLipidsMolWData } = props;
    
    return (
    <form className='form' onSubmit={
<<<<<<< HEAD
        handleSubmit((values, dispatch) => { setLipidsMolWData(values, 1)(dispatch); }) 
=======
        handleSubmit((values, dispatch) => { setLipidsMolWData(values, 1, molWInfo)(dispatch); }) 
>>>>>>> 56840ff... VCC. Released production version v1.0.0
    }>
        <h2 className='form__header'>{ projectName  }</h2>
        <div>
            <FieldArray
                name='lipids'
                component={ LipidsDataContent }
                formFields={ LipidsMolWDataFields }
                copiedLipid={ copiedLipid }
<<<<<<< HEAD
                copyLipidMolWData={ copyLipidsMolWData }
                clearLipidsMolWData={ clearLipidsMolWData } />
        </div>
        <div className='form__back-btn'>
            { FormButton('button', 'Back', FaArrowLeft, '',
                handleSubmit(
                    (values, dispatch) => { setLipidsMolWData(values, 0)(dispatch); }
                )) 
            } 
        </div>
        <div className='form__forward-btn'>
            { FormButton('submit', 'Calculate', FaArrowRight) }
            { props.calculated && FormButton('submit', 'Save Project', FaArrowRight) }
=======
                saveProjectBtn={
                    dirty && canUseCookies &&
                    FormButton('submit', 'Save', faSave, 'row-end', handleSubmit(
                        (values, dispatch) => {
                            setLipidsMolWInfoAndData(molWInfo, values)(dispatch);
                            saveProject(cookies, molWInfo, values, 'VCC-L')(dispatch);
                        }
                    ))
                }
                resultComponent={ (index: number) => index === 0 && <LipidsMolWResult  results={results} />}
                copyLipidVolData={ copyLipidsMolWData }
                clearLipidsVolData={ clearLipidsMolWData }
                goToPreviousPage={ handleSubmit((values, dispatch) => setLipidsMolWData(values, 0, null)(dispatch)) }
                handleSubmit={handleSubmit}
                stringifyResults={
                    (values: ILipidData) => stringifyResults(LipidsMolWInfoFields, LipidsMolWDataFields, molWInfo, values, 1)
                } 
            />
>>>>>>> 56840ff... VCC. Released production version v1.0.0
        </div>
    </form>
    );
}

const LipidsMolWumeDataForm = reduxForm({
    form: 'lipidsMolWeightData',
    validate: (values: ILipidData) => validateData(values, LipidsMolWDataFields, true),
})(LipidsMolWeightData);

const mapStateToProps = state => ({
    initialValues: state.lipidsMolWeight.lipidsMolWData,
    molWInfo: state.lipidsMolWeight.lipidsMolWInfo,
    projectName: state.lipidsMolWeight.lipidsMolWInfo.title,
    copiedLipid: state.lipidsMolWeight.copiedMolWData,
    calculated: state.lipidsMolWeight.lipidsMolWResults.calculated
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        setLipidsMolWData,
        setVolFormStep, 
        copyLipidsMolWData,
        clearLipidsMolWData
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LipidsMolWumeDataForm);
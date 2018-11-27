import * as React from 'react';
import { reduxForm, FieldArray, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { validateData } from '../validations';
import { FormButton, LipidsDataContent } from './components';
import { setLipidsMolWData, setLipidsMolWInfoAndData,
    copyLipidsMolWData, clearLipidsMolWData, saveProject, stringifyResults, setMolWFormStep } from '../actions';
import { LipidsMolWDataFields, LipidsMolWInfoFields } from '../fields';
import { ILipidData } from '../models';
import LipidsMolWResult from './components/LipidsMolWResult';

const LipidsMolWeightData = (props: InjectedFormProps | any): JSX.Element => {
    const { 
        cookies, molWInfo, results, copiedLipid, dirty, canUseCookies,
        handleSubmit, copyLipidsMolWData, clearLipidsMolWData
    } = props;
    
    return (
    <form className='form' onSubmit={
        handleSubmit((values, dispatch) => { setLipidsMolWData(values, 1, molWInfo)(dispatch); }) 
    }>
        <h2 className='form__header'>{ molWInfo.title  }</h2>
        <div>
            <FieldArray
                name='lipids'
                component={ LipidsDataContent }
                formFields={ LipidsMolWDataFields }
                results={ results }
                copiedLipid={ copiedLipid }
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
                prevPagePath={ '/molecularWeight/0' } 
                handleSubmit={handleSubmit}
                stringifyResults={
                    (values: ILipidData) => stringifyResults(LipidsMolWInfoFields, LipidsMolWDataFields, molWInfo, values, 1)
                } 
            />
        </div>
    </form>
    );
}

const LipidsMolWDataForm = reduxForm({
    form: 'lipidsMolWeightData',
    validate: (values: ILipidData) => validateData(values, LipidsMolWDataFields, true),
})(LipidsMolWeightData);

const mapStateToProps = (state, ownProps) => ({
    initialValues: state.lipidsMolWeight.lipidsMolWData,
    molWInfo: state.lipidsMolWeight.lipidsMolWInfo,
    copiedLipid: state.lipidsMolWeight.copiedMolWData,
    results: state.lipidsMolWeight.lipidsMolWResults,
    canUseCookies: ownProps.canUseCookies,
    cookies: ownProps.cookies,
});

const mapDispatchToProps = dispatch => bindActionCreators({
        setLipidsMolWData,
        copyLipidsMolWData,
        clearLipidsMolWData,
        setMolWFormStep
    }, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(LipidsMolWDataForm);
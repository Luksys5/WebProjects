import * as React from 'react';
import { reduxForm, FieldArray, InjectedFormProps } from 'redux-form';
import { FaSave } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateData } from '../validations';
import { FormButton, LipidsDataContent } from './components';
import { setLipidsMolWData, setLipidsMolWInfoAndData,
    copyLipidsMolWData, clearLipidsMolWData, saveProject } from '../actions';
import { LipidsMolWDataFields } from '../fields';
import { ILipidData } from '../models';
import { LipidMolWResult } from './components/LipidMolWResult';

const LipidsMolWeightData = (props: InjectedFormProps | any): JSX.Element => {
    const { 
        cookies, molWInfo, results, copiedLipid, dirty, canUseCookies,
        handleSubmit, copyLipidsMolWData, clearLipidsMolWData 
    } = props;
    
    return (
    <form className='form' onSubmit={
        handleSubmit((values, dispatch) => { setLipidsMolWData(values, 1, {})(dispatch); }) 
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
                    FormButton('submit', 'Save', FaSave, 'row-end', handleSubmit(
                        (values, dispatch) => {
                            setLipidsMolWInfoAndData(molWInfo, values)(dispatch);
                            saveProject(cookies, molWInfo, values, 'VCC-L');
                        }
                    ))
                }
                resultComponent={ LipidMolWResult(results) }
                copyLipidVolData={ copyLipidsMolWData }
                clearLipidsVolData={ clearLipidsMolWData }
                goToPreviousPage={ handleSubmit((values, dispatch) => setLipidsMolWData(values, 0, null)(dispatch)) }
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
    cookies: ownProps.cookies
});

const mapDispatchToProps = dispatch => bindActionCreators({
        setLipidsMolWData,
        copyLipidsMolWData,
        clearLipidsMolWData,
    }, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(LipidsMolWDataForm);
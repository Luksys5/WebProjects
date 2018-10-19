import * as React from 'react';
import { reduxForm, FieldArray, InjectedFormProps } from 'redux-form';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateData } from '../validations';
import { FormButton, LipidsDataContent } from './components';
import { setLipidsMolWData, setVolFormStep, copyLipidsMolWData, clearLipidsMolWData } from '../actions';
import { LipidsMolWDataFields } from '../fields';
import { ILipidData } from '../models';

const LipidsMolWeightData = (props: InjectedFormProps | any) => {
    const { handleSubmit, projectName, copiedLipid, copyLipidsMolWData, clearLipidsMolWData } = props;
    
    return (
    <form className='form' onSubmit={
        handleSubmit((values, dispatch) => { setLipidsMolWData(values, 1)(dispatch); }) 
    }>
        <h2 className='form__header'>{ projectName  }</h2>
        <div>
            <FieldArray
                name='lipids'
                component={ LipidsDataContent }
                formFields={ LipidsMolWDataFields }
                copiedLipid={ copiedLipid }
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
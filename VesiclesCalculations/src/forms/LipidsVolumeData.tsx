import * as React from 'react';
import { reduxForm, FieldArray, InjectedFormProps } from 'redux-form';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateData } from '../validations';
import { FormButton, LipidsDataContent } from './components';
import { setLipidsVolData, copyLipidsVolData, clearLipidsVolData } from '../actions';
import { LipidsVolDataFields } from '../fields';
import { ILipidData } from '../models';

const LipidsVolumeData = (props: InjectedFormProps | any) => {
    const { handleSubmit, volumeInfo, copiedLipid, copyLipidsVolData, clearLipidsVolData } = props;
    const { projectName } = volumeInfo;

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
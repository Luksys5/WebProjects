import * as React from 'react';
import { Field, GenericField, reduxForm } from 'redux-form';
import { FormField } from './components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendDataToEmail } from '../actions';
import { validateValues } from '../validations';
import { EmailFields } from '../fields';

const BasicField = Field as new() => GenericField<any>;
const EmailForm = props => {
    const { handleSubmit, stringifiedResults } = props;
    return (
    <form className='form' onSubmit={ handleSubmit(
        async(values, dispatch) => {
            await sendDataToEmail(values, stringifiedResults, dispatch); 
        }) 
    }>
        <BasicField component={ FormField } { ...EmailFields['email'] }/>
        <button type='submit' className='button-with-icon'>
            <i className='button__icon fa fa-envelope' style={{ fontSize: 16 }} />
            Send
        </button>
    </form>
    );
}

const reduxEmailForm = reduxForm({
    form: 'email',
    validate: (values) => validateValues(values, EmailFields)
})(EmailForm);

const mapStateToProps = state => ({
    stringifiedResults: state.globals.stringifiedResults
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(reduxEmailForm);
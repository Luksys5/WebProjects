
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { validateValues } from '../validations';
import { LipidsMolWInfoFields } from '../fields';
import { ProjectGeneralInfo } from './components';

const LipidsVolumeInfoForm = reduxForm({
    form: 'lipidsMolWInfo',
    validate: (values) => validateValues(values, LipidsMolWInfoFields)
})(ProjectGeneralInfo);

const mapStateToProps = state => ({
    initialValues: state.lipidsVolume.lipidsVolInfo,
    formFields: LipidsMolWInfoFields,
    header: 'Lipids Molecular Weight Info',
    exampleSrc: require('../../assets/lipidVolInfoExample.png')
});

const mapDispatchToProps = _dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LipidsVolumeInfoForm);
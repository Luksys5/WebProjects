import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { validateValues } from '../validations';
import { LipidsVolInfoFields } from '../fields';
import { ProjectGeneralInfo } from './components';

const LipidsVolumeInfoForm = reduxForm({
    form: 'lipidsVolumeInfo',
    validate: (values) => validateValues(values, LipidsVolInfoFields)
})(ProjectGeneralInfo);

const mapStateToProps = state => ({
    initialValues: state.lipidsVolume.lipidsVolInfo,
    formFields: LipidsVolInfoFields,
    header: 'Lipids Volume Info',
    exampleSrc: require('../../assets/lipidVolInfoExample.png')
});

const mapDispatchToProps = _dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LipidsVolumeInfoForm);
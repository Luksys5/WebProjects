import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { validateValues } from '../validations';
import { LipidsVolInfoFields } from '../fields';
import { ProjectGeneralInfo } from './components';

const LipidsVolumeInfoForm = reduxForm({
    form: 'lipidsVolumeInfo',
    validate: (values) => validateValues(values, LipidsVolInfoFields)
})(ProjectGeneralInfo);

const mapStateToProps = state=> ({
    initialValues: state.lipidsVolume.lipidsVolInfo,
    formFields: LipidsVolInfoFields,
    header: 'Lipids Volume Info',
    exampleSrc: require('../../assets/VolInfoExample.png'),
    exampleHeader: 'Calculation purpose is to find required lipids volume in solution',
    exampleText: 'Creating project to find 3 lipids(more details in next step) required volume in vesicle solution of final mass 74g and final volume 150µl'
});

const mapDispatchToProps = _dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LipidsVolumeInfoForm);
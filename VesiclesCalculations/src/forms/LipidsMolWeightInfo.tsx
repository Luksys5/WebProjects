
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
    initialValues: state.lipidsMolWeight.lipidsMolWInfo,
    formFields: LipidsMolWInfoFields,
    header: 'Lipids Molecular Weight Info',
    exampleSrc: require('../../assets/MolWInfoExample.png'),
    exampleHeader: 'Calculation purpose is to find lipids molecular weight and show their relation to vesicle diameter in graph',
    exampleText: 'Create project with 13 lipids(more detail in next step) and vesicle from to diameter'
});

const mapDispatchToProps = _dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LipidsVolumeInfoForm);
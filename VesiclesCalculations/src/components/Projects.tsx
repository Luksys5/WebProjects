import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setLipidsVolInfoAndData } from '../actions';
import { Cookies } from 'react-cookie';
import * as _ from 'lodash';
import lipidsVolumeInfo from '../fields/lipidsVolumeInfo';
import { LipidsVolInfo, LipidsMolWInfo, ProjectTypes, IField, ILipidData, LipidVolData } from '../models';
import lipidsMolWInfo from '../fields/lipidsMolWInfo';
import { FormField, FormButton} from '../forms/components';
import { FaExternalLinkAlt, FaSave} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { setError } from '../actions/globalActions';

interface IProjectsProps {
    cookies: Cookies;
    setLipidsVolInfoAndData: (lipidsInfo: LipidsVolInfo, lipidsData: ILipidData, clearResults: boolean) => void;
    setError: (error: string) => void;
}

interface IProjectState {
    projects: any[];
    projectsData: any[];
    selectedProject: LipidsVolInfo | LipidsMolWInfo;
    selectedProjectType: number;
    selectedProjectIndex: number;
}

const ProjectFields = ['title', 'type', 'modifiedDate'];
const validateError = "Couldn't add project from file. Validate your file has info and data fields with values separated by two newlines";

class Projects extends React.Component<IProjectsProps, IProjectState> {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            projectsData: [],
            selectedProject: null,
            selectedProjectType: 0,
            selectedProjectIndex: -1
        };
    }

    private _addProjectInput = null;

    componentDidMount() {
        const { cookies } = this.props;
        const projects: any[] = cookies.get('VCC-LI') || [];
        const projectsData: any[] = this.props.cookies.get('VCC-LD') || { 'lipids': []};

        if(projects && projects.length > 0) {
            this.setState({
                projects,
                projectsData,
                selectedProject: projects[0],
                selectedProjectType: projects[0].type
            })
        }
    }

    private _getSelectedProjectFields() {
        switch(this.state.selectedProjectType) {
            case ProjectTypes.LipidVolume:
                return lipidsVolumeInfo;
            case ProjectTypes.LipidMolWeight:
                return lipidsMolWInfo;
            default:
                return {};
        }   
    }

    private _getProjectTypeName(type) {
        switch(type) {
            case ProjectTypes.LipidVolume:
                return 'Lipids Volume';
            case ProjectTypes.LipidMolWeight:
                return 'Lipids Molecular Weight';
            default:
                return 'none';
        }
    }

    private _getProjectLink(type: number): string {
        switch(type) {
            case ProjectTypes.LipidVolume:
                return `/lipidsVolume/0/`;
            case ProjectTypes.LipidMolWeight:
                return `/lipidsMolWeight/0/`;
            default:
                return 'none';
        }
    }

    private _loadProjectToState(project: any, index: number): void {
        const { projectsData } = this.state;
        let data = projectsData[index] || { 'lipids': [] };
        switch(project.type) {
            case ProjectTypes.LipidVolume:
                this.props.setLipidsVolInfoAndData(project, data, true);
                break;
            case ProjectTypes.LipidMolWeight:
                // load lipid volume data
                this.props.setLipidsVolInfoAndData(project, data, true);
                break;
        }
    }

    private _selectProject(index: number) {
        const { projects } = this.state;
        const selectedProject = projects[index];
        this.setState({ selectedProject, selectedProjectType: selectedProject.type, selectedProjectIndex: index });
    }

    private _readFromFile(ev) {
        const { setError } = this.props; 
        const { projects, projectsData } = this.state;

        const reader = new FileReader();
        reader.onload = () => {
            try {
                const txt: string = reader.result.toString();

                if(txt == null || txt.match(new RegExp(/^\s$/)) != null || txt.match(new RegExp(/^\s*null\s*$/)) != null) {
                    throw(validateError);
                }
                const projectResults: string[] = txt.split('\n\n');
                if(projectResults.length < 2) {
                    throw(validateError);
                }

                const info = projectResults[0].split('\n');
                const data = projectResults[1].split('\n');
                const infoValues: string[] = info[1].split(',');

                let projectType: number = -1;
                if(infoValues.length == 0 || infoValues[0].match(new RegExp(/^\d$/)) == null) {
                    throw("Project type must be first value in project info values");
                }

                projectType = parseInt(infoValues[0]);
                const projectTitle = infoValues[2];
                if(projects.some(project => project.title == projectTitle && project.type == projectType)) {
                    throw("All same type projects must contain unique project title!");
                }

                switch(projectType) {
                    case ProjectTypes.LipidVolume:
                        // set lipid volume info from file values separated by comma    
                        const lipidsVolInfo: LipidsVolInfo = {
                            type: projectType,
                            modifiedDate: infoValues[1].replace(';', ','),
                            title: projectTitle,
                            finalMass: infoValues[3],
                            finalVolume: infoValues[4], 
                            lipidsCount: infoValues[5],
                            filled: true
                        };

                        // set array of lipid data
                        const lipidsVolData: ILipidData = { lipids: [] };
                        
                        // push into array each lipid data
                        for(let i = 1; i < data.length; i++) {
                            // if empty then pass
                            if(data[i].match(new RegExp(/^\s*$/)) != null) {
                                continue;
                            }
                            
                            const dataLine = data[i].split(',');
                            // if dont contain any members pass
                            if(dataLine.length == 0) {
                                continue;
                            }

                            const lipidVolData: LipidVolData = {
                                name: dataLine[1],
                                percentage: dataLine[2],
                                concentration: dataLine[3],
                                molWeight: dataLine[4] 
                            };
                            lipidsVolData.lipids.push(lipidVolData);
                        }

                        // add project info and data to array of all projects
                        projects.push(lipidsVolInfo);
                        projectsData.push(lipidsVolData);
                        if(this.state.selectedProjectIndex == -1) {
                            this.setState({ selectedProject: projects[0], selectedProjectIndex: 0, selectedProjectType: projects[0].type });
                        }
                        this.setState({ projects, projectsData });

                        break;
                    case ProjectTypes.LipidMolWeight:
                        break;
                    default:
                        throw("Project type not found")
                }
                
            } catch(ex) {
                setError('Error occurred: ' + ex.toString());
            }
        }

        // read first and only file
        reader.readAsText(ev.target.files[0]);

        // to call event even if the same file is selected again
        this._addProjectInput.value = "";
    }

    render(): JSX.Element {
        const { projects, selectedProject, selectedProjectIndex } = this.state;
        const Fields: any = this._getSelectedProjectFields(); 
        
        return (
        <div className='projects'>
            <div className='projects__table'>
                <h2 className='table__name'>Projects</h2>
                <div className='table__header'>
                    <div>Title</div>
                    <div>Project Type</div>
                    <div>Modified Date</div>
                    <div>Project Link</div>
                </div>
                { 
                    projects.map((project: LipidsVolInfo | LipidsMolWInfo, index: number) => 
                        <div key={ index } className={ `table__item ${index == selectedProjectIndex ? 'active' : '' }`} onClick={ () => this._selectProject(index) }>
                            { ProjectFields.map((field, subIndex) => <div key={subIndex}> { subIndex == 1 ? this._getProjectTypeName(project[field]) : project[field] }</div>) }
                            <Link className='item__link' to={ this._getProjectLink(project.type) } onClick={ () => this._loadProjectToState(project, index) }> 
                                <FaExternalLinkAlt />
                            </Link>
                        </div>
                    )
                }

                <input type='file' accept='.csv, .txt, text/plain' multiple={false}
                    ref={ (el) => this._addProjectInput = el } style={{ display: 'none'}} onChange={ this._readFromFile.bind(this) }
                />
                { FormButton('button', 'Load Project From File', FaSave, '', () => this._addProjectInput.click() ) }

            </div>
            <div className='project__form'>
                <div className='form'>
                    <h2 className='form__header'>Project Details</h2>
                    <div className='form__fields'>
                    { _.map(Fields, (field: IField, name: string) => 
                        <FormField key={name}
                            input={ { className: 'field__input disabled', defaultValue: !selectedProject ? '' : selectedProject[name] } }
                            unitClassName=''
                            label={ field.label }
                            type={ field.type }
                            helpText={null}
                            units={ field.units }
                            meta={{ touched: false, error: null, warning: null}}
                        />
                    )}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
        setLipidsVolInfoAndData,
        setError
    }, dispatch
);

export default connect(null, mapDispatchToProps)(Projects);  
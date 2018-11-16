import * as React from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Cookies } from 'react-cookie';
import { map } from 'lodash';
import { faSave, faExternalLinkAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { setLipidsVolInfoAndData } from '../actions';
import { LipidsVolInfoFields, LipidsMolWInfoFields } from '../fields';
import { LipidsVolInfo, LipidsMolWInfo, ProjectTypes, IField, ILipidData, LipidVolData, LipidMolWData } from '../models';
import { FormField, FormButton} from '../forms/components';
import { setError } from '../actions/globalActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProjectsProps {
    cookies: Cookies;
    canUseCookies: boolean;
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
        const { cookies, canUseCookies } = this.props;
        if(!canUseCookies) {
            return;
        }

        const projects: any[] = cookies.get('VCC-LI') || [];
        const projectsData: any[] = this.props.cookies.get('VCC-LD') || { 'lipids': []};

        if(projects && projects.length > 0) {
            this.setState({
                projects,
                projectsData,
                selectedProject: projects[0],
                selectedProjectType: projects[0].type,
                selectedProjectIndex: 0
            })
        }
    }

    private _getSelectedProjectFields() {
        switch(this.state.selectedProjectType) {
            case ProjectTypes.LipidVolume:
                return LipidsVolInfoFields;
            case ProjectTypes.LipidMolWeight:
                return LipidsMolWInfoFields;
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
                return `/molecularWeight/0/`;
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
        if(selectedProject == null) {
            this.setState({ selectedProject, selectedProjectType: null, selectedProjectIndex: -1 });
        } else {
            this.setState({ selectedProject, selectedProjectType: selectedProject == null ? null : selectedProject.type, selectedProjectIndex: index });
        }
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

                        break;
                    case ProjectTypes.LipidMolWeight:
                        // set lipid volume info from file values separated by comma    
                        const lipidsMolWInfo: LipidsMolWInfo = {
                            type: projectType,
                            modifiedDate: infoValues[1].replace(';', ','),
                            title: projectTitle,
                            diameterStart: infoValues[3],
                            diameterEnd: infoValues[4], 
                            step: infoValues[5],
                            lipidsCount: infoValues[6],
                            filled: true
                        };

                        // set array of lipid data
                        const lipidsMolWData: ILipidData = { lipids: [] };
                        
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

                            const lipidMolWData: LipidMolWData = {
                                name: dataLine[1],
                                percentage: dataLine[2],
                                molWeight: dataLine[3], 
                                height: dataLine[4],
                                area: dataLine[5]
                            };
                            lipidsMolWData.lipids.push(lipidMolWData);
                        }
                        projects.push(lipidsMolWInfo);
                        projectsData.push(lipidsMolWData);

                        break;
                    default:
                        throw("Project type not found")
                }

                // add project info and data to array of all projects
                if(this.state.selectedProjectIndex == -1) {
                    this.setState({ selectedProject: projects[0], selectedProjectIndex: 0, selectedProjectType: projects[0].type });
                }
                this.setState({ projects, projectsData });

                
            } catch(ex) {
                setError('Error occurred: ' + ex.toString());
            }
        }

        // read first and only file
        reader.readAsText(ev.target.files[0]);

        // to call event even if the same file is selected again
        this._addProjectInput.value = "";
    }

    private _removeProject(index: number) {
        const { projects, projectsData } = this.state;
        projects.splice(index, 1);
        projectsData.splice(index, 1);
        this.setState({ projects, projectsData });
    }

    render(): JSX.Element {
        const { projects, selectedProject, selectedProjectIndex } = this.state;
        const Fields: any = projects.length !== 0 ? this._getSelectedProjectFields() : {}; 
        
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
                    projects.length !== 0 && projects.map((project: LipidsVolInfo | LipidsMolWInfo, index: number) => 
                        <div key={ index } className={ `table__item ${index == selectedProjectIndex ? 'active' : '' }`} onClick={ () => this._selectProject(index) }>
                            { 
                                ProjectFields.map((field, subIndex) => 
                                    <div key={subIndex}>
                                        { subIndex == 1 ? this._getProjectTypeName(project[field]) : project[field] }
                                    </div>
                                ) 
                            }
                            <Link className='item__link' to={ this._getProjectLink(project.type) } onClick={ () => this._loadProjectToState(project, index) }>
                                <FontAwesomeIcon icon={ faExternalLinkAlt } />
                            </Link>
                            <div onClick={ this._removeProject.bind(this, index) }>
                                <FontAwesomeIcon icon={ faTimesCircle } className='remove__icon' />
                            </div>
                        </div>
                    )
                }

                <input type='file' accept='.csv, .txt, text/plain' multiple={false}
                    ref={ (el) => this._addProjectInput = el } style={{ display: 'none'}} onChange={ this._readFromFile.bind(this) }
                />
                { FormButton('button', 'Load Project From File', faSave, '', () => this._addProjectInput.click() ) }

            </div>
            <div className='project__form'>
                <div className='form'>
                    <h2 className='form__header'>Project Details</h2>
                    <div className='form__fields'>
                    { map(Fields, (field: IField, name: string) => {
                        return <FormField key={name}
                            input={ { className: 'field__input disabled', value: !selectedProject ? '' : selectedProject[name], readOnly: true } }
                            unitClassName=''
                            label={ field.label }
                            type={ field.type }
                            helpText={null}
                            units={ field.units }
                            meta={{ touched: false, error: null, warning: null}}
                        />

                    }
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
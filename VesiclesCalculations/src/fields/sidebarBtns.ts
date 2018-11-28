import { faHome, faFlask, faFolder } from '@fortawesome/free-solid-svg-icons';

export default ({
<<<<<<< HEAD
    'Home': { path: '/home', icon: FaHome }, 
    'Lipids Volume': { path: '/lipidsVolume', icon: FaFlask },
    'Molecular Weight': { path: '/molecularWeight', icon: FaFlask },
    'My Projects': {path: '/projects', icon: FaFolder }
=======
    'Home': { path: '/home', icon: faHome, step: '' }, 
    'Lipids Volume': { path: '/lipidsVolume', icon: faFlask, step: '/0' },
    'Molecular Weight': { path: '/molecularWeight', icon: faFlask, step: '/0' },
    'My Projects': { path: '/projects', icon: faFolder, step: '' }
>>>>>>> 56840ff... VCC. Released production version v1.0.0
})
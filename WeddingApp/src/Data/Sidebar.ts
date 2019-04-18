import { SidebarTypesEnum } from "../Types/Sidebar";

export default ([
    {
        name: 'about',
        title: 'APIE',
        class: 'o-page-sidebar__item',
        path: '/about',
        type: SidebarTypesEnum.Link
    },
    {
        name: 'festival',
        title: 'FESTIVALIS',
        class: 'o-page-sidebar__item',
        path: '/festival',
        type: SidebarTypesEnum.Link
 
    },
    {
        name: 'ceremony',
        title: 'CEREMONIJA',
        class: 'o-page-sidebar__item',
        path: '/ceremony',
        type: SidebarTypesEnum.Link
    },
    {
        name: 'registry',
        title: 'REGISTRACIJA',
        class: 'o-page-sidebar__item',
        path: '/registry',
        type: SidebarTypesEnum.Link
    },
])
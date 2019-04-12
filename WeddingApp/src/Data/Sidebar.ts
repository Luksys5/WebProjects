import { SidebarTypesEnum } from "../Types/Sidebar";

export default ([
    {
        name: 'about',
        title: 'About',
        class: 'o-page-sidebar__item',
        path: '/about',
        type: SidebarTypesEnum.Link
    },
    {
        name: 'festival',
        title: 'Festival',
        class: 'o-page-sidebar__item',
        path: '/festival',
        type: SidebarTypesEnum.Link
 
    },
    {
        name: 'ceremony',
        title: 'Ceremony',
        class: 'o-page-sidebar__item',
        path: '/ceremony',
        type: SidebarTypesEnum.Link
    },
])
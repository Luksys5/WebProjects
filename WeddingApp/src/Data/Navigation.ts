import { NavItemTypesEnum } from "../types/Navigation";

export default ([
    {
        name: 'about',
        title: 'APIE',
        class: 'o-page-sidebar__item',
        path: '/about',
        type: NavItemTypesEnum.Navigation
    },
    {
        name: 'ceremony',
        title: 'CEREMONIJA',
        class: 'o-page-sidebar__item',
        path: '/ceremony',
        type: NavItemTypesEnum.Navigation
    },
    {
        name: 'registry',
        title: 'ŠVENTĖ IR REGISTRACIJA ',
        class: 'o-page-sidebar__item',
        path: '/registry',
        type: NavItemTypesEnum.Navigation
    },
    {
        name: 'aboutCity',
        title: 'APIE ANYKŠČIUS',
        class: 'o-page-sidebar__item',
        path: '/aboutCity',
        type: NavItemTypesEnum.Navigation
    },
    {
        name: 'contacts',
        title: 'KONTAKTAI',
        class: 'o-page-sidebar__item',
        type: NavItemTypesEnum.Link
    },
])
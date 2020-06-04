import React, { useState, useEffect } from 'react';
import { Game } from '../graphqlApi/types/Game';
import { AsyncData } from '../graphqlApi/types/AsyncData';
import { toast, ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { navigationItems, NavigationItem } from '../components/organisms/NavigationBar';
import { UserQuery } from '../graphqlApi/types/Queries';
import { GET_USER_QUERY } from '../graphqlApi/queries/GetUserQuery';
import { useQuery } from '@apollo/react-hooks';

interface StorageProps {
    likedGames: string[];
    navTitle: string;
    userId: string;
    loginActive: boolean;
    loading: boolean;
    setNavTitle: (newTitle: string) => void;
    setUserId: (id: string) => void;
    setLoginActive: (active: boolean) => void;
    setLoading: (load: boolean) => void;
    setLikedGames: (games: string[]) => void;
}

const initialValue: StorageProps = {
    likedGames: [],
    navTitle: "Home",
    userId: "",
    loginActive: false,
    loading: false,
    setNavTitle: () => { return; },
    setUserId: () => { return; },
    setLoginActive: () => { return; },
    setLoading: () => { return; },
    setLikedGames: () => { return; }
};

export const NavTitles = {
    home: "Home",
    aboutMe: "About me",
    experience: "Experience",
    games: "Games"
}

export const StorageContext = React.createContext<StorageProps>(initialValue);

const matchNavigation = (el: NavigationItem, pathName: string) => el.path !== '/' && pathName.match(new RegExp('^' + el.path));
const idKey = 'xLukas:ID';

export const StorageProvider: React.FC = ({ children }) => {
    const { pathname } = useLocation();
    const [navTitle, setNavTitle] = useState<string>(navigationItems.find((el) => matchNavigation(el, pathname))?.title || NavTitles.home);
    const [userId, setUserId] = useState<string>("");
    const [loginActive, setLoginActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [likedGames, setLikedGames] = useState<string[]>([]);
    const userQueryResult = useQuery<UserQuery>(GET_USER_QUERY, {
        variables: {
            id: userId ? userId : localStorage.getItem(idKey)
        }
    });


    useEffect(
        () => {
            if (!!userQueryResult.data) {
                if (!userQueryResult.data.getUserById || !userQueryResult.data.getUserById.length) {
                    localStorage.setItem(idKey, '');
                    return;
                }
                const games = userQueryResult.data.getUserById.map(user => user.likeId)

                setLikedGames(games);
                setUserId(userQueryResult.data.getUserById[0].id);
            }
        },
        [userQueryResult.data]
    );

    return (
        <StorageContext.Provider value={{
            likedGames,
            navTitle,
            userId,
            loginActive,
            loading,
            setNavTitle,
            setUserId,
            setLoginActive,
            setLoading,
            setLikedGames
        }}>
            <ToastContainer />
            { children }
        </StorageContext.Provider>
    );
}
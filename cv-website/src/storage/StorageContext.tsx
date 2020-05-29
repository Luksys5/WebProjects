import React, { useState, useEffect } from 'react';
import { Game } from '../graphqlApi/types/Game';
import { AsyncData } from '../graphqlApi/types/AsyncData';
import { toast, ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { navigationItems, NavigationItem } from '../components/organisms/NavigationBar';

interface StorageProps {
    navTitle: string;
    setNavTitle: (newTitle: string) => void;
    games: AsyncData<Game[]>;
    latestGame: AsyncData<Game>;
}

const initialValue = {
    navTitle: "Home",
    setNavTitle: () => { return; },
    games: {
        loading: false
    },
    latestGame: {
        loading: false
    }
};

export const NavTitles = {
    home: "Home",
    aboutMe: "About me",
    experience: "Experience",
    games: "Games"
}

// type QueryResult {
//     error
// }

interface SetAsyncDataType {
    <T>(setValue: (val: AsyncData<T>) => void, valueQuery: () => Promise<T | string>): void;
}

export const StorageContext = React.createContext<StorageProps>(initialValue);

const matchNavigation = (el: NavigationItem, pathName: string) => el.path !== '/' && pathName.match(new RegExp('^' + el.path));

export const StorageProvider: React.FC = ({ children }) => {
    const { pathname } = useLocation();
    const [navTitle, setNavTitle] = useState<string>(navigationItems.find((el) => matchNavigation(el, pathname))?.title || NavTitles.home);
    const [games, setGames] = useState<AsyncData<Game[]>>({
        data: undefined,
        loading: false
    });
    const [latestGame, setLatestGame] = useState<AsyncData<Game>>({
        data: undefined,
        loading: false
    });

    const setAsyncData: SetAsyncDataType = async (setValue, valueQuery) => {
        try {
            setValue({
                loading: true,
                data: undefined
            });

            const result = await valueQuery();
            if (typeof(result) === 'string') {
                throw result;
            }

            setValue({
                loading: false,
                data: result
            });
        } catch (ex) {
            toast(ex.toString);

            setValue({
                loading: false,
                data: null
            });
        }
    }

    const fetchLatestGame = () => {
        // @ts-ignore
        // setAsyncData<Game>(setLatestGame, latestGameQuery);
    }

    useEffect(
        () => {
            fetchLatestGame();
        },
        []
    );

    return (
        <StorageContext.Provider value={{
            navTitle,
            setNavTitle,
            games,
            latestGame
        }}>
            <ToastContainer />
            { children }
        </StorageContext.Provider>
    );
}
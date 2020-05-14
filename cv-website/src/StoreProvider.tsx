import React, { createContext, useState } from 'react';

type StoreContextProps = {
    title: string;
    setTitle: (newTitle: string) => void;
}

export const StoreContext = createContext<StoreContextProps>({
    title: '',
    setTitle: (newTitle) => { return; }
});

export const StoreProvider: React.FC = ({ children }) => {
    const [title, setTitle] = useState<string>('');

    return <StoreContext.Provider value={{
        title: title,
        setTitle: setTitle
    }}>
        { children }
    </StoreContext.Provider>
}
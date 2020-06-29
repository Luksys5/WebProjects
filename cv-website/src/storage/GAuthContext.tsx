import React, { createContext, useEffect, useState } from 'react';
// @ts-ignore
import { loadAuth2 } from 'gapi-script';
import { GlobalData } from '../GlobalData';

interface GAuthContextProps {
    name?: string;
    profileImg?: string;
} 

export const GAuthContext = createContext<GAuthContextProps>(
    {
        name: undefined,
        profileImg: undefined
    }
);

export const GAuthProvider: React.FC = ({ children }) => {
    const [name, setName] = useState('');
    const [profileImg, setProfileImg] = useState('');
    
    const auth = async () => {
        const resultAuth = await loadAuth2(GlobalData.gapiKey, '');
        if (resultAuth.isSignedIn.get()) {
            const currentUser = resultAuth.currentUser.get();
            let name = currentUser.getBasicProfile().getName();
            let profileImg = currentUser.getBasicProfile().getImageUrl();
            console.log(name);
        } else {

        }
    }

    useEffect(
        () => {
            auth();
        },
        []
    )

    return (
        <GAuthContext.Provider value={{}}>
            { children }
        </GAuthContext.Provider>
    );
} 

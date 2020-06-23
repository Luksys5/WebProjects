import React, { createContext, useState, useEffect } from 'react';
import { LoginStatus, LoginStatusResponse } from '../types/Fb';
import { GlobalData } from '../GlobalData';

type FBContextProps = {
    status: LoginStatus;
    userId: string;
}

export const FBContext = createContext<FBContextProps>({
    status: 'unknown',
    userId: ''
})

export const FBProvider: React.FC = ({ children }) => {
    const [status, setStatus] = useState<LoginStatus>('unknown');
    const [userId, setUserId] = useState<string>('');

    useEffect(
        () => {
            if (!GlobalData.fbClient) {
                return;
            }

            GlobalData.fbClient.getLoginStatus(
                (response: LoginStatusResponse) => {
                    setStatus(response.status);
                    if (response.authResponse) {
                        setUserId(response.authResponse.userID);
                    }
                }
            );
        },
        [GlobalData.fbClient]
    )

    return <FBContext.Provider value={{
        status, userId
    }}>
        { children }
    </FBContext.Provider>

}
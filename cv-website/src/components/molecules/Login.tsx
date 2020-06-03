import React, { useContext } from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';
import { GoogleLogin, GoogleLoginInfo } from 'react-google-login-component';
import { StorageContext } from '../../storage/StorageContext';
import { IconSprite } from '../atoms/IconSprite';
import { toast } from 'react-toastify';

type LoginProps = {
    active: boolean;
}

const idKey = 'xLukas:ID';

export const Login: React.FC<LoginProps> = ({ active }) => {
    const { setUserId, setLoginActive } = useContext(StorageContext);

    const facebookLoginResponse = (params: ReactFacebookLoginInfo) => {
        setUserId(params.id);
        setLoginActive(false);
        localStorage.setItem(idKey, params.id);
    }

    const googleLoginHandler = (response: (GoogleLoginInfo & { Ea?: string})) => {
        if (response.Ea) {
            setUserId(response.Ea);
            localStorage.setItem(idKey, response.Ea);
            setLoginActive(false);
            return;
        }

        toast.error(
            "Couldn't login with google, try refreshing site",
            {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }
        );
    }

    if (!active) {
        return null;
    }

    return (
        <div className="m-login">
            <h4 className="h4">
                To leave a Like you must login with Facebook or Google
            </h4>

            <IconSprite name="clear" onClick={() => setLoginActive(false)} />

            <div className="m-login__buttons">
                <FacebookLogin
                    appId="255098915740917"
                    fields="email"
                    callback={facebookLoginResponse}
                />

                <GoogleLogin
                    className="m-login__buttons__google"
                    socialId="120373075056-kk2r8shmggf2hqns5olqn5ifmul02u1q.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                    scope="profile"
                    buttonText="Login with Google"
                    responseHandler={googleLoginHandler}
                />
            </div>
        </div>
    );
}
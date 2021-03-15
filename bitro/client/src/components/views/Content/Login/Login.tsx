import React, { useEffect } from 'react';
import KakaoLoginButton from './KakaoLoginButton';
import KakaoShareButton from './KakaoShareButton';


function Login() { 

    useEffect(() => {
        const sdk = document.createElement('script');
        sdk.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        sdk.async = true;

        document.body.appendChild(sdk);

        return () => {
            document.body.removeChild(sdk);
        }

    }, [])

    return (
        <div>
            <KakaoShareButton/>
            <KakaoLoginButton/>
        </div>
    )
}

export default Login
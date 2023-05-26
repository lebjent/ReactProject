import React, { createContext, useEffect, useState } from 'react';
import axiosApi from './axiosApi';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [loginValid, setLoginValid] = useState(false);
    const [userInfo,setUserInfo] = useState({});

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
        // 토큰이 있는 경우 로그인 유효 상태로 설정
        setLoginValid(true);
        } else {
        // 토큰이 없는 경우 로그인 유효하지 않은 상태로 설정
        setLoginValid(false);
        }
        
        const handleBeforeUnload = () => {
        handleLogout(); // 윈도우 창이 닫힐 때 로그아웃 처리
        };

        /* 윈도우창 나가면 로그아웃
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        };

        */
    }, []);

    const handleLogin = (token,id) => {
        // 로그인 성공 시 토큰을 저장하고 로그인 유효 상태로 설정
        localStorage.setItem('token', token);
        setLoginValid(true);
    };

    const handleLogout = () => {
        // 로그아웃 시 토큰 제거하고 로그인 유효하지 않은 상태로 설정
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        setLoginValid(false);
    };

    const handleGetUserInfo = (id) => {
        localStorage.removeItem("userInfo"); // 이전 값 제거
        
        axiosApi
            .post('/getMemberInfo', {
            id: id
            })
            .then((response) => {
            console.log('회원정보 가져오기 성공', response);
            const userInfo = response.data;
            setUserInfo(userInfo);
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            })
            .catch((error) => {
            console.log('회원정보를 가져오는데 실패하였습니다.', error);
            });
    };

    return (
        <LoginContext.Provider value={{ loginValid, handleLogin, handleLogout,handleGetUserInfo , userInfo }}>
        {children}
        </LoginContext.Provider>
    );
};

export { LoginContext, LoginProvider };
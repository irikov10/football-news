import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage';
import { authServiceFactory } from '../services/authService';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken)

    const onLoginSubmit = async(data) => {

        try {
            const result = await authService.login(data);

            setAuth(result);
            
            navigate('/')

        } catch(err) {
            console.log(err)
        }
    };

    const onRegisterSubmit = async(values) => {
        const { confirmPassword, ...registerData} = values;

        if(confirmPassword !== registerData.password) {
            alert('Passwords do not match')
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/')

        } catch (err) {
            console.log(err)
        }

    }

    const onLogout = async() => {
        await authService.logout();

        setAuth({});
    }

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.isAuthenticated,
    }

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
}
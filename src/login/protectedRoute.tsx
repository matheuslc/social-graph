import React, { createContext, ReactElement, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { localStorageHook } from '../localstorage/hook';
import { AuthTokens } from './loginMutation';

export const AuthContext = createContext({} as AuthTokens)
export function ProtectedRoute({ children }): JSX.Element {
    const [access_token] = localStorageHook('access_token')
    const [refresh_token] = localStorageHook('refresh_token')
    
    if (!access_token || !refresh_token) {
        return <>
            <Navigate to={'/login'} />
        </>
    }

    return <>
        <AuthContext.Provider value={{access_token, refresh_token}}>
            {children}
        </AuthContext.Provider>
    </>;
}
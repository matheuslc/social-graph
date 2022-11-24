import React, { createContext, ReactElement, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { localStorageHook } from '../localstorage/hook';
import { AuthTokens } from './loginMutation';

export const AuthContext = createContext({} as AuthTokens)
export function ProtectedRoute({ children }): JSX.Element {
    const [token] = localStorageHook('access_token')
    
    if (!token) {
        return <>
            <Navigate to={'/login'} />
        </>
    }

    return <>
        <AuthContext.Provider value={{access_token: token, refresh_token: ''}}>
            {children}
        </AuthContext.Provider>
    </>;
}
import { useCallback } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useAxios } from './useAxios';

export const useAuthApi = () => {
    const { login: setAuth, logout: performLogout } = useAuth();
    const { loading, error, request, clearError } = useAxios();

    const login = useCallback(async (credentials: any) => {
        const data = await request({
            url: 'auth/login',
            method: 'POST',
            data: credentials
        });
        setAuth(data);
        return data;
    }, [request, setAuth]);

    const logout = useCallback(() => {
        performLogout();
    }, [performLogout]);

    return { login, logout, loading, error, clearError };
};


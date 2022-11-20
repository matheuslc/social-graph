import apiClient from '../api/client'

export interface AuthTokens {
    access_token: string
    refresh_token: string
}

export async function login(username: string, password: string): Promise<AuthTokens> {
    const headers = { 'Content-Type': 'multipart/form-data' }
    const payload = { username, password }

    const { data } = await apiClient.post<AuthTokens>('/api/login', { ...payload }, { headers })

    return data
}
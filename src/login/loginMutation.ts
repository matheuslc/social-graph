import apiClient from '../api/client'

interface AuthTokens {
    accessToken: string
    refreshToken: string
}

export async function login(username: string, password: string): Promise<AuthTokens> {
    const headers = { 'Content-Type': 'multipart/form-data' }
    const payload = { username, password }

    const { data } = await apiClient.post<AuthTokens>('/api/login', { ...payload }, { headers })

    return data
}
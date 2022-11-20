import apiClient from '../api/client'
import { User } from '../user/user'

export async function signup(username: string, email: string, password: string): Promise<User> {
    const headers = { 'Content-Type': 'multipart/form-data' }
    const payload = { username, email, password }

    const { data } = await apiClient.post<User>('/api/user', { ...payload }, { headers })

    return data
}
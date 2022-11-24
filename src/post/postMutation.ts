import client from '../api/client'
import { AuthTokens } from '../login/loginMutation'
import { Post } from './post'

export async function createPost(tokens: AuthTokens, content: string): Promise<Post> {
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${tokens.access_token}` }
    const payload = { content }

    const { data } = await client.post<Post>('/api/post', { ...payload }, { headers })

    return data
}
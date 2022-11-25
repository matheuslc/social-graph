import apiClient from '../api/client'
import { AuthTokens } from '../login/loginMutation'
import { UserPost } from '../post/post'

interface UserPostList {
    posts: UserPost[]
}

export async function timelineQuery(tokens: AuthTokens): Promise<UserPostList> {
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${tokens.access_token}` }

    const { data } = await apiClient.get<UserPostList>('/api/user/timeline', { headers })

    return data
}
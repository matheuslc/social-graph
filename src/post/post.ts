import { User } from "../user/user"

export interface UserPost {
    post: Post
    user: User
}

export interface Post {
    id: string
    content: string
    created_at: Date
    quote: string
    parent: UserPost
}
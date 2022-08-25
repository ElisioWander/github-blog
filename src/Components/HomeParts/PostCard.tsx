import { Link } from 'react-router-dom'
import { PostCardContent } from './PostCardStyles'

type PostData = {
  id: number
  title: string
  createdAt: string
  content: string
}

interface PostCardProps {
  post: PostData
}

export function PostCard({ post }: PostCardProps) {
  return (
    <PostCardContent>
      <Link to={`/post/${post.id}`}>
        <h1>{post.title}</h1>
        <span>{post.createdAt}</span>
      </Link>
      <p>{post.content}</p>
    </PostCardContent>
  )
}

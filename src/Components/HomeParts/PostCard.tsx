import { Link } from 'react-router-dom'
import { PostCardContent } from './PostCardStyles'

type IssueData = {
  id: number
  title: string
  createdAt: string
  content: string
}

interface PostCardProps {
  issue: IssueData
}

export function PostCard({ issue }: PostCardProps) {
  return (
    <PostCardContent>
      <Link to={`/post/${issue.id}`}>
        <h1>{issue.title}</h1>
        <span>{issue.createdAt}</span>
      </Link>
      <p>{issue.content}</p>
    </PostCardContent>
  )
}

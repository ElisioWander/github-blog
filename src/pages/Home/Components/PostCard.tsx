import { Link } from 'react-router-dom'
import { PostCardContent } from './PostCardStyles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type Issue = {
  number: number
  title: string
  body: string
  created_at: string
}

interface PostCardProps {
  issue: Issue
}

export function PostCard({ issue }: PostCardProps) {
  const content = issue.body.substring(0, 100) + '...'
  const dateFormatted = formatDistanceToNow(new Date(issue.created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostCardContent>
      <Link to={`/post/${issue.number}`}>
        <h1>{issue.title}</h1>
        <span>{dateFormatted}</span>
      </Link>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </PostCardContent>
  )
}

import { useParams } from 'react-router-dom'
import { PostContainer } from './PostStyles'
import { useFetch } from '../hooks/useFetch'
import { PostInfo } from '../Components/PostParts/PostInfo'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export type IssueData = {
  title: string
  user: string
  url: string
  comments: number
  createdAt: string
}

export function Post() {
  const { issueId } = useParams()

  const { data } = useFetch<any>(
    `/repos/ElisioWander/github-blog/issues/${issueId}`,
  )

  const issue: IssueData = {
    title: data?.title,
    user: data?.user.login,
    url: data?.html_url,
    comments: data?.comments,
    createdAt:
      data?.created_at &&
      formatDistanceToNow(new Date(data?.created_at), {
        addSuffix: true,
        locale: ptBR,
      }),
  }

  return (
    <PostContainer>
      <PostInfo issue={issue} />
    </PostContainer>
  )
}

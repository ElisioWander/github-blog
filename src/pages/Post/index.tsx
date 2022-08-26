import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { PostContainer, PostContent } from './styles'
import { Loading } from '../../Components/Loading'
import { PostInfo } from './Components/PostInfo'

export type IssueData = {
  title: string
  user: string
  url: string
  content: string
  comments: number
  createdAt: string
}

export function Post() {
  const { issueId } = useParams()

  const { data, isFetching } = useFetch<any>(
    `/repos/ElisioWander/github-blog/issues/${issueId}`,
  )

  const issue: IssueData = {
    title: data?.title,
    user: data?.user.login,
    url: data?.html_url,
    content: data?.body,
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
      {isFetching && <Loading />}
      <PostInfo issue={issue} />

      <PostContent>
        <ReactMarkdown className="lineBreak" remarkPlugins={[remarkGfm]}>
          {issue.content}
        </ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}

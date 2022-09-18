import { useParams } from 'react-router-dom'
import { Loading } from '../../Components/Loading'
import { PostInfo } from './Components/PostInfo'
import { useQuery } from '@tanstack/react-query'
import { getIssue } from '../../hooks/useGithub'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { PostContainer, PostContent } from './styles'

export type Issue = {
  title: string
  user: {
    login: string
  }
  html_url: string
  body: string
  comments: string
  created_at: string
}

export function Post() {
  const { issueId } = useParams()

  const { data: issue, isFetching } = useQuery<Issue>(
    ['ISSUE'],
    () => getIssue(issueId as string),
    {
      staleTime: 1000 * 60, // 1 min
    },
  )

  if (!issue || isFetching) {
    return <Loading />
  }

  return (
    <PostContainer>
      <PostInfo issue={issue} />

      <PostContent>
        <ReactMarkdown className="lineBreak" remarkPlugins={[remarkGfm]}>
          {issue?.body}
        </ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}

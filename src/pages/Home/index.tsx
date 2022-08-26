import { ChangeEvent, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Profile } from './Components/Profile'
import { PostCard } from './Components/PostCard'
import { Loading } from '../../Components/Loading'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import {
  HomeContainer,
  PostCardContainer,
  PublicationAmount,
  SearchSection,
} from './styles'

type IssuesData = {
  id: number
  title: string
  content: string
  createdAt: string
}

export function Home() {
  const [search, setSearch] = useState('')

  const { data, isFetching } = useFetch<any>(
    '/repos/ElisioWander/github-blog/issues',
  )

  const issues: IssuesData[] = data?.map((issue: any) => {
    return {
      id: issue.number,
      title: issue.title,
      content: issue.body.substring(0, 160) + '...',
      createdAt: formatDistanceToNow(new Date(issue.created_at), {
        addSuffix: true,
        locale: ptBR,
      }),
    }
  })

  const filteredIssues =
    search.length > 0
      ? issues?.filter((issue) => issue.title.includes(search))
      : issues

  const publicationAmount = filteredIssues?.length

  function handleGetSearchInputValue(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  return (
    <HomeContainer>
      <Profile />

      <main>
        <SearchSection>
          <PublicationAmount>
            <h2>Publicaçẽs</h2>
            <span>
              {publicationAmount > 1
                ? publicationAmount + ' publicaçãos'
                : publicationAmount + ' publicação'}
            </span>
          </PublicationAmount>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            onChange={handleGetSearchInputValue}
          />
        </SearchSection>

        <PostCardContainer>
          {isFetching && <Loading />}
          {filteredIssues?.map((issue) => (
            <PostCard key={issue.id} issue={issue} />
          ))}
        </PostCardContainer>
      </main>
    </HomeContainer>
  )
}

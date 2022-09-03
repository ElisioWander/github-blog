import { ChangeEvent, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Profile } from './Components/Profile'
import { PostCard } from './Components/PostCard'
import { Loading } from '../../Components/Loading'

import {
  HomeContainer,
  PostCardContainer,
  PublicationAmount,
  SearchSection,
} from './styles'

type Issue = {
  number: number
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [search, setSearch] = useState('')

  const { data: issues, isFetching } = useFetch<Issue[]>(
    '/repos/ElisioWander/github-blog/issues',
  )

  if (!issues || isFetching) {
    return <Loading />
  }

  const filteredIssues =
    search.length > 0
      ? issues.filter((issue) => issue.title.includes(search))
      : issues

  const publicationAmount = filteredIssues.length

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
                ? publicationAmount + ' publicações'
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
          {filteredIssues.map((issue) => (
            <PostCard key={issue.number} issue={issue} />
          ))}
        </PostCardContainer>
      </main>
    </HomeContainer>
  )
}

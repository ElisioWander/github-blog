import { PostCard } from '../Components/HomeParts/PostCard'
import { Profile } from '../Components/HomeParts/Profile'
import posts from '../posts'

import {
  HomeContainer,
  PostCardContainer,
  PublicationAmount,
  SearchSection,
} from './HomeStyles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <main>
        <SearchSection>
          <PublicationAmount>
            <h2>Publicaçẽs</h2>
            <span>6 publicações</span>
          </PublicationAmount>
          <input type="text" placeholder="Buscar conteúdo" />
        </SearchSection>

        <PostCardContainer>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostCardContainer>
      </main>
    </HomeContainer>
  )
}

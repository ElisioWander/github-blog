import { Link } from 'react-router-dom'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Issue } from '..'
import { GithubInfo } from '../../../Components/GithubInfo/GithubInfo'
import { GithubInfoItem } from '../../../Components/GithubInfo/GithubInfoItem'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { PostInfoSection } from './PostInfoStyles'

interface PostInfoProps {
  issue: Issue
}

export function PostInfo({ issue }: PostInfoProps) {
  const dateFormatted = formatDistanceToNow(new Date(issue?.created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostInfoSection>
      <header>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>
        <a href={issue?.html_url} target="_blank" rel="noreferrer">
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>

      <h1>{issue?.title}</h1>

      <GithubInfo>
        <GithubInfoItem
          icon={<FontAwesomeIcon icon={faGithub} />}
          info={issue?.user.login}
        />
        <GithubInfoItem
          icon={<FontAwesomeIcon icon={faCalendarDay} />}
          info={dateFormatted}
        />
        <GithubInfoItem
          icon={<FontAwesomeIcon icon={faComment} />}
          info={issue?.comments}
          text="Comentários"
        />
      </GithubInfo>
    </PostInfoSection>
  )
}

import { Link } from 'react-router-dom'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IssueData } from '../../pages/Post'
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { PostInfoSection } from './PostInfoStyles'

interface PostInfoProps {
  issue?: IssueData
}

export function PostInfo({ issue }: PostInfoProps) {
  return (
    <PostInfoSection>
      <header>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>
        <a href={issue?.url} target="_blank" rel="noreferrer">
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>

      <h1>{issue?.title}</h1>

      <footer>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          {issue?.user}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          {issue?.createdAt}
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          {issue?.comments} comentários
        </span>
      </footer>
    </PostInfoSection>
  )
}

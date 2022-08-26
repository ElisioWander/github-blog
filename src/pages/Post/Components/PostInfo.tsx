import { Link } from 'react-router-dom'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IssueData } from '..'
import { GithubInfo } from '../../../Components/GithubInfo/GithubInfo'
import { GithubInfoItem } from '../../../Components/GithubInfo/GithubInfoItem'
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

      <GithubInfo>
        <GithubInfoItem
          icon={<FontAwesomeIcon icon={faGithub} />}
          info={issue?.user}
        />
        <GithubInfoItem
          icon={<FontAwesomeIcon icon={faCalendarDay} />}
          info={issue?.createdAt}
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

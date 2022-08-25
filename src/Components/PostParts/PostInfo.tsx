import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostInfoSection } from './PostInfoStyles'

export function PostInfo() {
  return (
    <PostInfoSection>
      <header>
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </a>
        <a href="">
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>

      <h1>JavaScript data types and data structures</h1>

      <footer>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          Elisio Wander
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          Há 1 dia
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />5 comentários
        </span>
      </footer>
    </PostInfoSection>
  )
}

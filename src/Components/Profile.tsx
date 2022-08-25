import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <div>
      <img src="https://github.com/ElisioWander.png" alt="" />

      <div>
        <header>
          <h2>Elisio Wander</h2>

          <a href="">
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            Elisio Wander
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            10 seguidores
          </span>
        </footer>
      </div>
    </div>
  )
}

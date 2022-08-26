import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useFetch } from '../../../hooks/useFetch'
import { GithubInfo } from '../../../Components/GithubInfo/GithubInfo'
import { GithubInfoItem } from '../../../Components/GithubInfo/GithubInfoItem'
import {
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { ProfileContainer, ProfileContent } from './ProfileStyles'

type ProfileData = {
  name: string
  login: string
  avatar_url: string
  bio: string
  followers: number
}

export function Profile() {
  const { data: profile } = useFetch<ProfileData>('/users/elisioWander')

  return (
    <ProfileContainer>
      <img src={profile?.avatar_url} alt="" />

      <ProfileContent>
        <header>
          <h2>{profile?.name}</h2>

          <a
            href={`https://github.com/${profile?.login}`}
            target="_blank"
            rel="noreferrer"
          >
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <p>{profile?.bio}</p>

        <GithubInfo>
          <GithubInfoItem
            icon={<FontAwesomeIcon icon={faGithub} />}
            info={profile?.login}
          />
          <GithubInfoItem
            icon={<FontAwesomeIcon icon={faUserGroup} />}
            info={profile?.followers}
            text="seguidores"
          />
        </GithubInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}

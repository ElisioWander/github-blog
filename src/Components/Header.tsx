import headerCover from '../assets/header-cover.svg'
import { HeaderContainer } from './HeaderStyles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerCover} alt="" />
    </HeaderContainer>
  )
}

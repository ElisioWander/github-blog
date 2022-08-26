import headerCover from '../../assets/header-cover.svg'
import { HeaderContainer } from './Styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerCover} alt="" />
    </HeaderContainer>
  )
}

import { ReactNode } from 'react'
import { InfoContainer } from './GithubInfoStyles'

interface GithubInfosProps {
  children: ReactNode
}

export function GithubInfo({ children }: GithubInfosProps) {
  return <InfoContainer>{children}</InfoContainer>
}

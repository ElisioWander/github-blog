import { ReactNode } from 'react'

interface GithubInfoItemProps {
  icon: ReactNode
  info?: string | number
  text?: string
}

export function GithubInfoItem({ icon, info, text }: GithubInfoItemProps) {
  return (
    <span>
      {icon}
      {info} {text}
    </span>
  )
}

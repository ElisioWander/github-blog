import { api } from '../services/axios'

export async function getRepositories() {
  const response = await api.get('/repos/ElisioWander/github-blog/issues')

  return response.data
}

export async function getUserData() {
  const response = await api.get('/users/elisioWander')

  return response.data
}

export async function getIssue(issueId: string) {
  const response = await api.get(
    `/repos/ElisioWander/github-blog/issues/${issueId}`,
  )

  return response.data
}

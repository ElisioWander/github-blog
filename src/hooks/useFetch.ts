import { useEffect, useState } from 'react'
import { api } from '../services/axios'

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [url])

  return { data, error, isFetching }
}

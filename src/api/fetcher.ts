type FetchOptions = RequestInit & { parseJson?: boolean }

export const fetcher = (url: string, options?: FetchOptions) =>
  fetch(url, options).then(res => {
    if (options?.parseJson === false) return res
    return res.json()
  })

fetcher.get = (url: string, options?: FetchOptions) =>
  fetcher(url, { ...options, method: 'GET' })

fetcher.post = (url: string, body: unknown, options?: FetchOptions) =>
  fetcher(url, {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    },
    body: JSON.stringify(body)
  })

fetcher.put = (url: string, body: unknown, options?: FetchOptions) =>
  fetcher(url, {
    ...options,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    },
    body: JSON.stringify(body)
  })

fetcher.delete = (url: string, options?: FetchOptions) =>
  fetcher(url, { ...options, method: 'DELETE' })

export const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

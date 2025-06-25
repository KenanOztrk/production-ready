export const fetcher = (url: string) => fetch(url).then(res => res.json())

export const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))


// import useSWR from 'swr'
// import type { Pokemon } from '../types'

// const fetcher = (url: string) => fetch(url).then(res => res.json())

// export function usePokemonList(limit = 20) {
//   // return useSWR<Pokemon[]>(`pokemon-list-${limit}`, async () => {
//     await new Promise(resolve => setTimeout(resolve, 3000))
//     const baseData = await fetcher(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
//     const detailResults: Pokemon[] = await Promise.all(
//       baseData.results.map((p: { url: string }) => fetcher(p.url))
//     )
//     return detailResults
//   })
// }

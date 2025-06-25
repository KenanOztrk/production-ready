import { fetcher, wait } from '../fetcher'
import type { Pokemon } from '../../types'

export async function getPokemonList(limit = 40): Promise<Pokemon[]> {
  await wait(3000)
  const base = await fetcher(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
  const details: Pokemon[] = await Promise.all(
    base.results.map((p: { url: string }) => fetcher(p.url))
  )
  return details
}

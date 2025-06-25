import { fetcher } from '../fetcher'
import type { Pokemon } from '../../types'

export function getPokemonByName(name: string): Promise<Pokemon> {
  return fetcher(`https://pokeapi.co/api/v2/pokemon/${name}`)
}

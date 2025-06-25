import useSWR from 'swr'
import { getPokemonList } from '../api/pokemon/getPokemonList'

export function usePokemonList(limit = 20) {
  return useSWR(['pokemon-list', limit], () => getPokemonList(limit))
}

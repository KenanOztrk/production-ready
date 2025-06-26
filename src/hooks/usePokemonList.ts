import useSWR from 'swr'
import { getPokemonList } from '../api/pokemon/getPokemonList'

export function usePokemonList(limit = 40) {
  return useSWR(['pokemon-list', limit], () => getPokemonList(limit), {
    keepPreviousData: true, // loading sırasında eski veriyi koru
    revalidateOnFocus: false, // yeniden fetch yapma
  })
}

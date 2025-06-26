import { mutate } from 'swr'
import { postVote } from '../api/vote/postVote'
import type { VotePayload } from '../types'

export function useVote() {
  const vote = async (payload: VotePayload) => {

    const cacheKey = ['pokemon-votes', payload.pokemonName] // hangi veriyi güncelleyeceğimizi belirtiyoruz

    mutate(
      cacheKey,
      (prev: number | undefined) => {
        if (!prev) return payload.vote === 'up' ? 1 : -1
        return payload.vote === 'up' ? prev + 1 : prev - 1
      },
      false
    )

    const response = await postVote(payload)

    mutate(cacheKey) 

    return response
  }

  return { vote }
}

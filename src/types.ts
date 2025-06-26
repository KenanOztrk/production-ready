
export interface PokemonType {
  type: {
    name: string
  }
}

export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  sprites: {
    front_default: string
  }
  types: PokemonType[]
}

export type VotePayload = {
  pokemonName: string
  vote: 'up' | 'down'
}


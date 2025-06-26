import { render, screen } from '@testing-library/react'
import { PokemonCard } from './PokemonCard'
import { Provider } from 'jotai'
import type { Pokemon } from '../../types'
import { describe, it, expect, vi } from 'vitest'

vi.mock('@tanstack/react-router', () => ({
  Link: (props: Record<string, unknown>) => <a {...props} />,
}))

const mockPokemon: Pokemon = {
  id: 25,
  name: 'pikachu',
  height: 4,
  weight: 60,
  sprites: {
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  },
  types: [{ type: { name: 'electric' } }],
}

describe('PokemonCard', () => {
  it('renders PokemonCard with name and image', () => {
    render(
      <Provider>
        <PokemonCard pokemon={mockPokemon} />
      </Provider>
    )

    expect(screen.getByText(/pikachu/i)).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', mockPokemon.sprites.front_default)
  })
})
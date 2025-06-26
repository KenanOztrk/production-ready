import { useMemo } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { toggleFavoriteAtom, isFavoriteAtom } from '../../store/favoritesAtom'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { Link } from '@tanstack/react-router'
import type { Pokemon } from '../../types'



export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {  
  const isFavoriteAtomInstance = useMemo(() => isFavoriteAtom(pokemon.name), [pokemon.name])
  const isFavorite = useAtomValue(isFavoriteAtomInstance)
  const [, toggleFavorite] = useAtom(toggleFavoriteAtom)

  return (
    <Link to="/pokemon/$name" params={{ name: pokemon.name }} className="no-underline">
      <Card className="hover:shadow-lg transition-shadow duration-200">
        <CardMedia
          component="img"
          height="140"
          image={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <CardContent className="flex justify-between items-center">
          <Typography className="capitalize">{pokemon.name}</Typography>

          <div
            role="button"
            aria-label="Toggle favorite"
            className={`cursor-pointer text-xl ${
              isFavorite ? 'i-mdi:heart text-red-500' : 'i-mdi:heart-outline text-gray-400'
            }`}
            onClick={(e) => {
              e.preventDefault()
              toggleFavorite(pokemon.name)
            }}
          />
        </CardContent>
      </Card>
    </Link>
  )
}

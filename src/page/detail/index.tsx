import { useParams } from '@tanstack/react-router'
import { Card, CardContent, Typography } from '@mui/material'
import { usePokemonList } from '../../hooks/usePokemonList'
import { VoteButton } from '../../components/Vote/VoteButton'

const Detail = () => {
const { name } = useParams({ from: '/pokemon/$name' })
  const { data, isLoading } = usePokemonList(20) //sayıyı değiştir cache patlasın.

  if (isLoading) return <p>Yükleniyor...</p>
console.log(data, 'sssss', name);

  const pokemon = data?.find(p => p.name === name)

  if (!pokemon) return <p>Pokémon bulunamadı.</p>

  return (
    <div className="p-4">
      <Card>
        <CardContent>
          <Typography variant="h4" className="capitalize">{pokemon.name}</Typography>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="my-4 mx-auto" />
          <Typography>Ağırlık: {pokemon.weight}</Typography>
          <Typography>Boy: {pokemon.height}</Typography>
          <Typography>Tipler: {pokemon.types.map(t => t.type.name).join(', ')}</Typography>
                    <VoteButton pokemonName={pokemon.name} />
          
        </CardContent>
      </Card>
    </div>
  )
}

export default Detail
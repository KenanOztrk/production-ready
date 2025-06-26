import { Grid, Typography } from "@mui/material"
import { PokemonCard } from "../../components/Card/PokemonCard"
import { usePokemonList } from "../../hooks/usePokemonList"

const Home = () => {
 const { data, isLoading, error } = usePokemonList(20)

  if (isLoading) return <p>Yükleniyor...</p>
  if (error) return <p>Hata oluştu.</p>
  if (!data) return null

  return (
    <div className="p-4">
      <Typography variant="h4" gutterBottom>Pokémon Listesi</Typography>
      <Grid container spacing={2}>
        {data.map(pokemon => (
          <Grid item xs={6} sm={4} md={3} key={pokemon.name}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
export default Home
import { useAtomValue } from "jotai"
import { favoritesAtom } from "../../store/favoritesAtom"
import { PokemonCard } from "../../components/Card/PokemonCard"
import { usePokemonList } from "../../hooks/usePokemonList"

const Favorites = () => {
  const favorites = useAtomValue(favoritesAtom)
  const { data: pokemonList, isLoading } = usePokemonList()

  const favoritePokemons = pokemonList?.filter(p => favorites.includes(p.name)) ?? []

  if (isLoading) return <div className="p-4">Yükleniyor...</div>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {favoritePokemons.length === 0 ? (
        <div className="text-center col-span-full">Hiç favoriniz yok 🥲</div>
      ) : (
        favoritePokemons.map(pokemon => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))
      )}
    </div>
  )
}

export default Favorites
import { atom } from 'jotai'

export const favoritesAtom = atom<string[]>([])

export const toggleFavoriteAtom = atom(
  null,
  (get, set, name: string) => {
    const favorites = get(favoritesAtom)
    if (favorites.includes(name)) {
      set(favoritesAtom, favorites.filter(f => f !== name))
    } else {
      set(favoritesAtom, [...favorites, name])
    }
  }
)

export const isFavoriteAtom = (name: string) =>
  atom((get) => get(favoritesAtom).includes(name))


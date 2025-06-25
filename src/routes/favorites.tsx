import { createFileRoute } from '@tanstack/react-router'
import Favorites from '../page/favorites'

export const Route = createFileRoute('/favorites')({
  component: Favorites,
})



import { Route as rootRoute } from './__root'
import { Route as indexRoute } from './index'
import { Route as favoritesRoute } from './favorites'
import { Route as detailRoute } from './pokemon/$name'

export const routeTree = rootRoute.addChildren([
  indexRoute,
  favoritesRoute,
  detailRoute
])

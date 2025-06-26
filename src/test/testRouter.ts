import { createRouter, createMemoryHistory } from '@tanstack/react-router'
import { routeTree } from '../routes/routeTree'

export function createTestRouter() {
  return createRouter({
    routeTree,
    history: createMemoryHistory(),
  })
}
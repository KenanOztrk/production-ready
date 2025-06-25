import { createFileRoute } from '@tanstack/react-router'
import Detail from '../../page/detail'

export const Route = createFileRoute('/pokemon/$name')({
  component: Detail,
})



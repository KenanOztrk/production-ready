import { createFileRoute } from '@tanstack/react-router'
import Home from '../page/home'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="p-4">
      <Home />
    </div>
  )
})

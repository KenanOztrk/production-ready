import { useVote } from "../../hooks/useVote"

export function VoteButton({ pokemonName }: { pokemonName: string }) {
  const { vote } = useVote()

  return (
    <div className="flex gap-2">
      <button onClick={() => vote({ pokemonName, vote: 'up' })}>👍 Oy Ver</button>
      <button onClick={() => vote({ pokemonName, vote: 'down' })}>👎 Oy Ver</button>
    </div>
  )
}

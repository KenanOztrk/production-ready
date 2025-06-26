import type { VotePayload } from '../../types'
import { wait } from '../fetcher'

export async function postVote(data: VotePayload): Promise<{ success: boolean }> {
  await wait(1000)
  console.log('Mock POST payload:', data)
  return { success: true }
}

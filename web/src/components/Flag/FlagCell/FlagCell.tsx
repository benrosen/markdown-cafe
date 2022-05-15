import type { FindFlagById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Flag from 'src/components/Flag/Flag'

export const QUERY = gql`
  query FindFlagById($id: Int!) {
    flag: flag(id: $id) {
      id
      pageId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Flag not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ flag }: CellSuccessProps<FindFlagById>) => {
  return <Flag flag={flag} />
}

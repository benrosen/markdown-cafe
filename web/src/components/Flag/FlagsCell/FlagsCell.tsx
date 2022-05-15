import type { FindFlags } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Flags from 'src/components/Flag/Flags'

export const QUERY = gql`
  query FindFlags {
    flags {
      id
      pageId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No flags yet. '}
      <Link
        to={routes.newFlag()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ flags }: CellSuccessProps<FindFlags>) => {
  return <Flags flags={flags} />
}

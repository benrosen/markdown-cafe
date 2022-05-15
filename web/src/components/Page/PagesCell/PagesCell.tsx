import type { FindPages } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Pages from 'src/components/Page/Pages'

export const QUERY = gql`
  query FindPages {
    pages {
      createdAt
      id
      markdown
      secret
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No pages yet. '}
      <Link
        to={routes.newPage()}
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

export const Success = ({ pages }: CellSuccessProps<FindPages>) => {
  return <Pages pages={pages} />
}

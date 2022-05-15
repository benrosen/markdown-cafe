import { CellFailureProps, CellSuccessProps, useMutation } from '@redwoodjs/web'
import { Redirect, routes } from '@redwoodjs/router'

import type { FindPageById } from 'types/graphql'
import Page from 'src/components/Page/Page'
import { toast } from '@redwoodjs/web/toast'
import { useEffect } from 'react'
import { useParams } from '@redwoodjs/router'

export const QUERY = gql`
  query FindPageById($id: String!) {
    page: page(id: $id) {
      createdAt
      id
      markdown
      secret
      updatedAt
    }
  }
`

const CREATE_PAGE_MUTATION = gql`
  mutation CreatePageMutation($input: CreatePageInput!) {
    createPage(input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const { id } = useParams()

  const [createPage, { loading, error }] = useMutation(CREATE_PAGE_MUTATION, {
    onCompleted: () => {
      toast.success('Page created')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  useEffect(() => {
    createPage({ variables: { input: { id: id } } })
  }, [createPage, id])

  return error ? (
    <Failure error={error} />
  ) : loading ? (
    <Loading />
  ) : (
    <Redirect to={routes.editPage({ id })} options={{ replace: true }} />
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ page }: CellSuccessProps<FindPageById>) => {
  return <Page page={page} />
}

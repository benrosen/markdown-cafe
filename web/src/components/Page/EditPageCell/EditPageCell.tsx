import { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'

import type { EditPageById } from 'types/graphql'
import MarkdownView from 'react-showdown'
import PageForm from 'src/components/Page/PageForm'
import { toast } from '@redwoodjs/web/toast'
import { useMutation } from '@redwoodjs/web'

export const QUERY = gql`
  query EditPageById($id: String!) {
    page: page(id: $id) {
      createdAt
      id
      markdown
      secret
      updatedAt
    }
  }
`

const UPDATE_PAGE_MUTATION = gql`
  mutation UpdatePageMutation($id: String!, $input: UpdatePageInput!) {
    updatePage(id: $id, input: $input) {
      createdAt
      id
      markdown
      secret
      updatedAt
    }
  }
`

export const beforeQuery = (props) => {
  return {
    variables: props,
    fetchPolicy: 'no-cache',
    pollInterval: 1000,
  }
}

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ page }: CellSuccessProps<EditPageById>) => {
  const [updatePage, { loading, error }] = useMutation(UPDATE_PAGE_MUTATION, {
    onCompleted: () => {
      toast.success('Page updated')
      navigate(routes.page({ id: page.id }))
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updatePage({ variables: { id, input } })
  }

  return page ? (
    <div className="container mx-auto max-w-lg py-36">
      <div className="prose prose-2xl prose-h1:font-headings">
        <MarkdownView markdown={`# Edit page`} />
      </div>
      <PageForm page={page} onSave={onSave} error={error} loading={loading} />
    </div>
  ) : (
    <Loading />
  )
}

/**
 *
 * <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Page {page.id}</h2>
      </header>
      <div className="rw-segment-main">
        <PageForm page={page} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
 */

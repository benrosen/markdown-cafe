import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PageForm from 'src/components/Page/PageForm'

const CREATE_PAGE_MUTATION = gql`
  mutation CreatePageMutation($input: CreatePageInput!) {
    createPage(input: $input) {
      id
    }
  }
`

const NewPage = () => {
  const [createPage, { loading, error }] = useMutation(CREATE_PAGE_MUTATION, {
    onCompleted: () => {
      toast.success('Page created')
      navigate(routes.pages())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createPage({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Page</h2>
      </header>
      <div className="rw-segment-main">
        <PageForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPage

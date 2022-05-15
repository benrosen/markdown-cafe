import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import FlagForm from 'src/components/Flag/FlagForm'

const CREATE_FLAG_MUTATION = gql`
  mutation CreateFlagMutation($input: CreateFlagInput!) {
    createFlag(input: $input) {
      id
    }
  }
`

const NewFlag = () => {
  const [createFlag, { loading, error }] = useMutation(CREATE_FLAG_MUTATION, {
    onCompleted: () => {
      toast.success('Flag created')
      navigate(routes.flags())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { pageId: parseInt(input.pageId), })
    createFlag({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Flag</h2>
      </header>
      <div className="rw-segment-main">
        <FlagForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFlag

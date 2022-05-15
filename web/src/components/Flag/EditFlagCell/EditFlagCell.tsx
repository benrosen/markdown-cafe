import type { EditFlagById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import FlagForm from 'src/components/Flag/FlagForm'

export const QUERY = gql`
  query EditFlagById($id: Int!) {
    flag: flag(id: $id) {
      id
      pageId
    }
  }
`
const UPDATE_FLAG_MUTATION = gql`
  mutation UpdateFlagMutation($id: Int!, $input: UpdateFlagInput!) {
    updateFlag(id: $id, input: $input) {
      id
      pageId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ flag }: CellSuccessProps<EditFlagById>) => {
  const [updateFlag, { loading, error }] = useMutation(UPDATE_FLAG_MUTATION, {
    onCompleted: () => {
      toast.success('Flag updated')
      navigate(routes.flags())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { pageId: parseInt(input.pageId), })
    updateFlag({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Flag {flag.id}</h2>
      </header>
      <div className="rw-segment-main">
        <FlagForm flag={flag} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}

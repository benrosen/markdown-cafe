import EditPageCell from 'src/components/Page/EditPageCell'

type PagePageProps = {
  id: string
}

const EditPagePage = ({ id }: PagePageProps) => {
  return <EditPageCell id={id} />
}

export default EditPagePage

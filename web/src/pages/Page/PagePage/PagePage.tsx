import PageCell from 'src/components/Page/PageCell'

type PagePageProps = {
  id: string
}

const PagePage = ({ id }: PagePageProps) => {
  return <PageCell id={id} />
}

export default PagePage

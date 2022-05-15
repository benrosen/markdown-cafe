import Article from 'src/components/Article/Article'

const Page = ({ page }) => {
  return <Article markdown={page.markdown} />
}

export default Page

import Article from 'src/components/Article/Article'
import { MetaTags } from '@redwoodjs/web'

const markdown = `
# Welcome.

You can add your own pages to this website.

You don't have to know how to program; as long as you can enter text into a computer, you're all set.

It's free. There are no ads. You don't have to log in to use this website.

## Find your place.

If you visit a page on \`markdown.cafe\` and it's empty, then it's up for grabs.

Here are some pages that I made to help people get started:

- [FAQ](/faq)
- [Markdown Guide](/markdown-guide)

Please make yourself at home. :coffee:

Sincerely,

Ben
`

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Article markdown={markdown} />
    </>
  )
}

export default HomePage

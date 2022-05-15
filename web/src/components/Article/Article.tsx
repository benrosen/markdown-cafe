import MarkdownView from 'react-showdown'

const Article = ({ markdown }: { markdown: string }) => {
  return (
    <article className="prose prose-2xl prose-headings:font-headings prose-p:font-body prose-a:font-body prose-li:font-body container max-w-lg mx-auto py-36 px-4">
      <MarkdownView markdown={markdown} options={{ emoji: true }} />
    </article>
  )
}

export default Article

import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <p className="text-gray-600 mb-10 mt-20">
        <em>
          All content in the autoBlog project are <strong>AI-generated with OpenAI</strong>. For reliable, academic sources on topics within Philosophy, please visit the{' '}
          <a href="https://plato.stanford.edu" target="_blank" rel="noreferrer" className="text-green-600">
            Stanford Encyclopedia of Philosophy
          </a>
          . Please report inaccurate, offensive, or harmful material to me{' '}
          <a href="mailto:ruth.ym.ng@gmail.com" className="text-green-600">
            here
          </a>
          .
        </em>
      </p>
    </div>
  )
}

export default PostBody

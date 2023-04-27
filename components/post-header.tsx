import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import markdownStyles from './markdown-styles.module.css'


type Props = {
  title: string
  coverImage: string
  date: string
}

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-12 md:mb-10 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
      <p className="text-gray-600 mb-10">
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
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
      </div>
    </>
  )
}

export default PostHeader

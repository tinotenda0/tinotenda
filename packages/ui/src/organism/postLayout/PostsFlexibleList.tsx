import { Fragment } from 'react'
import { PostListCardSm } from '../../molecules/card/PostListCardSm'

type PostsFlexibleListProps = {
   data?: Array<{
      id?: number
      title?: string
      slug?: string
      featuremedia?: { source_url: string; alt: string }
      author?: string
      authorId?: number
      category?: any
      publishTime?: string
      avatar?: string
      content?: string
   }>
}

export const PostsFlexibleList = ({ data }: PostsFlexibleListProps) => {
   const postData = data && data?.length > 0 ? data : [1, 2, 3, 4, 5, 6, 7]

   return (
      <Fragment>
         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {postData
               ?.slice(0, 6)
               ?.map((item: any, index: number) => (
                  <PostListCardSm cardData={item} key={index} />
               ))}
         </div>
      </Fragment>
   )
}

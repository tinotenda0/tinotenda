import React from 'react'
import { PostListCardSm } from '../../molecules/card/PostListCardSm'
import { PostOverlayMd } from '../../molecules/card/PostOverlayMd'

type PostMasonryOverlaySingleProps = {
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

export const PostMasonryOverlaySingle = ({
   data,
}: PostMasonryOverlaySingleProps) => {
   const postData = data && data?.length > 0 ? data : [1, 2, 3, 4, 5, 6, 7, 8]

   return (
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 sm:px-0">
         {postData?.slice(0, 1).map((item: any, index: number) => (
            <PostOverlayMd cardData={item} key={index} />
         ))}
         <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 items-center gap-5">
            {postData?.slice(2, 8).map((postData: any, index: number) => (
               <PostListCardSm cardData={postData} key={index} />
            ))}
         </div>
      </div>
   )
}

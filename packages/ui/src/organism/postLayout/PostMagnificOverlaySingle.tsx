import React from 'react'
import { PostListCardSm } from '../../molecules/card/PostListCardSm'
import { PostOverlayLandscapeLg } from '../../molecules/card/PostOverlayLandscapeLg'

type PostMagnificOverlaySingleProps = {
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

export const PostMagnificOverlaySingle = ({
   data,
}: PostMagnificOverlaySingleProps) => {
   const postData = data && data?.length > 0 ? data : [1, 2, 3, 4, 5, 6, 7]

   return (
      <div className="w-full">
         {postData?.slice(0, 1)?.map((item: any, index: number) => (
            <PostOverlayLandscapeLg cardData={item} key={index} />
         ))}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {postData?.slice(1, 7)?.map((item: any, index: number) => (
               <PostListCardSm cardData={item} key={index} />
            ))}
         </div>
      </div>
   )
}

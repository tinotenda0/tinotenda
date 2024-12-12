import React from 'react'
import { PostListCardSm } from '../../molecules/card/PostListCardSm'
import { PostOverlayMd } from '../../molecules/card/PostOverlayMd'

type PostMagnificOverlayTwoProps = {
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

export const PostMagnificOverlayTwo = ({
   data,
}: PostMagnificOverlayTwoProps) => {
   const postData = data && data?.length > 0 ? data : [1, 2, 3, 4, 5, 6, 7, 8]

   return (
      <div className="w-full">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {postData?.slice(0, 2)?.map((item: any, index: number) => (
               <PostOverlayMd cardData={item} key={index} />
            ))}
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {postData?.slice(2, 8)?.map((item: any, index: number) => (
               <PostListCardSm cardData={item} key={index} />
            ))}
         </div>
      </div>
   )
}

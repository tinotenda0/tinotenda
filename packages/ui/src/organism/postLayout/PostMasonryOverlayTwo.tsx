import React from 'react'
import { PostListCardSm } from '../../molecules/card/PostListCardSm'
import { PostOverlayMd } from '../../molecules/card/PostOverlayMd'

type PostMasonryOverlayTwoProps = {
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

export const PostMasonryOverlayTwo = ({ data }: PostMasonryOverlayTwoProps) => {
   const postData = data && data?.length > 0 ? data : [1, 2, 3, 4, 5, 6, 7, 8]

   return (
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 sm:px-0">
         <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 items-center gap-5">
            {postData?.slice(0, 2)?.map((item: any, index: number) => (
               <PostOverlayMd cardData={item} key={index} />
            ))}
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
            {postData?.slice(2, 5)?.map((item: any, index: number) => (
               <PostListCardSm cardData={item} key={index} />
            ))}
         </div>
      </div>
   )
}

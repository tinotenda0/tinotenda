import Link from 'next/link'
import React from 'react'
import { PostListCard } from '../../molecules/card/PostListCard'

type PostListSingleColProps = {
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
export const PostListSingleCol = ({ data }: PostListSingleColProps) => {
   const postData = data && data?.length > 0 ? data : [1, 2, 3, 4, 5, 6]

   return (
      <div className="w-full">
         <div className="grid grid-cols-1 gap-5">
            {postData?.slice(0, 6)?.map((item: any, index: number) => (
               <div
                  className={`pb-5 ${
                     index === postData?.length - 1
                        ? ''
                        : 'border-b border-base-content/10'
                  }`}
                  key={index}
               >
                  <PostListCard cardData={item} />
               </div>
            ))}
         </div>
      </div>
   )
}

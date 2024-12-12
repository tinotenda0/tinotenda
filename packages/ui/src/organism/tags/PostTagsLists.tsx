import React from 'react'
import Link from 'next/link'

type PostTagsListsProps = {
   data?: any
}

export const PostTagsLists = ({ data }: PostTagsListsProps) => {
   const tagData = data && data?.length > 0 ? data : [1, 2, 3, 4, 5, 6, 7, 8]

   return (
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-7 p-5 border border-base-content border-opacity-10 rounded-xl">
         <p className="text-base-content font-semibold text-base whitespace-nowrap leading-5">
            Most Search Tags :
         </p>
         <div className="flex flex-wrap justify-center md:justify-start items-center gap-1">
            {tagData?.slice(0, 8).map((item: any, index: number) => (
               <Link href={`/tags/${item?.slug}`} key={index}>
                  <span className="text-primary text-xs font-medium px-2 py-1 bg-primary bg-opacity-5 rounded-md cursor-pointer">
                     #{item?.name || 'Keyword'}
                  </span>
               </Link>
            ))}
         </div>
      </div>
   )
}

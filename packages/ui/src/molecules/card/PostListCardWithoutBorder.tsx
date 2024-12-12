import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { dateFormate } from '../../utils/helper.utils'

type PostListCardWithoutBorderProps = {
   cardData?: any
}

export const PostListCardWithoutBorder = ({
   cardData,
}: PostListCardWithoutBorderProps) => {
   return (
      <div className="card">
         {/* card body section  */}
         <div className="card-body p-0">
            <div className="flex items-center gap-4 font-work">
               <figure className="flex-none">
                  <Link href={`/${cardData.slug}`}>
                     <Image
                        src={
                           cardData?.featuredmedia?.sourceUrl ||
                           'https://placehold.it/110x90'
                        }
                        alt={cardData?.featuredmedia?.alt || 'post-thumb'}
                        className="rounded-md"
                        width={110}
                        height={190}
                     />
                  </Link>
               </figure>
               <div>
                  <h5>
                     <Link
                        href={`/${cardData.slug}`}
                        className="font-work line-clam-2 font-semibold text-base text-base-content leading-5 hover:text-primary transition hover:duration-300"
                     >
                        {cardData?.title ||
                           `All the Stats, Facts, and Data You will Ever Need to Know`}
                     </Link>
                  </h5>
                  <p className="mt-2.5 text-base-content/60 text-sm">
                     {dateFormate(cardData?.publishTime)}
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

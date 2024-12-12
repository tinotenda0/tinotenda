import Link from 'next/link'
import Image from 'next/image'
import { dateFormate } from '../../utils/helper.utils'

type PostOverlayLgProps = {
   cardData?: {
      id: number
      title: string
      slug: string
      featuredmedia: { sourceUrl: string; alt: string }
      author: string
      authorSlug: string
      category: string[]
      publishTime: string
      avatar: string
      content: string
   }
}

export const PostOverlayLg = ({ cardData }: PostOverlayLgProps) => {
   return (
      <div className="card relative w-fit h-fit font-work">
         {/* Card Image */}
         <div className="min-h-[370px] sm:min-h-[660px]">
            <figure className="h-full max-w-full ">
               <Image
                  src={
                     cardData?.featuredmedia?.sourceUrl ||
                     'https://placehold.it/700x700'
                  }
                  alt={cardData?.featuredmedia?.alt || 'post-thumb'}
                  className={`rounded-xl min-h-[370px] sm:min-h-[660px] h-full object-cover`}
                  width={660}
                  height={660}
               />
            </figure>
         </div>
         <div className="card-body gap-0 absolute bottom-0 rounded-xl w-full z-20 p-5 sm:p-10">
            <div className="flex flex-wrap items-center gap-1.5">
               {cardData?.category?.map((categoryData: any, index: number) => (
                  <Link href={`/category/${categoryData?.slug}`} key={index}>
                     <div className="badge bg-primary border-0 rounded-md">
                        {categoryData?.name}
                     </div>
                  </Link>
               ))}
            </div>
            <div className="mt-4">
               <Link href={`/${cardData?.slug}`}>
                  <h2 className="text-lg sm:text-xl line-clam-3 md:text-3xl lg:text-4xl font-semibold text-neutral-content hover:text-primary transition hover:duration-300 line-clamp-3">
                     {cardData?.title}
                  </h2>
               </Link>
            </div>
            {/* user info and date  */}
            <div className="mt-5 flex items-center gap-5">
               <div className=" flex items-center gap-3">
                  {/* user avatar  */}
                  <div className="avatar">
                     <div className="w-9 rounded-full">
                        <Image
                           src={
                              cardData?.avatar || 'https://placehold.it/100x100'
                           }
                           alt="author"
                           width={100}
                           height={100}
                        />
                     </div>
                  </div>
                  <h5>
                     <Link
                        href={`/author/${cardData?.authorSlug}`}
                        className="text-neutral-content font-medium hover:text-primary transition hover:duration-300"
                     >
                        {cardData?.author}
                     </Link>
                  </h5>
               </div>
               <p className="text-neutral-content">
                  {dateFormate(cardData?.publishTime)}
               </p>
            </div>
         </div>

         {/*  overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
      </div>
   )
}

import Link from 'next/link'
import Image from 'next/image'
import { dateFormate } from '../../utils/helper.utils'

type PostOverlayLandscapeSmProps = {
   cardData?: {
      id: number
      title: string
      slug: string
      featuredmedia: { sourceUrl: string; alt: string }
      author: string
      authorSlug: string
      authorId: number
      category: any
      publishTime: string
      avatar: string
      content: string
   }
}

export const PostOverlayLandscapeSm = ({
   cardData,
}: PostOverlayLandscapeSmProps) => {
   return (
      <div className="card relative h-fit font-work">
         {/* Card Image */}
         <div className="min-h-[370px] sm:min-h-[320px]">
            <figure className="h-[370px] sm:h-[320px] max-w-full">
               <Image
                  src={
                     cardData?.featuredmedia?.sourceUrl ||
                     'https://placehold.it/700x700'
                  }
                  alt={cardData?.featuredmedia?.alt || 'post-thumb'}
                  className={`rounded-xl w-full h-full object-cover`}
                  width={700}
                  height={700}
               />
            </figure>
         </div>
         <div className="card-body gap-0 absolute bottom-0 rounded-xl w-full z-20 p-6">
            <div className="flex flex-wrap items-center gap-1.5">
               {cardData?.category
                  ?.slice(0, 3)
                  ?.map((categoryData: any, index: number) => (
                     <Link href={`/category/${categoryData?.slug}`} key={index}>
                        <div className="badge bg-primary border-0 rounded-md">
                           {' '}
                           {categoryData?.name}
                        </div>
                     </Link>
                  ))}
            </div>
            <div className="mt-4">
               <Link href={`/${cardData?.slug}`}>
                  <h2 className="text-lg sm:text-xl line-clam-3 lg:text-2xl font-semibold text-neutral-content hover:text-primary transition hover:duration-300 line-clamp-3">
                     {cardData?.title ||
                        `The Impact of Technology on the Workplace: How Technology is Changing`}
                  </h2>
               </Link>
            </div>
            {/* user info and date  */}
            <div className="mt-6 flex items-center gap-5">
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
                        {cardData?.author || 'unknown'}
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

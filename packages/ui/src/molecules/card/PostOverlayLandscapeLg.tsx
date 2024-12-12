import Link from 'next/link'
import Image from 'next/image'
import { dateFormate } from '../../utils/helper.utils'

type PostOverlayLandscapeLgProps = {
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

export const PostOverlayLandscapeLg = ({
   cardData,
}: PostOverlayLandscapeLgProps) => {
   return (
      <div className="card relative font-work max-h-[450px]">
         {/* Card Image */}
         <figure>
            <Image
               width={1216}
               height={450}
               src={
                  cardData?.featuredmedia?.sourceUrl ||
                  'https://placehold.it/800x450'
               }
               alt={cardData?.featuredmedia?.alt || 'post-thumb'}
               className="rounded-xl w-full object-cover"
            />
         </figure>
         <div className="card-body p-2 md:p-10 absolute bottom-0 w-full z-20">
            {cardData?.category?.length > 0 && (
               <div className="flex gap-1 flex-wrap ">
                  {cardData?.category
                     ?.slice(0, 3)
                     ?.map((categoryData: any, index: number) => (
                        <Link
                           href={`/category/${categoryData?.slug}`}
                           key={index}
                        >
                           <div className="w-fit text-white px-2.5 py-0.5 bg-primary text-xs md:text-sm rounded-md">
                              {categoryData?.name}
                           </div>
                        </Link>
                     ))}
               </div>
            )}
            <h3>
               <a
                  href={`/${cardData?.slug}`}
                  className="text-neutral-content font-semibold text-xl line-clam-3 md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition hover:duration-500"
               >
                  {cardData?.title ||
                     `The Impact of Technology on the Workplace: How Technology is Changing`}
               </a>
            </h3>
            <div className="mt-3 md:mt-6 flex items-center gap-5 text-neutral-content">
               <div className=" flex items-center gap-3">
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
                     <a
                        href={`/author/${cardData?.authorSlug}`}
                        className="text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
                     >
                        {cardData?.author || 'unknown'}
                     </a>
                  </h5>
               </div>
               <p className=" text-xs md:text-base">
                  {dateFormate(cardData?.publishTime)}
               </p>
            </div>
         </div>

         {/*  overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
      </div>
   )
}

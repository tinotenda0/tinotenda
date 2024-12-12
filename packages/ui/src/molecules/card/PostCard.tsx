import Link from 'next/link'
import Image from 'next/image'
import { dateFormate } from '../../utils/helper.utils'

type PostCardProps = {
   cardData: {
      id: number
      title: string
      slug: string
      featuredmedia: { sourceUrl: string; alt: string }
      author: string
      authorSlug: string
      authorId: number
      authorDescription: string
      category: any
      publishTime: string
      avatar: string
      content: string
   }
}

export const PostCard = ({ cardData }: PostCardProps) => {
   return (
      <div className="card w-fit p-4 border border-base-content/10 rounded-xl font-work">
         <Link href={`/${cardData?.slug}`}>
            <figure className="w-full">
               <Image
                  src={
                     cardData?.featuredmedia?.sourceUrl ||
                     'https://placehold.it/360x240'
                  }
                  alt={cardData?.featuredmedia?.alt || 'post-thumb'}
                  className="object-cover w-full h-full mx-auto rounded-xl"
                  width={360}
                  height={240}
               />
            </figure>
         </Link>
         <div className="card-body py-6 px-2 font-medium">
            {cardData?.category?.length > 0 && (
               <div className="flex gap-1 flex-wrap">
                  {cardData?.category
                     ?.slice(0, 3)
                     ?.map((categoryData: any, index: number) => (
                        <Link
                           href={`/category/${categoryData?.slug}`}
                           key={index}
                        >
                           <span
                              className="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-0.5 min-h-fit h-fit rounded-md w-fit capitalize font-work"
                              key={index}
                           >
                              {categoryData?.name}
                           </span>
                        </Link>
                     ))}
               </div>
            )}
            <h3>
               <Link
                  href={`/${cardData?.slug}`}
                  className="text-base-content line-clam-3 hover:text-primary transition-all duration-300 ease-in-out font-semibold text-lg md:text-xl lg:text-2xl mt-2 font-work"
               >
                  {cardData?.title ||
                     `The Impact of Technology on the Workplace: How Technology is Changing`}
               </Link>
            </h3>
            <div className="mt-5 flex items-center gap-5 text-base-content/60 ">
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
                     <Link
                        href={`/author/${cardData?.authorSlug}`}
                        className="text-base font-medium hover:text-primary transition hover:duration-300 font-work"
                     >
                        {cardData?.author || 'unknown'}
                     </Link>
                  </h5>
               </div>
               <p className="text-base font-work">
                  {dateFormate(cardData?.publishTime)}
               </p>
            </div>
         </div>
      </div>
   )
}

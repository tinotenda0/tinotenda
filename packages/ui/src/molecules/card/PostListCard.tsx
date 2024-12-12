import Link from 'next/link'
import Image from 'next/image'
import { dateFormate } from '../../utils/helper.utils'

type PostListCardProps = {
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

export const PostListCard = ({ cardData }: PostListCardProps) => {
   return (
      <div className="card">
         {/* card body section  */}
         <div className="card-body p-0 rounded-xl w-fit">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 font-work">
               <figure className="flex-none !block w-full md:w-fit">
                  <Link href={`/${cardData?.slug}`}>
                     <Image
                        src={
                           cardData?.featuredmedia?.sourceUrl ||
                           'https://placehold.it/320x240'
                        }
                        alt={cardData?.featuredmedia?.alt || 'post-thumb'}
                        className="rounded-md w-full md:w-fit"
                        width={320}
                        height={240}
                     />
                  </Link>
               </figure>
               <div>
                  {cardData?.category.length > 0 && (
                     <div className="flex gap-2 flex-wrap mb-3">
                        {cardData?.category
                           ?.slice(0, 3)
                           ?.map((categoryData: any, index: number) => (
                              <Link
                                 href={`/category/${categoryData?.slug}`}
                                 key={index}
                              >
                                 <span className="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-1 min-h-fit h-fit rounded-md w-fit capitalize font-work">
                                    {categoryData?.name}
                                 </span>
                              </Link>
                           ))}
                     </div>
                  )}
                  <h3>
                     <Link
                        href={`/${cardData?.slug}`}
                        className="font-work line-clam-2 font-semibold text-xl md:text-2xl text-base-content leading-7 hover:text-primary transition hover:duration-300"
                     >
                        {cardData?.title ||
                           `The Art of Traveling: Tips and Tricks for a Memorable Journey`}
                     </Link>
                  </h3>
                  <p className="mt-4 font-serif text-base text-base-content/70">
                     Traveling can be a thrilling and enriching experience, but
                     it also requires careful planning and preparation...
                  </p>
                  <div className="mt-6 flex items-center gap-5 text-base-content/60">
                     <div className="flex items-center gap-2">
                        <div className="avatar">
                           <div className="w-7 rounded-full">
                              <Image
                                 src={
                                    cardData?.avatar ||
                                    'https://placehold.it/100x100'
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
                              className="text-sm font-medium hover:text-primary transition hover:duration-300 whitespace-nowrap"
                           >
                              {cardData?.author || 'unknown'}
                           </Link>
                        </h5>
                     </div>
                     <p className="text-sm whitespace-nowrap">
                        {dateFormate(cardData?.publishTime)}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

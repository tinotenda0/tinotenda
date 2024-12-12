import Link from 'next/link'
import Image from 'next/image'

type PostOverlaySmProps = {
   cardData?: {
      id: number
      title: string
      slug: string
      featuredmedia?: { sourceUrl: string; alt: string }
      author: string
      authorId: number
      category: any
      publishTime: string
      avatar: string
      content: string
   }
}

export const PostOverlaySm = ({ cardData }: PostOverlaySmProps) => {
   return (
      <div className="card relative w-fit h-fit font-work">
         {/* Card Image */}
         <div className="min-h-[320px]">
            <figure className="h-full max-w-full">
               <Image
                  src={
                     cardData?.featuredmedia?.sourceUrl ||
                     'https://placehold.it/700x700'
                  }
                  alt={cardData?.featuredmedia?.alt || 'post-thumb'}
                  className={`rounded-xl min-h-[320px] h-full object-cover`}
                  width={320}
                  height={320}
               />
            </figure>
         </div>
         <div className="card-body gap-0 absolute bottom-0 rounded-xl w-full z-20 p-6">
            <div className="flex flex-wrap items-center gap-1.5">
               {cardData?.category?.map((categoryData: any, index: number) => (
                  <Link href={`/category/${categoryData?.slug}`} key={index}>
                     <div className="badge bg-primary border-0 rounded-md">
                        {categoryData?.name}
                     </div>
                  </Link>
               ))}
            </div>
            <div className="mt-3">
               <Link href={`/${cardData?.slug}`}>
                  <h2 className="text-lg font-semibold line-clam-3 text-neutral-content hover:text-primary transition hover:duration-300 line-clamp-3">
                     {cardData?.title ||
                        'The Impact of Technology on the Workplace: How Technology is Changing'}
                  </h2>
               </Link>
            </div>
         </div>
         {/*  overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
      </div>
   )
}

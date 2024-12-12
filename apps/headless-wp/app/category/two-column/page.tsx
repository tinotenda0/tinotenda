import {
   AdvertisementHorizontal,
   PageInfo,
   PostGridTwoCol,
   PostOverlayCard,
} from '@metablog/ui'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPosts } from '@/lib/wp-api'

export const metadata: Metadata = {
   title: 'Category Two Column',
   description: 'Category Two Column',
}

export default async function CategoryTwoColumn() {
   // *** get posts ***
   const { data } = await getPosts({ per_page: 10 })

   return (
      <main className="container mx-auto px-5 md:px-0">
         {/* PageInfo Component */}
         <PageInfo
            pageData={{
               name: 'Category Two Column',
               slug: 'category-two-column',
            }}
         />
         {/* page banner or post card overlay Component */}
         <section className="mt-12">
            <PostOverlayCard cardData={data[0]} />
         </section>
         <div className="mt-12">
            {/* all post card in a 2 grid basis component */}
            <PostGridTwoCol data={data} />
            <div className="flex items-center justify-center mt-8">
               <Link
                  href="/blog"
                  className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
               >
                  View All Post
               </Link>
            </div>
         </div>
         {/* advertisement Component */}
         <section className=" w-full my-20 flex items-center justify-center">
            <div className="w-full lg:w-9/12">
               <AdvertisementHorizontal />
            </div>
         </section>
      </main>
   )
}

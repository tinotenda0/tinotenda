import {
   AdvertisementHorizontal,
   PageInfo,
   PostListSingleCol,
   PostOverlayCard,
} from '@metablog/ui'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPosts } from '@/lib/wp-api'

export const metadata: Metadata = {
   title: 'Category List No Sidebar',
   description: 'Category List No Sidebar',
}

export default async function CategoryListNoSidebar() {
   const { data } = await getPosts({ per_page: 10 })
   return (
      <main className="container mx-auto px-5 md:px-0">
         {/* PageInfo Component */}
         <PageInfo
            pageData={{
               name: 'Category List No Sidebar',
               slug: 'category-list-no-sidebar',
            }}
         />
         {/* page banner or postcard overlay  Component */}
         <section className="mt-12">
            <PostOverlayCard cardData={data[0]} />
         </section>
         <div className="flex items-center justify-center mt-12">
            <div className=" w-full lg:w-8/12">
               {/* all post card  Component */}
               <PostListSingleCol data={data} />
               <div className="flex items-center justify-center mt-8">
                  <Link
                     href="/blog"
                     className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
                  >
                     View All Post
                  </Link>
               </div>
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

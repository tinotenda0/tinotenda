import {
   AdvertisementHorizontal,
   PageInfo,
   PostGridTwoCol,
   PostOverlayCard,
} from '@metablog/ui'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getCategories, getPosts } from '@/lib/wp-api'

export const metadata: Metadata = {
   title: 'Category Full Banner Right Sidebar',
   description: 'Category Full Banner Right Sidebar',
}

export default async function CategoryFullBannerRightSidebar() {
   // *** get posts ***
   const { data } = await getPosts({ per_page: 10 })

   // *** get categories data ***
   const { data: categoryData } = await getCategories({ per_page: 10 })

   return (
      <main className="container mx-auto px-5 md:px-0">
         {/* PageInfo Component */}
         <PageInfo
            pageData={{
               name: 'Category Full Banner Right Sidebar',
               slug: 'category-full-banner-right-sidebar',
            }}
         />
         {/* Banner overlay card Component  section */}
         <section className="mt-12">
            <PostOverlayCard cardData={data[0]} />
         </section>
         {/*  With Sidebar Section */}
         <section className="mt-12">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
               {/*  Body Component */}
               <div className="col-span-12 lg:col-span-8">
                  <div>
                     {/* all post card Component section*/}
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
               </div>
               {/*  Sidebar Component */}
               <Sidebar data={data} categoryData={categoryData} />
            </div>
         </section>
         {/* advertisement  Component */}
         <section className=" w-full my-20 flex items-center justify-center">
            <div className="w-full lg:w-9/12">
               <AdvertisementHorizontal />
            </div>
         </section>
      </main>
   )
}

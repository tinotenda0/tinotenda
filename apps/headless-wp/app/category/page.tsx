import {
   AdvertisementHorizontal,
   PageInfo,
   PostGridTwoCol,
   PostOverlayLandscapeLg,
} from '@metablog/ui'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getCategories, getPosts } from '@/lib/wp-api'

export const metadata: Metadata = {
   title: 'Category Right Sidebar',
   description: 'Category Right Sidebar',
}

export default async function CategoryPage() {
   // *** get posts ***
   const { data } = await getPosts({ per_page: 10 })

   // *** get categories data ***
   const { data: categoryData } = await getCategories({ per_page: 10 })

   return (
      <main className="container mx-auto px-5 md:px-0">
         {/* PageInfo Component */}
         <PageInfo
            pageData={{
               name: 'Category Right Sidebar',
               slug: 'category-right-sidebar',
            }}
         />
         {/*  With Sidebar Section */}
         <section className="mt-12">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
               {/*  Body Component */}
               <div className="col-span-12 lg:col-span-8">
                  {/* post card overlay Component */}
                  <PostOverlayLandscapeLg cardData={data} />
                  <div className="mt-8">
                     {/* all post collection Component */}
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
         {/* advertisement Component */}
         <section className=" w-full my-20 flex items-center justify-center">
            <div className="w-full lg:w-9/12">
               <AdvertisementHorizontal />
            </div>
         </section>
      </main>
   )
}

import Link from 'next/link'
import type { Metadata } from 'next'

import {
   Advertisement,
   PostGridTwoCol,
   PostMasonryOverlaySingle,
   PostOverlayFourCol,
   PostOverlayLgGridBanner,
   PostTagsLists,
} from '@metablog/ui'
import Sidebar from '@/components/sidebar'
import { getCategories, getPosts } from '@/lib/wp-api'

const metadata: Metadata = {
   title: 'Home Four | MetaBlog',
   description: 'This is home four page of MetaBlog',
}

export { metadata }

export default async function HomeFour() {
   // *** get posts data ***
   const { data } = await getPosts({ per_page: 10 })

   // *** get categories data ***
   const { data: categoryData } = await getCategories({ per_page: 10 })

   return (
      <main className="container mx-auto px-5 sm:px-0">
         {/* Banner Component */}
         <section>
            <PostOverlayLgGridBanner data={data} />
         </section>

         {/* Post Tags Component */}
         <section className="py-8">
            <PostTagsLists data={data} />
         </section>

         {/* Trending Post Component */}
         <section className="py-10">
            <div className="font-work flex items-center justify-between mb-8">
               <h5 className="text-base-content text-2xl font-bold">
                  Trending Post
               </h5>
               <Link
                  href="/blog"
                  className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
               >
                  View All Post
               </Link>
            </div>
            <PostOverlayFourCol data={data} />
         </section>

         {/*  Advertisement Component */}
         <div className="my-10 flex items-center justify-center">
            <div className="w-11/12 lg:w-8/12">
               <Advertisement />
            </div>
         </div>

         {/* Editor Pick Post Component */}
         <section className="py-10">
            <div className="font-work flex items-center justify-between mb-8">
               <h5 className="text-base-content text-2xl font-bold">
                  Editor Pick
               </h5>
               <Link
                  href="/blog"
                  className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
               >
                  View All Post
               </Link>
            </div>
            <PostMasonryOverlaySingle data={data} />
         </section>

         {/*  With Sidebar Section */}
         <section className="py-10">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
               {/*  Boyd Component */}
               <div className="col-span-12 lg:col-span-8">
                  {/*  Post Magnific Overlay Single Component */}
                  <div className="font-work flex items-center justify-between mb-8">
                     <h5 className="text-base-content text-2xl font-bold">
                        Weekly Post
                     </h5>
                  </div>
                  <PostGridTwoCol data={data} />
                  <div className="flex justify-center mt-8">
                     <Link
                        href="/blog"
                        className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
                     >
                        View All Post
                     </Link>
                  </div>
                  {/*  Advertisement Component */}
                  <div className="my-16 flex items-center justify-center">
                     <div className="w-11/12">
                        <Advertisement />
                     </div>
                  </div>
               </div>
               {/*  Sidebar Component */}
               <Sidebar data={data} categoryData={categoryData} />
            </div>
         </section>
      </main>
   )
}

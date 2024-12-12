import Link from 'next/link'
import type { Metadata } from 'next'
import {
   Advertisement,
   PostGridThreeCol,
   PostMasonryOverlaySingle,
   PostOverlayFourCol,
   PostOverlayGridListBanner,
   PostTagsLists,
} from '@metablog/ui'
import { getPosts, getTags } from '@/lib/wp-api'

export const metadata: Metadata = {
   title: 'Home Two | MetaBlog',
   description: 'This is home two page of MetaBlog',
}
export default async function HomeTwo() {
   // ======================get posts data==========================
   const { data } = await getPosts({ per_page: 10 })

   // =====================get tags data===========
   const { data: tagData, error: tagDataError } = await getTags()

   return (
      <main className="container mx-auto px-5 sm:px-0">
         {/* Banner Component */}
         <section>
            <PostOverlayGridListBanner data={data} />
         </section>

         {/* Post Tags Component */}
         <section className="py-8">
            <PostTagsLists data={tagData} />
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

         {/* Latest Post Post Component */}
         <section className="py-10">
            <div className="font-work flex items-center justify-between mb-8">
               <h5 className="text-base-content text-2xl font-bold">
                  Latest Post
               </h5>
               <Link
                  href="/blog"
                  className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
               >
                  View All Post
               </Link>
            </div>
            <PostGridThreeCol data={data} />
         </section>

         {/*  Advertisement Component */}
         <div className="my-20 flex items-center justify-center">
            <div className="w-11/12 lg:w-8/12">
               <Advertisement />
            </div>
         </div>
      </main>
   )
}

import React from 'react'
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
// json data
import postsData from '@/data/posts/allPostData.json'
import tagsData from '@/data/tags/allTagsData.json'

export const metadata: Metadata = {
   title: 'Home Two | MetaBlog',
   description: 'This is home two page of MetaBlog',
}
export default function HomeTwo() {
   return (
      <main className="container mx-auto px-5 sm:px-0">
         {/* Banner Component */}
         <section>
            <PostOverlayGridListBanner data={postsData} />
         </section>

         {/* Post Tags Component */}
         <section className="py-8">
            <PostTagsLists data={tagsData} />
         </section>

         {/* Trending Post Component */}
         <section className="py-10">
            <div className="font-work flex items-center justify-between mb-8">
               <h5 className="text-base-content text-2xl font-bold">
                  Trending Post
               </h5>
               <Link
                  href="/category/right-sidebar"
                  className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
               >
                  View All Post
               </Link>
            </div>
            <PostOverlayFourCol data={postsData} />
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
                  href="/category/right-sidebar"
                  className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
               >
                  View All Post
               </Link>
            </div>
            <PostMasonryOverlaySingle data={postsData} />
         </section>

         {/* Latest Post Post Component */}
         <section className="py-10">
            <div className="font-work flex items-center justify-between mb-8">
               <h5 className="text-base-content text-2xl font-bold">
                  Latest Post
               </h5>
               <Link
                  href="/category/right-sidebar"
                  className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
               >
                  View All Post
               </Link>
            </div>
            <PostGridThreeCol data={postsData} />
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

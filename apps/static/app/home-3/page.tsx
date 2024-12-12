import Link from 'next/link'
import React from 'react'
import type { Metadata } from 'next'
import {
   Advertisement,
   PostGridThreeCol,
   PostOverlayFourCol,
   PostOverlayMixBanner,
   PostsFlexibleList,
   PostTagsLists,
} from '@metablog/ui'
// json data
import postsData from '@/data/posts/allPostData.json'
import tagsData from '@/data/tags/allTagsData.json'

export const metadata: Metadata = {
   title: 'Home Three | MetaBlog',
   description: 'This is home three page of MetaBlog',
}

export default function HomeThree() {
   return (
      <main className="container mx-auto px-5 sm:px-0">
         {/* Banner Component */}
         <section>
            <PostOverlayMixBanner data={postsData} />
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
            <PostsFlexibleList data={postsData} />
         </section>

         {/* Latest Post Component */}
         <section className="py-10">
            <div className="font-work flex items-center justify-between mb-8">
               <h5 className="text-base-content text-2xl font-bold">
                  Latest Post
               </h5>
            </div>
            <PostGridThreeCol data={postsData} />
            <div className="flex justify-center mt-8">
               <Link
                  href="/category/right-sidebar"
                  className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
               >
                  View All Post
               </Link>
            </div>
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

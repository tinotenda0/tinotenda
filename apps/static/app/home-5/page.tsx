import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
   Advertisement,
   PostListSingleCol,
   PostMasonryOverlayTwo,
   PostOverlayFourCol,
   PostTagsLists,
} from '@metablog/ui'
import Sidebar from '@/components/sidebar'
import { PostsCarousel } from '@/components/carousel/PostsCarousel'
// json data
import postsData from '@/data/posts/allPostData.json'
import tagsData from '@/data/tags/allTagsData.json'
import categoryData from '@/data/categories/allCategoryData.json'

export const metadata: Metadata = {
   title: 'Home Five | MetaBlog',
   description: 'This is home five page of MetaBlog',
}

export default async function HomeFive() {
   return (
      <main className="container mx-auto px-5 sm:px-0">
         {/* Post Carousel Component */}
         <section>
            <PostsCarousel data={postsData} />
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
            <PostMasonryOverlayTwo data={postsData} />
         </section>

         {/*  With Sidebar Section */}
         <section className="py-10">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
               {/*  Body Component */}
               <div className="col-span-12 lg:col-span-8">
                  {/*  Post Magnific Overlay Single Component */}
                  <div className="font-work flex items-center justify-between mb-8">
                     <h5 className="text-base-content text-2xl font-bold">
                        Latest Post
                     </h5>
                  </div>
                  <PostListSingleCol data={postsData} />
                  <div className="flex justify-center mt-8">
                     <Link
                        href="/category/right-sidebar"
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
               <Sidebar data={postsData} categoryData={categoryData} />
            </div>
         </section>
      </main>
   )
}

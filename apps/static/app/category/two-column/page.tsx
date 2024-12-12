import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
   AdvertisementHorizontal,
   PageInfo,
   PostGridTwoCol,
   PostOverlayCard,
} from '@metablog/ui'
// json data
import postsData from '@/data/posts/allPostData.json'

export const metadata: Metadata = {
   title: 'Category Two Column',
   description: 'Category Two Column',
}

export default function CategoryTwoColumn() {
   return (
      <main className="container mx-auto px-5 md:px-0">
         {/* PageInfo Component */}
         <PageInfo />
         {/* page banner or post card overlay Component */}
         <section className="mt-12">
            {postsData?.slice(0, 1).map((item: any, index: number) => (
               <PostOverlayCard cardData={item} key={index} />
            ))}
         </section>
         <div className="mt-12">
            {/* all post card in a 2 grid basis component */}
            <PostGridTwoCol data={postsData?.slice(1)} />
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

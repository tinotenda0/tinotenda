import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
   AdvertisementHorizontal,
   PageInfo,
   PostGridTwoCol,
   PostOverlayCard,
} from '@metablog/ui'
import Sidebar from '@/components/sidebar'
// json data
import postsData from '@/data/posts/allPostData.json'
import categoryData from '@/data/categories/allCategoryData.json'

export const metadata: Metadata = {
   title: 'Category Full Banner Right Sidebar',
   description: 'Category Full Banner Right Sidebar',
}

export default function CategoryFullBannerRightSidebar() {
   return (
      <main className="container mx-auto px-5 md:px-0">
         {/* PageInfo Component */}
         <PageInfo />
         {/* Banner overlay card Component  section */}
         <section className="mt-12">
            {postsData?.slice(0, 1).map((item: any, index: number) => (
               <PostOverlayCard cardData={item} key={index} />
            ))}
         </section>
         {/*  With Sidebar Section */}
         <section className="mt-12">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
               {/*  Body Component */}
               <div className="col-span-12 lg:col-span-8">
                  <div>
                     {/* all post card Component section*/}
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
               </div>
               {/*  Sidebar Component */}
               <Sidebar data={postsData} categoryData={categoryData} />
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
import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
   AdvertisementHorizontal,
   PageInfo,
   PostListSingleCol,
   PostOverlayLandscapeLg,
} from '@metablog/ui'
import Sidebar from '@/components/sidebar'
// json data
import postsData from '@/data/posts/allPostData.json'
import categoryData from '@/data/categories/allCategoryData.json'

export const metadata: Metadata = {
   title: 'Category Left Sidebar',
   description: 'Category Left Sidebar',
}

export default function CategoryListLeftSidebar() {
   return (
      <main className="container mx-auto px-5 md:px-0">
         {/* PageInfo Component */}
         <PageInfo />
         {/*  With Sidebar Section */}
         <section className="mt-12">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
               {/*  Sidebar Component */}
               <Sidebar data={postsData} categoryData={categoryData} />
               {/*  Body Component */}
               <div className="col-span-12 lg:col-span-8">
                  {/* page banner or post card overlay Component */}
                  {postsData?.slice(0, 1).map((item: any, index: number) => (
                     <PostOverlayLandscapeLg cardData={item} key={index} />
                  ))}
                  <div className="mt-8">
                     {/* all post card  Component */}
                     <PostListSingleCol data={postsData?.slice(1)} />
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

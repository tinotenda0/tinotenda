import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
   AdvertisementHorizontal,
   AuthorInfo,
   PostGridTwoCol,
} from '@metablog/ui'
import Sidebar from '@/components/sidebar'
// json data
import postsData from '@/data/posts/allPostData.json'
import categoryData from '@/data/categories/allCategoryData.json'

export const metadata: Metadata = {
   title: 'Author | MetaBlog',
   description: 'This is author page of MetaBlog',
}

const Author = () => {
   return (
      <main>
         {/* Author info */}
         <section>
            <AuthorInfo />
         </section>

         {/* Latest Post */}
         <section>
            <div className="container mx-auto mt-12 mb-24 px-5 sm:px-0">
               <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
                  {/*  Body Component */}
                  <div className="col-span-12 lg:col-span-8">
                     {/* all post collection Component */}
                     <PostGridTwoCol data={postsData} />
                     <div className="flex items-center justify-center mt-8">
                        <button className="btn btn-outline btn-secondary font-work px-5">
                           Load More
                        </button>
                     </div>
                  </div>
                  {/*  Sidebar Component */}
                  <Sidebar data={postsData} categoryData={categoryData} />
               </div>
            </div>
         </section>
         {/* advertisement Component */}
         <section className="w-full my-20 flex items-center justify-center">
            <div className="w-full max-w-4xl">
               <AdvertisementHorizontal />
            </div>
         </section>
      </main>
   )
}

export default Author

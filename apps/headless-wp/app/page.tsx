import Link from 'next/link'
import parse from 'html-react-parser'
import type { Metadata } from 'next'

import {
   Advertisement,
   PostMagnificOverlaySingle,
   PostMagnificOverlayTwo,
   PostOverlayFourCol,
   PostOverlayGridBanner,
   PostsFlexibleList,
   PostTagsLists,
} from '@metablog/ui'
import Sidebar from '@/components/sidebar'
import { getCategories, getPosts, getTags } from '@/lib/wp-api'
import { getSeoHead } from '@/lib/seo/getHead'
import { arrangeSeoData } from '@/lib/seo/seoData'

export async function generateMetadata(): Promise<Metadata> {
   const url = process.env.API_ENDPOINT as string

   // fetch the rank-math seo data
   const seoData = await getSeoHead(url)

   // parse and filter seo data
   const parseSeoData = parse(seoData?.head || '') as any
   const filterEmptySeoData = parseSeoData?.filter((n: any) => n && n?.type)

   // arrange the seo array into required object
   const seoObject = arrangeSeoData(filterEmptySeoData)

   return {
      ...seoObject,
   }
}

export default async function Home() {
   // *** get posts data ***
   const { data } = await getPosts({ per_page: 10 })

   // *** get tags data ***
   const { data: tagData } = await getTags({ per_page: 10 })

   // *** get categories data ***
   const { data: categoryData } = await getCategories({ per_page: 10 })

   return (
      <main className="container mx-auto px-5 sm:px-0">
         {/* Banner Component */}
         <section>
            <PostOverlayGridBanner data={data} />
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
            <PostsFlexibleList data={data} />
         </section>

         {/*  With Sidebar Section */}
         <section className="py-10">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
               {/*  Body Component */}
               <div className="col-span-12 lg:col-span-8">
                  {/*  Post Magnific Overlay Single Component */}
                  <div className="font-work flex items-center justify-between mb-8">
                     <h5 className="text-base-content text-2xl font-bold">
                        Weekly Post
                     </h5>
                     <Link
                        href="/blog"
                        className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
                     >
                        View All Post
                     </Link>
                  </div>
                  <PostMagnificOverlaySingle data={data} />

                  {/*  Advertisement Component */}
                  <div className="my-16 flex items-center justify-center">
                     <div className="w-11/12">
                        <Advertisement />
                     </div>
                  </div>

                  {/*  Post Magnific Overlay Two Component */}
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
                  <PostMagnificOverlayTwo data={data} />

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

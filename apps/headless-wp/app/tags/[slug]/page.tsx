import { AdvertisementHorizontal, PageInfo } from '@metablog/ui'
import type { Metadata } from 'next'
import { getCategories, getPosts, getTags } from '@/lib/wp-api'
import { notFound } from 'next/navigation'
import { getSeoHead } from '@/lib/seo/getHead'
import { arrangeSeoData } from '@/lib/seo/seoData'

import parse from 'html-react-parser'
import PageBody from './PageBody'

export async function generateMetadata({
   params,
}: {
   params: { slug: string }
}): Promise<Metadata> {
   const url = process.env.API_ENDPOINT as string

   // fetch the rank-math seo data
   const seoData = await getSeoHead(`${url}/tag/${params.slug}}`)

   // parse and filter seo data
   const parseSeoData = parse(seoData?.head || '') as any
   const filterEmptySeoData = parseSeoData?.filter((n: any) => n && n?.type)

   // arrange the seo array into required object
   const seoObject = arrangeSeoData(filterEmptySeoData)

   return {
      ...seoObject,
   }
}

export default async function CategoryRightSidebar({
   params,
}: {
   params: { slug: string }
}) {
   // *** fetch the tags data
   const { data: PostData, error } = await getTags({
      slug: params.slug,
   })

   if (PostData.length === 0 || error) return notFound()

   // *** fetch the posts data
   const { data } = await getPosts({
      per_page: 8,
      tags: [PostData[0].id],
   })

   // *** fetch the recent posts data
   const { data: recentPosts } = await getPosts({ per_page: 5 })

   // *** fetch the categories data
   const { data: categories } = await getCategories()

   return (
      <main className="container mx-auto px-5 md:px-0">
         {/* PageInfo Component */}
         <PageInfo
            pageData={{
               name: PostData[0].name,
               slug: PostData[0].slug,
            }}
         />
         {/*  With Sidebar Section */}
         <PageBody
            data={data}
            tagInfo={PostData[0]}
            recentPosts={recentPosts}
            categories={categories}
         />

         {/* advertisement Component */}
         <section className=" w-full my-20 flex items-center justify-center">
            <div className="w-full lg:w-9/12">
               <AdvertisementHorizontal />
            </div>
         </section>
      </main>
   )
}

import { AdvertisementHorizontal, PageInfo } from '@metablog/ui'
import type { Metadata } from 'next'
import { getCategories, getPosts } from '@/lib/wp-api'
import { getSeoHead } from '@/lib/seo/getHead'
import { arrangeSeoData } from '@/lib/seo/seoData'
import parse from 'html-react-parser'
import PageBody from './PageBody'
import { notFound } from 'next/navigation'

export async function generateMetadata({
   params,
}: {
   params: { slug: string }
}): Promise<Metadata> {
   const url = process.env.API_ENDPOINT as string

   // fetch the rank-math seo data
   const seoData = await getSeoHead(`${url}/category/${params.slug}}`)

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
   const { data: CategoryInfo } = await getCategories({ slug: params.slug })

   // *** if category not found return 404
   if (!CategoryInfo.length) {
      return notFound()
   }

   // *** get posts ***
   const { data } = await getPosts({
      per_page: 8,
      categories: [CategoryInfo[0].id],
   })

   // *** get recent posts ***
   const { data: recentPosts } = await getPosts({
      per_page: 5,
   })

   // *** get categories data ***
   const { data: categoryData } = await getCategories({ per_page: 10 })

   return (
      <main className="container mx-auto px-5 md:px-0">
         {/* PageInfo Component */}
         <PageInfo
            pageData={{
               name: CategoryInfo[0]?.name || 'Unknown Category',
               slug: CategoryInfo[0]?.slug || 'unknown-category',
            }}
         />
         {/*  With Sidebar Section */}
         <PageBody
            data={data}
            recentPosts={recentPosts}
            categoryData={categoryData}
            CategoryInfo={CategoryInfo[0]}
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

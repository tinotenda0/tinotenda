import Sidebar from '@/components/sidebar'
import { getCategories, getPosts } from '@/lib/wp-api'
import { getSearch } from '@/lib/wp-api/getSearch'
import { Advertisement, PageInfo, PostGridTwoCol } from '@metablog/ui'
import { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Search page | MetaBlog',
   description: 'Search page of MetaBlog',
}

export default async function SearchPage({
   params,
}: {
   params: { slug: string }
}) {
   const { data } = await getSearch({ search: decodeURIComponent(params.slug) })

   const breadCrumbs = {
      name: `Search Team: ${decodeURIComponent(params.slug)}`,
      slug: 'search',
   }

   // *** get recent posts ***
   const { data: recentPosts } = await getPosts({ per_page: 5 })

   // *** get categories data ***
   const { data: categoryData } = await getCategories({ per_page: 10 })

   return (
      <main className="container mx-auto px-5 sm:px-0">
         <PageInfo pageData={breadCrumbs} />
         <section className="py-10">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
               {/*  Body Component */}
               <div className="col-span-12 lg:col-span-8">
                  <div className="mt-8">
                     {/* all post collection Component */}
                     {!data ? (
                        <div className="text-center text-2xl font-bold">
                           Loading...
                        </div>
                     ) : data.length === 0 ? (
                        <div className="text-center text-2xl font-bold">
                           No search result found
                        </div>
                     ) : (
                        <PostGridTwoCol data={data} />
                     )}
                  </div>
               </div>
               {/*  Sidebar Component */}
               <Sidebar data={recentPosts} categoryData={categoryData} />
            </div>
         </section>
         <div className="my-20 flex items-center justify-center">
            <div className="w-11/12 lg:w-8/12">
               <Advertisement />
            </div>
         </div>
      </main>
   )
}

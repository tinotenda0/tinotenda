import { AdvertisementHorizontal, AuthorInfo } from '@metablog/ui'
import type { Metadata } from 'next'
import { getCategories, getPosts } from '@/lib/wp-api'
import { getUsers } from '@/lib/wp-api/users'
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
   const seoData = await getSeoHead(`${url}/author/${params.slug}}`)

   // parse and filter seo data
   const parseSeoData = parse(seoData?.head || '') as any
   const filterEmptySeoData = parseSeoData?.filter((n: any) => n && n?.type)

   // arrange the seo array into required object
   const seoObject = arrangeSeoData(filterEmptySeoData)

   return {
      ...seoObject,
   }
}

const getUserBySlug = async (slug: any) => {
   const { data, error } = await getUsers({ slug: `${slug}` })

   if (error) return notFound()

   if (data?.length === 0) {
      return notFound()
   } else if (data?.length > 0) {
      return {
         data: data[0],
         error: false,
      }
   } else {
      return notFound()
   }
}

const Author = async ({ params }: { params: { slug: string } }) => {
   const { data: userData, error: userError } = await getUserBySlug(params.slug)

   // *** if user not found return 404
   if (userError) return notFound()

   const { data: PostData, error } = await getPosts({
      per_page: 10,
      author: userData.id,
   })

   // *** get categories data ***
   const { data: categoryData } = await getCategories({ per_page: 10 })

   return (
      <main>
         {/* Author info */}
         <section>
            <AuthorInfo userData={userData} />
         </section>

         {/* Latest Post */}
         <PageBody PostData={PostData} categoryData={categoryData} />

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

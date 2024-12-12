import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import parse from 'html-react-parser'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPosts } from '@/lib/wp-api'
import { getSeoHead } from '@/lib/seo/getHead'
import { arrangeSeoData } from '@/lib/seo/seoData'
import Image from 'next/image'

export async function generateMetadata({ params }: any): Promise<Metadata> {
   const { slug } = params
   const url = process.env.API_ENDPOINT as string

   // fetch the rank-math seo data
   const seoData = await getSeoHead(`${url}/${slug}`)

   // parse and filter seo data
   const parseSeoData = parse(seoData?.head || '') as any
   const filterEmptySeoData = parseSeoData?.filter((n: any) => n && n?.type)

   // arrange the seo array into required object
   const seoObject = arrangeSeoData(filterEmptySeoData)

   return {
      ...seoObject,
   }
}

const getPostByPostSlug = async (slug: any) => {
   const { data, error } = await getPosts({ slug: `${slug}` })

   if (error) return notFound()

   if (!data) {
  return notFound();
}

if (data.length === 0) {
  return notFound();
}

return {
  post: data[0],
  error: false,
};
}

const SinglePost = async ({ params }: { params: { slug: string } }) => {
   const { post: postData } = await getPostByPostSlug(params.slug)

   const { data } = await getPosts({ per_page: 10 })

   return (
      <main>
         <section>
            <div className="container mx-auto px-5 md:px-0 font-work">
               {/*   Breadcrumb */}
               <div className="text-sm breadcrumbs py-8">
                  <ul>
                     <li>
                        <Link href="/" className={`text-base-content`}>
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link
                           href={`/category/${postData?.category?.[0]?.slug}`}
                           className={`text-base-content`}
                        >
                           {
                              postData?.category[postData?.category?.length - 1]
                                 ?.name
                           }
                        </Link>
                     </li>
                     <li className={`text-base-content/60`}>
                        {postData?.slug}
                     </li>
                  </ul>
               </div>
               {/*   Post Content */}
               <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start mb-20">
                  <div className="col-span-12 lg:col-span-8">
                     <div className="py-5">
                        {postData?.category?.length > 0 && (
                           <div className="flex gap-1 flex-wrap mb-2">
                              {postData?.category?.map((cat: any) => (
                                 <div
                                    key={cat?.id}
                                    className="w-fit text-white px-2.5 py-0.5 bg-primary text-xs md:text-sm rounded-md"
                                 >
                                    {cat?.name}
                                 </div>
                              ))}
                           </div>
                        )}
                        <h3 className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-7 md:leading-10 ">
                           {postData?.title}
                        </h3>
                        <div className="mt-3 md:mt-6 flex items-center gap-5 text-base-content/60">
                           <div className=" flex items-center gap-3">
                              <div className="avatar">
                                 <div className="w-9 rounded-full">
                                    <Image
                                       src="https://placehold.it/100x100"
                                       alt="avatar"
                                       width={100}
                                       height={100}
                                       quality={90}
                                    />
                                 </div>
                              </div>
                              <Link
                                 href={`/author/${postData?.authorSlug}`}
                                 className=" text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
                              >
                                 {postData?.author}
                              </Link>
                           </div>
                           <p className=" text-xs md:text-base">
                              {
                                 // date format should be August 12, 2021
                                 new Date(postData?.date).toLocaleDateString(
                                    'en-US',
                                    {
                                       year: 'numeric',
                                       month: 'long',
                                       day: 'numeric',
                                    }
                                 )
                              }
                           </p>
                        </div>
                     </div>
                     <div className="mt-8">
                        <Image
                           width={800}
                           height={462}
                           quality={90}
                           alt={`blog_image`}
                           className={`rounded-xl w-full`}
                           src={postData?.featuredmedia?.sourceUrl}
                        />
                     </div>

                     {/* article section start  */}
                     <div
                        className="mt-10"
                        dangerouslySetInnerHTML={{ __html: postData?.content }}
                     />
                  </div>
                  <Sidebar data={data} />
               </div>
            </div>
         </section>
      </main>
   )
}

export default SinglePost

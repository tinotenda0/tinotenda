import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from '@/components/sidebar'
import { Advertisement } from '@metablog/ui'
// json data
import postsData from '@/data/posts/allPostData.json'
import categoryData from '@/data/categories/allCategoryData.json'

export const metadata: Metadata = {
   title: 'Single Post Page | Metablog',
   description: 'This is a single post page',
}

const SinglePost = () => {
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
                        <Link href="/blog" className={`text-base-content`}>
                           Technology
                        </Link>
                     </li>
                     <li className={`text-base-content/60`}>
                        The Art of Traveling: Tips and Tricks for a Memorable
                        Journey
                     </li>
                  </ul>
               </div>
               {/*   Post Content */}
               <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
                  <div className="col-span-12 lg:col-span-8">
                     <div className="py-5">
                        <Link href={'/category/right-sidebar'}>
                           <div className="w-fit text-white px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-2 md:mb-4">
                              Technology
                           </div>
                        </Link>
                        <h3 className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-7 md:leading-10 ">
                           The Impact of Technology on the Workplace: How
                           Technology is Changing
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
                                    />
                                 </div>
                              </div>
                              <a
                                 href="/"
                                 className=" text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
                              >
                                 Jason Francisco
                              </a>
                           </div>
                           <p className=" text-xs md:text-base">
                              August 20, 2022
                           </p>
                        </div>
                     </div>
                     <div className="mt-8">
                        <Image
                           alt={`blog_image`}
                           className={`rounded-xl w-full`}
                           src="/images/posts/post-1.png"
                           width={800}
                           height={462}
                        />
                     </div>

                     {/* article section start  */}
                     <div className="font-serif">
                        <div className="mt-8">
                           <p className="text-xl text-base-content/80 font-serif">
                              Traveling is an enriching experience that opens up
                              new horizons, exposes us to different cultures,
                              and creates memories that last a lifetime.
                              However, traveling can also be stressful and
                              overwhelming, especially if you dont plan and
                              prepare adequately. In this blog article, well
                              explore tips and tricks for a memorable journey
                              and how to make the most of your travels. <br />{' '}
                              <br /> One of the most rewarding aspects of
                              traveling is immersing yourself in the local
                              culture and customs. This includes trying local
                              cuisine, attending cultural events and festivals,
                              and interacting with locals. Learning a few
                              phrases in the local language can also go a long
                              way in making connections and showing respect.
                           </p>
                           <h5 className="text-2xl text-base-content font-semibold mt-8 mb-4">
                              Research Your Destination
                           </h5>
                           <p className="text-xl text-base-content/80 font-serif">
                              Traveling is an enriching experience that opens up
                              new horizons, exposes us to different cultures,
                              and creates memories that last a lifetime.
                              However, traveling can also be stressful and
                              overwhelming, especially if you dont plan and
                              prepare adequately. In this blog article, well
                              explore tips and tricks for a memorable journey
                              and how to make the most of your travels. <br />{' '}
                              <br /> One of the most rewarding aspects of
                              traveling is immersing yourself in the local
                              culture and customs. This includes trying local
                              cuisine, attending cultural events and festivals,
                              and interacting with locals. Learning a few
                              phrases in the local language can also go a long
                              way in making connections and showing respect.
                           </p>
                           <h5 className="text-2xl text-base-content font-semibold mt-8 mb-4">
                              Plan Your Itinerary
                           </h5>
                           <p className="text-xl text-base-content/80 font-serif">
                              Traveling is an enriching experience that opens up
                              new horizons, exposes us to different cultures,
                              and creates memories that last a lifetime.
                              However, traveling can also be stressful and
                              overwhelming, especially if you dont plan and
                              prepare adequately. In this blog article, well
                              explore tips and tricks for a memorable journey
                              and how to make the most of your travels. <br />{' '}
                              <br /> One of the most rewarding aspects of
                              traveling is immersing yourself in the local
                              culture and customs. This includes trying local
                              cuisine, attending cultural events and festivals,
                              and interacting with locals. Learning a few
                              phrases in the local language can also go a long
                              way in making connections and showing respect.
                           </p>
                        </div>
                        <div className="p-8 bg-base-200 rounded-xl border-l-4  border-base-content/10 mt-8">
                           <p className="text-base-content italic text-2xl font-serif">
                              “ Traveling can expose you to new environments and
                              potential health risks, so its crucial to take
                              precautions to stay safe and healthy. ”
                           </p>
                        </div>
                        <div className="mt-8">
                           <Image
                              alt={`blog_image`}
                              className={`rounded-xl w-full`}
                              src="/images/posts/post-2.png"
                              width={800}
                              height={462}
                           />
                        </div>

                        {/* advertisement section  start */}
                        <div className="my-8 flex items-center justify-center">
                           <div className="w-11/12">
                              <Advertisement />
                           </div>
                        </div>
                        {/* advertisement section  end */}
                        <div className="mb-20">
                           <h5 className="text-2xl text-base-content font-semibold mb-4">
                              Pack Lightly and Smartly
                           </h5>
                           <p className="text-xl text-base-content/80 font-serif">
                              Packing can be a daunting task, but with some
                              careful planning and smart choices, you can pack
                              light and efficiently. Start by making a packing
                              list and sticking to it, focusing on versatile and
                              comfortable clothing that can be mixed and
                              matched. Invest in quality luggage and packing
                              organizers to maximize space and minimize
                              wrinkles.
                           </p>
                           <h5 className="text-2xl text-base-content font-semibold mt-8 mb-4">
                              Stay Safe and Healthy
                           </h5>
                           <p className="text-xl text-base-content/80 font-serif">
                              Packing can be a daunting task, but with some
                              careful planning and smart choices, you can pack
                              light and efficiently. Start by making a packing
                              list and sticking to it, focusing on versatile and
                              comfortable clothing that can be mixed and
                              matched. Invest in quality luggage and packing
                              organizers to maximize space and minimize
                              wrinkles.
                           </p>
                           <h5 className="text-2xl text-base-content font-semibold mt-8 mb-4">
                              Immerse Yourself in the Local Culture
                           </h5>
                           <p className="text-xl text-base-content/80 font-serif">
                              One of the most rewarding aspects of traveling is
                              immersing yourself in the local culture and
                              customs. This includes trying local cuisine,
                              attending cultural events and festivals, and
                              interacting with locals. Learning a few phrases in
                              the local language can also go a long way in
                              making connections and showing respect.
                           </p>
                           <h5 className="text-2xl text-base-content font-semibold mt-8 mb-4">
                              Capture Memories
                           </h5>
                           <p className="text-xl text-base-content/80 font-serif">
                              Finally, dont forget to capture memories of your
                              journey. Whether is through photographs,
                              journaling, or souvenirs, preserving the moments
                              and experiences of your travels can bring joy and
                              nostalgia for years to come. However, its also
                              essential to be present in the moment and not let
                              technology distract you from the beauty of your
                              surroundings.
                           </p>
                           <h5 className="text-2xl text-base-content font-semibold mt-8 mb-4">
                              Conclusion:
                           </h5>
                           <p className="text-xl text-base-content/80 font-serif">
                              Traveling is an art form that requires a blend of
                              planning, preparation, and spontaneity. By
                              following these tips and tricks, you can make the
                              most of your journey and create memories that last
                              a lifetime. So pack your bags, embrace the
                              adventure, and enjoy the ride.
                           </p>
                        </div>
                     </div>
                  </div>
                  <Sidebar data={postsData} categoryData={categoryData} />
               </div>
            </div>
         </section>
      </main>
   )
}

export default SinglePost

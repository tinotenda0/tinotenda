import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Advertisement, PageInfo } from '@metablog/ui'

export const metadata: Metadata = {
   title: 'About Us | MetaBlog',
   description: 'This is about us page of MetaBlog',
}

const AboutUs = () => {
   return (
      <main className="container mx-auto px-5 md:px-0">
         {/* PageInfo Component */}
         <PageInfo />
         <section className="flex items-center justify-center">
            <div className="font-work px-5 md:px-0 w-full md:w-10/12 lg:w-8/12">
               <figure>
                  <Image
                     src="/images/about-us.png"
                     alt="about_us_image"
                     className="rounded-md w-full max-h-[462px]"
                     width={805}
                     height={462}
                  />
               </figure>
               <div className="my-16">
                  <h5 className="text-3xl text-base-content font-semibold mb-4">
                     About Us
                  </h5>
                  <p className="text-xl text-base-content/80 font-serif">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industrys
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book. It has survived not only five
                     centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem
                     Ipsum passages, and more recently with desktop publishing
                     software like Aldus PageMaker including versions of Lorem
                     Ipsum. <br /> <br /> It is a long established fact that a
                     reader will be distracted by the readable content of a page
                     when looking at its layout. The point of using Lorem Ipsum
                     is that it has a more-or-less normal distribution of
                     letters, as opposed to using Content here, content here,
                     making it look like readable English. Many desktop
                     publishing packages and web page editors now use Lorem
                     Ipsum as their default model text, and a search for lorem
                     ipsum will uncover many web sites still in their infancy.
                     Various versions have evolved over the years, sometimes by
                     accident, sometimes on purpose (injected humour and the
                     like).
                  </p>
               </div>
               <div className="my-16">
                  <h5 className="text-3xl text-base-content font-semibold mb-4">
                     Our Mission
                  </h5>
                  <p className="text-xl text-base-content/80 font-serif">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industrys
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book. It has survived not only five
                     centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem
                     Ipsum passages, and more recently with desktop publishing
                     software like Aldus PageMaker including versions of Lorem
                     Ipsum.
                  </p>
               </div>
               <div className="my-16">
                  <h5 className="text-3xl text-base-content font-semibold mb-4">
                     Our Vision
                  </h5>
                  <p className="text-xl text-base-content/80 font-serif">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industrys
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book. It has survived not only five
                     centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem
                     Ipsum passages, and more recently with desktop publishing
                     software like Aldus PageMaker including versions of Lorem
                     Ipsum.
                  </p>
               </div>
               {/* Advertisement section  */}
               <div className="mb-20 flex items-center justify-center">
                  <div className="w-11/12">
                     <Advertisement />
                  </div>
               </div>
            </div>
         </section>
      </main>
   )
}

export default AboutUs

import React from 'react'
import type { Metadata } from 'next'
import { Advertisement, ContactForm, PageInfo } from '@metablog/ui'
import ContactSidebar from '@/components/sidebar/ContactSidebar'
// json data
import postsData from '@/data/posts/allPostData.json'

export const metadata: Metadata = {
   title: 'Contact Us | MetaBlog',
   description: 'This is contact us page of MetaBlog',
}
const ContactUs = () => {
   return (
      <main className="container mx-auto mb-20">
         {/* PageInfo Component */}
         <PageInfo />
         {/*  With Sidebar Section */}
         <section className="mt-10">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
               {/*  Body Component */}
               <div className="col-span-12 lg:col-span-8">
                  <h2 className="text-4xl text-base-content font-bold font-work">
                     Get In Touch
                  </h2>
                  <p className="mt-4 text-lg font-work text-base-content/70">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industrys
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book.
                  </p>
                  <div className="mt-10 flex flex-col md:flex-row items-center gap-5">
                     <div className="border border-base-content/10 rounded-xl p-6 font-work w-full">
                        <h6 className="text-base-content font-semibold text-2xl">
                           Address
                        </h6>
                        <p className="mt-4 text-lg text-base-content/70">
                           1328 Oak Ridge Drive, Saint Louis, <br /> Missouri -
                           63102
                        </p>
                     </div>
                     <div className="border border-base-content/10 rounded-xl p-6 font-work w-full">
                        <h6 className="text-base-content font-semibold text-2xl">
                           Contact
                        </h6>
                        <p className="mt-4 text-lg text-base-content/70">
                           313-332-8662 <br /> test@example.com
                        </p>
                     </div>
                  </div>
                  {/* ContactForm Component */}
                  <div className="mt-12">
                     <ContactForm />
                  </div>
                  {/* advertisement Component */}
                  <div className="mt-12 flex items-center justify-center">
                     <div className="w-11/12">
                        <Advertisement />
                     </div>
                  </div>
               </div>
               {/*  Sidebar Component */}
               <ContactSidebar data={postsData} />
            </div>
         </section>
      </main>
   )
}

export default ContactUs

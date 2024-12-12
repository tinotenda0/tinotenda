import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: '404 | MetaBlog',
   description: 'This is 404 page of MetaBlog',
}

export default function NotFoundPage() {
   return (
      <main className="container mx-auto px-5 sm:px-0 py-20 md:py-36">
         <div className="flex flex-wrap items-center justify-center w-full max-w-2xl mx-auto sm:flex-nowrap">
            <div className="pb-10 sm:pr-14 sm:pb-0">
               <h1 className="font-semibold text-7xl font-work text-base-content">
                  404
               </h1>
            </div>
            <div className="pt-5 text-center border-t sm:text-left sm:pt-0 sm:border-t-0 sm:border-l border-base-content/10 sm:pl-14">
               <h3 className="font-work text-3xl leading-8 font-semibold text-base-content mb-3">
                  Page Not Found
               </h3>
               <p className="text-base-content/70 text-lg leading-6">
                  We are sorry, This page is unknown or does not exist the page
                  you are looking for.
               </p>
               <div className="flex flex-wrap items-center justify-center gap-4 mt-6 sm:flex-nowrap sm:justify-start">
                  <Link
                     href="/"
                     className="btn btn-primary font-medium text-sm"
                  >
                     Back To Home
                  </Link>
                  <Link
                     href="/"
                     className="btn btn-outline btn-primary font-medium text-sm"
                  >
                     Previous Page
                  </Link>
               </div>
            </div>
         </div>
         <div className="flex flex-wrap items-center justify-center w-full max-w-2xl gap-8 px-6 py-8 sm:px-10 sm:py-10 mx-auto sm:gap-0 sm:ga sm:justify-between rounded-xl mt-14 bg-base-200">
            <h3 className="text-base-content text-center sm:text-left text-2xl leading-8 font-work font-normal">
               Need Emergency Help
            </h3>
            <Link
               href="/contact-us"
               className="btn btn-primary font-medium text-sm"
            >
               Contact Us
            </Link>
         </div>
      </main>
   )
}

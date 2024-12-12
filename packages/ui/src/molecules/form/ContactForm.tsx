import React from 'react'
import Link from 'next/link'

export const ContactForm = () => {
   return (
      <div className="bg-base-200 rounded-xl p-8 md:p-12">
         <h2 className="text-xl md:text-2xl leading-6 font-bold text-base-content mb-8">
            Leave a Message
         </h2>
         <form action="">
            <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-5 mb-4">
               <input
                  className="w-full focus:outline-none text-sm md:text-base rounded-md border border-base-content border-opacity-10 px-3 md:px-4 py-2.5 md:py-3 placeholder:text-sm md:placeholder:text-base placeholder:text-base-content placeholder:text-opacity-40"
                  type="text"
                  placeholder="Your Name"
               />
               <input
                  className="w-full focus:outline-none text-sm md:text-base rounded-md border border-base-content border-opacity-10 px-3 md:px-4 py-2.5 md:py-3 placeholder:text-sm md:placeholder:text-base placeholder:text-base-content placeholder:text-opacity-40"
                  type="email"
                  placeholder="Your Email"
               />
            </div>
            <input
               className="w-full focus:outline-none text-sm md:text-base rounded-md border border-base-content border-opacity-10 px-3 md:px-4 py-2.5 md:py-3 placeholder:text-sm md:placeholder:text-base placeholder:text-base-content placeholder:text-opacity-40"
               type="text"
               placeholder="Subject"
            />
            <textarea
               className="w-full focus:outline-none text-sm md:text-base rounded-md border border-base-content border-opacity-10 px-3 md:px-4 py-2.5 md:py-3 placeholder:text-sm md:placeholder:text-base placeholder:text-base-content placeholder:text-opacity-40 h-36 mt-4"
               placeholder="Write your message..."
            />
            <p className="text-sm md:text-base text-base-content text-opacity-70 mt-2">
               We care about your data in our{' '}
               <Link
                  href="/"
                  className="font-medium text-primary hover:underline transition hover:text-opacity-80 duration-300 ease-in-out ml-1"
               >
                  Privacy Policy
               </Link>
            </p>
            <button
               type="submit"
               className="capitalize rounded-md bg-primary text-primary-content text-sm md:text-base font-medium px-5 py-3.5 mt-6 hover:bg-opacity-80 transition duration-300 ease-in-out"
            >
               Send Message
            </button>
         </form>
      </div>
   )
}

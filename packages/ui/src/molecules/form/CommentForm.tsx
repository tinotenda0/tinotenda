import React from 'react'
import Link from 'next/link'

export const CommentForm = () => {
   return (
      <div className="bg-base-200 rounded-xl p-8 md:p-12">
         <h2 className="text-xl md:text-2xl leading-6 font-bold text-base-content mb-8">
            Leave a Comment
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
               placeholder="Your Website"
            />
            <textarea
               className="w-full focus:outline-none text-sm md:text-base rounded-md border border-base-content border-opacity-10 px-3 md:px-4 py-2.5 md:py-3 placeholder:text-sm md:placeholder:text-base placeholder:text-base-content placeholder:text-opacity-40 h-36 mt-4"
               placeholder="Write your message..."
            />
            <label className="text-sm text-base-content text-opacity-80 leading-5 mt-2 font-sans">
               <input
                  type="checkbox"
                  className="w-3 h-3 rounded accent-primary mr-2"
               />
               Save my name, email, and website in this browser for the next
               comment.
            </label>
            <br />
            <button
               type="submit"
               className="capitalize rounded-md bg-primary text-primary-content text-sm md:text-base font-medium px-5 py-3.5 mt-6 hover:bg-opacity-80 transition duration-300 ease-in-out"
            >
               Publish Comment
            </button>
         </form>
      </div>
   )
}

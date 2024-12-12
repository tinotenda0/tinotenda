import React from 'react'
import Link from 'next/link'

const Heading = () => {
   return (
      <div className="font-work flex items-center justify-between">
         <h5 className="text-base-content text-2xl font-bold">Section Title</h5>
         <Link
            href="/"
            className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
         >
            View All Post
         </Link>
      </div>
   )
}
export default Heading

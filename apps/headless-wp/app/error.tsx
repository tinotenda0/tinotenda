'use client' // Error components must be Client Components

import { PageInfo } from '@metablog/ui'
import { useEffect } from 'react'

export default function Error({
   error,
   reset,
}: {
   error: Error & { digest?: string }
   reset: () => void
}) {
   useEffect(() => {
      // Log the error to an error reporting service
      console.error(error)
   }, [error])

   return (
      <main className="container mx-auto mb-20">
         {/* PageInfo Component */}
         <PageInfo
            pageData={{
               name: 'Error',
               slug: 'error',
            }}
         />
         <div className="bg-base-200 rounded-xl p-8 md:p-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-error">Something went wrong!</h2>
            <p className="my-4">
               Please check your internet connection and try again. If the
               problem persists, please contact support.
            </p>
            <button className="btn btn-primary" onClick={() => reset()}>
               Try again
            </button>
         </div>
      </main>
   )
}

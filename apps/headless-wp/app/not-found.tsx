import { PageInfo } from '@metablog/ui'
import Link from 'next/link'

export default function NotFound() {
   return (
      <main className="container mx-auto mb-20">
         {/* PageInfo Component */}
         <PageInfo
            pageData={{
               name: 'Not Found',
               slug: 'not-found',
            }}
         />
         <div className="bg-base-200 rounded-xl p-8 md:p-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl">404 Not Fount</h2>
            <p className="my-4">
               Sorry, the page you are looking for could not be found.
            </p>
            <Link href="/" className="btn btn-primary">
               Return Home
            </Link>
         </div>
      </main>
   )
}

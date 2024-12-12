'use client'
import { getPosts } from '@/lib/wp-api'
import { Advertisement, PostCard } from '@metablog/ui'
import React, { Fragment, useEffect } from 'react'

const PageBody = ({ data }: { data: any }) => {
   const [showPerPage, setShowPerPage] = React.useState(10)
   const [showMore, setShowMore] = React.useState(false)
   const [allPosts, setAllPosts] = React.useState([])

   useEffect(() => {
      setAllPosts(data)
   }, [data])

   // *** get more posts ***
   useEffect(() => {
      if (showMore) {
         const getMorePosts = async () => {
            const { data } = await getPosts({ per_page: showPerPage })
            setAllPosts(data)
            setShowMore(false)
         }
         getMorePosts()
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [showMore, showPerPage])

   return (
      <Fragment>
         {/* All posts component */}
         <section className="my-20">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {/* data first item remove */}
               {(data ? data : [1, 2, 3, 4, 5, 6, 7, 8, 9]).map(
                  (item: any, index: number) =>
                     index !== 0 ? (
                        <PostCard key={index} cardData={item} />
                     ) : null
               )}
            </div>
            <div className="flex items-center justify-center w-full mt-8">
               {/* if showMore true show loading */}
               {showMore && (
                  <progress className="progress w-56 mx-auto"></progress>
               )}
               {/* show more button */}
               {showPerPage <= allPosts.length && (
                  <button
                     className="btn btn-outline btn-secondary font-work px-5"
                     onClick={() => {
                        setShowPerPage(showPerPage + 10)
                        setShowMore(true)
                     }}
                  >
                     Load More
                  </button>
               )}
            </div>
         </section>

         {/* Advertisement component */}
         <section className="mb-24">
            <Advertisement />
         </section>
      </Fragment>
   )
}

export default PageBody

'use client'
import Sidebar from '@/components/sidebar'
import { getPosts } from '@/lib/wp-api'
import { PostGridTwoCol, PostOverlayLandscapeLg } from '@metablog/ui'
import React from 'react'

const PageBody = ({
   data,
   categoryData,
   CategoryInfo,
   recentPosts,
}: {
   data: any
   recentPosts: any
   categoryData: any
   CategoryInfo: any
}) => {
   const [showPerPage, setShowPerPage] = React.useState(8)
   const [showMore, setShowMore] = React.useState(false)
   const [allPosts, setAllPosts] = React.useState([])

   React.useEffect(() => {
      setAllPosts(data)
   }, [data])

   // *** get more posts ***
   React.useEffect(() => {
      if (showMore) {
         const getMorePosts = async () => {
            const { data } = await getPosts({
               per_page: showPerPage,
               categories: [CategoryInfo.id],
            })
            setAllPosts(data)
            setShowMore(false)
         }
         getMorePosts()
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [showMore, showPerPage])

   return (
      <section className="mt-12">
         <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
            {/*  Body Component */}
            <div className="col-span-12 lg:col-span-8">
               {/* post card overlay Component */}
               {allPosts.length > 0 && (
                  <PostOverlayLandscapeLg cardData={allPosts[0]} />
               )}
               <div className="mt-8">
                  {/* all post collection Component */}
                  {allPosts.length > 0 ? (
                     <PostGridTwoCol data={allPosts} />
                  ) : (
                     <p className="text-xl text-center py-5">No Posts Found</p>
                  )}
                  <div className="flex items-center justify-center mt-8">
                     {/* if showMore true show loading */}
                     {showMore && (
                        <progress className="progress w-56 mx-auto"></progress>
                     )}
                     {/* show more button */}
                     {showPerPage <= allPosts.length && (
                        <button
                           className="btn btn-outline btn-secondary font-work px-5"
                           onClick={() => {
                              setShowPerPage(showPerPage + 8)
                              setShowMore(true)
                           }}
                        >
                           Load More
                        </button>
                     )}
                  </div>
               </div>
            </div>
            {/*  Sidebar Component */}
            <Sidebar data={recentPosts} categoryData={categoryData} />
         </div>
      </section>
   )
}

export default PageBody
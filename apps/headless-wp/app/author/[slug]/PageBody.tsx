'use client'
import Sidebar from '@/components/sidebar'
import { getPosts } from '@/lib/wp-api'
import { PostGridTwoCol } from '@metablog/ui'
import React from 'react'
import { Post } from '@/lib/wp-api/types'

export default function PageBody({
  PostData,
  categoryData,
}: {
  PostData: Post[] | null;
  categoryData: any;
}) {
  const [showPerPage, setShowPerPage] = React.useState(8)
  const [showMore, setShowMore] = React.useState(false)
  
  // State is explicitly typed as Post[], no null allowed
  const [allPosts, setAllPosts] = React.useState<Post[]>([])

  React.useEffect(() => {
    // If PostData is null, fallback to empty array
    setAllPosts(PostData || [])
  }, [PostData])

  React.useEffect(() => {
    if (showMore) {
      const getMorePosts = async () => {
        const { data } = await getPosts({ per_page: showPerPage })
        // If data can be null, fallback to empty array
        setAllPosts(data || [])
        setShowMore(false)
      }
      getMorePosts()
    }
  }, [showMore, showPerPage])

  return (
    <section>
      <div className="container mx-auto mt-12 mb-24 px-5 sm:px-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Body Component */}
          <div className="col-span-12 lg:col-span-8">
            <PostGridTwoCol data={allPosts} />
            <div className="flex items-center justify-center mt-8">
              {showMore && <progress className="progress w-56 mx-auto"></progress>}
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
          {/* Sidebar */}
          <Sidebar data={allPosts} categoryData={categoryData} />
        </div>
      </div>
    </section>
  )
}

'use client'
import Sidebar from '@/components/sidebar'
import { getPosts } from '@/lib/wp-api'
import { PostGridTwoCol } from '@metablog/ui'
import React from 'react'
import { Post } from '@/lib/wp-api/types' // adjust path if needed

interface PageBodyProps {
  PostData: Post[] | null
  categoryData: any
}

const PageBody: React.FC<PageBodyProps> = ({ PostData, categoryData }) => {
  const [showPerPage, setShowPerPage] = React.useState(8)
  const [showMore, setShowMore] = React.useState(false)
  
  // We type the state as Post[] only, and fallback to [] for null data.
  const [allPosts, setAllPosts] = React.useState<Post[]>([])

  React.useEffect(() => {
    setAllPosts(PostData || [])
  }, [PostData])

  // *** get more posts ***
  React.useEffect(() => {
    if (showMore) {
      const getMorePosts = async () => {
        const { data } = await getPosts({ per_page: showPerPage })
        // fallback to empty array if data is null
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
              {/* If showMore is true, show loading */}
              {showMore && (
                <progress className="progress w-56 mx-auto"></progress>
              )}
              {/* Show more button if we still have more posts to load */}
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
          {/* Sidebar Component */}
          <Sidebar data={allPosts} categoryData={categoryData} />
        </div>
      </div>
    </section>
  )
}

export default PageBody

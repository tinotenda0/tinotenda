'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '@/lib/wp-api'
import { PostGridTwoCol } from '@metablog/ui'
import Sidebar from '@/components/sidebar'
import { Post } from '@/lib/wp-api/types'

interface PageBodyProps {
  PostData: Post[] | null
  categoryData: any
}

export default function PageBody({ PostData, categoryData }: PageBodyProps) {
  // We still handle showPerPage and showMore logic, but let's rely on React Query to fetch data.
  const [showPerPage, setShowPerPage] = React.useState(8)

  // Use React Query to fetch posts. If you want to replicate "load more," you could vary the query key.
  const { data: fetchedPosts, isLoading, refetch } = useQuery(
    ['posts', showPerPage],
    async () => {
      const { data } = await getPosts({ per_page: showPerPage })
      return data || []
    },
    {
      // initialData is what React Query uses before the first fetch
      initialData: PostData || [],
      // refetchOnWindowFocus: false, // optional config
    }
  )

  // If you want a "Load More" button, you can update showPerPage and call refetch
  const handleLoadMore = () => {
    setShowPerPage((prev) => prev + 8)
    refetch() // triggers the query again with the new showPerPage
  }

  return (
    <section>
      <div className="container mx-auto mt-12 mb-24 px-5 sm:px-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Body Component */}
          <div className="col-span-12 lg:col-span-8">
            {isLoading ? (
              <div className="text-center mt-8">Loading...</div>
            ) : (
              <PostGridTwoCol data={fetchedPosts} />
            )}

            <div className="flex items-center justify-center mt-8">
              {/* Show more button if the length is at least showPerPage */}
              {fetchedPosts.length >= showPerPage && (
                <button
                  className="btn btn-outline btn-secondary font-work px-5"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar data={fetchedPosts} categoryData={categoryData} />
        </div>
      </div>
    </section>
  )
}

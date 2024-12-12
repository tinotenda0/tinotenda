import { PostOverlaySm } from '../../molecules/card/PostOverlaySm'
import { PostOverlayLg } from '../../molecules/card/PostOverlayLg'

type PostOverlayGridBannerProps = {
   data?: Array<{
      id?: number
      title?: string
      slug?: string
      featuremedia?: { source_url: string; alt: string }
      author?: string
      authorId?: number
      category?: any
      publishTime?: string
      avatar?: string
      content?: string
   }>
}

export const PostOverlayGridBanner = ({ data }: PostOverlayGridBannerProps) => {
   const postData = data && data?.length > 0 ? data : [1, 2, 3, 4, 5, 6, 7]

   return (
      <>
         <div className="container mx-auto flex flex-col md:flex-row gap-5	px-5 sm:px-0">
            <div className="w-full md:w-6/12">
               {postData
                  ?.slice(0, 1)
                  .map((item: any, index: number) => (
                     <PostOverlayLg cardData={item} key={index} />
                  ))}
            </div>
            <div className="w-full md:w-6/12 grid grid-cols-1 sm:grid-cols-2 gap-5">
               {postData
                  ?.slice(1, 5)
                  .map((postData: any, index: number) => (
                     <PostOverlaySm cardData={postData} key={index} />
                  ))}
            </div>
         </div>
      </>
   )
}

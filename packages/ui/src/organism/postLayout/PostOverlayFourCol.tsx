import { PostOverlaySm } from '../../molecules/card/PostOverlaySm'

type PostOverlayFourColProps = {
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

export const PostOverlayFourCol = ({ data }: PostOverlayFourColProps) => {
   const postData = data && data?.length > 0 ? data : [1, 2, 3, 4, 5, 6, 7]
   return (
      <>
         <div className="container mx-auto px-5 sm:px-0">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
               {postData?.slice(1, 5).map((item: any, index: number) => (
                  <PostOverlaySm cardData={item} key={index} />
               ))}
            </div>
         </div>
      </>
   )
}

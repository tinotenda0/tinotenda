import { PostOverlayLg } from '../../molecules/card/PostOverlayLg'
import { PostOverlayLandscapeSm } from '../../molecules/card/PostOverlayLandscapeSm'

interface PostOverlayGridListBannerProps {
   data?: any
}

export const PostOverlayGridListBanner = ({
   data,
}: PostOverlayGridListBannerProps) => {
   const postData = data && data?.length > 0 ? data : [1, 2, 3, 4, 5, 6, 7]

   return (
      <>
         <div className="container mx-auto flex flex-col md:flex-row gap-5	px-5 sm:px-0">
            <div className="w-full md:w-6/12">
               {postData?.slice(0, 1).map((item: any, index: number) => (
                  <PostOverlayLg cardData={item} key={index} />
               ))}
            </div>
            <div className="w-full md:w-6/12 flex flex-col gap-5">
               {postData?.slice(1, 3).map((item: any, index: number) => (
                  <PostOverlayLandscapeSm cardData={item} key={index} />
               ))}
            </div>
         </div>
      </>
   )
}

import { PostOverlayLg } from '../../molecules/card/PostOverlayLg'

interface PostOverlayLgGridBannerProps {
   data?: any
}

export const PostOverlayLgGridBanner = ({
   data,
}: PostOverlayLgGridBannerProps) => {
   const postData = data?.length > 0 ? data : [1, 2, 3, 4, 5, 6, 7]
   return (
      <>
         <div className="container mx-auto flex flex-col md:flex-row gap-5	px-5 sm:px-0">
            <div className="w-full md:w-6/12">
               {postData?.slice(0, 1).map((item: any, index: number) => (
                  <PostOverlayLg cardData={item} key={index} />
               ))}
            </div>
            <div className="w-full md:w-6/12">
               {postData?.slice(1, 2).map((item: any, index: number) => (
                  <PostOverlayLg cardData={item} key={index} />
               ))}
            </div>
         </div>
      </>
   )
}

import { PostCard } from '../../molecules/card/PostCard'

type PostGridTwoColProps = {
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

export const PostGridTwoCol = ({ data }: PostGridTwoColProps) => {
   const postData = data && data?.length > 0 ? data : [1, 2, 3, 4, 5, 6, 7, 8]
   return (
      <div className="w-full">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {postData?.map((item: any, index: number) => (
               <PostCard cardData={item} key={index} />
            ))}
         </div>
      </div>
   )
}

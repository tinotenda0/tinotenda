import { PostListCardWithoutBorder } from '../../molecules/card/PostListCardWithoutBorder'

type SidebarProps = {
   data?: any
}

export const SidebarPopularPost = ({ data }: SidebarProps) => {
   const postData = data && data?.length > 0 ? data : [1, 2, 3, 4, 5, 6]
   return (
      <div className="p-8 border border-base-content/10 rounded-xl w-full">
         <h5 className="text-base-content font-bold text-2xl font-work">
            Latest Post
         </h5>
         <div className="grid grid-cols-1 gap-6 mt-8">
            {postData
               ?.slice(0, 5)
               ?.map((item: any, index: number) => (
                  <PostListCardWithoutBorder cardData={item} key={index} />
               ))}
         </div>
      </div>
   )
}

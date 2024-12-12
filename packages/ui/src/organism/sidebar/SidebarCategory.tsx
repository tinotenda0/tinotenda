import Link from 'next/link'

type SidebarCategoryProps = {
   data?: any
}

export const SidebarCategory = ({ data }: SidebarCategoryProps) => {
   const categoryData = data && data?.length > 0 ? data : dummyData

   return (
      <div className="rounded-xl border border-base-content border-opacity-10 p-8">
         <h4 className="text-xl font-semibold leading-6 text-base-content">
            Category
         </h4>
         <div className="pt-6">
            {categoryData?.map(
               (
                  item: { name: string; count: number; slug: string },
                  index: number
               ) => (
                  <div
                     key={index}
                     className="flex items-center justify-between last:border-none border-b border-base-content border-opacity-10 py-3.5"
                  >
                     <Link
                        href={`/category/${item?.slug}`}
                        className="text-base font-medium text-base-content text-opacity-70 capitalize hover:text-primary transition ease-in-out duration-300"
                     >
                        {item?.name}
                     </Link>
                     <span className="px-2 py-1 rounded-md bg-primary bg-opacity-5 text-primary text-xs font-medium">
                        {item?.count}
                     </span>
                  </div>
               )
            )}
         </div>
      </div>
   )
}

const dummyData = [
   {
      name: 'Technology',
      count: 50,
   },
   {
      name: 'Lifestyle',
      count: 34,
   },
   {
      name: 'Photography',
      count: 12,
   },
   {
      name: 'Health & Fitness',
      count: 36,
   },
   {
      name: 'Business',
      count: 91,
   },
   {
      name: 'Marketing',
      count: 47,
   },
]

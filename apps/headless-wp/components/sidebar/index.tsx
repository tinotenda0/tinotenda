import {
   AdvertisementVertical,
   SidebarCategory,
   SidebarPopularPost,
} from '@metablog/ui'

type SidebarProps = {
   data?: any
   categoryData?: any
}
const Sidebar = ({ data, categoryData }: SidebarProps) => {
   return (
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 justify-center order-last lg:order-none">
         <SidebarPopularPost data={data} />
         {categoryData && <SidebarCategory data={categoryData} />}
         <AdvertisementVertical />
      </div>
   )
}
export default Sidebar

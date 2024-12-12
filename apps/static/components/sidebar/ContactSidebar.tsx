import {
   AdvertisementVertical,
   SidebarCategory,
   SidebarPopularPost,
} from '@metablog/ui'

type ContactSidebarProps = {
   data?: any
}

const ContactSidebar = ({ data }: ContactSidebarProps) => {
   return (
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 justify-center order-last lg:order-none">
         <SidebarPopularPost data={data} />
         <AdvertisementVertical />
      </div>
   )
}
export default ContactSidebar

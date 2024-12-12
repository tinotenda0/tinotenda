import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
   return twMerge(clsx(...inputs))
}

/**
 * filter the category by category category
 * @param slug category category as string
 * @returns | { category-data } as object
 */
export const sortCategory = (allCategories: any, slug: string) => {
   const sortedCat = allCategories?.find(
      (category: any) => category.slug === slug
   )
   return sortedCat
}

//  date formated function
export const dateFormate = (dataInput: any) => {
   const d = new Date(dataInput)
   const date = d?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
   })
   return date
}

// content replace function
export const contentReplace = (content: string) => {
   const replace = content?.replace(/<p>/g, '<p/>')
   const replace2 = replace?.replace(/(<([^>]+)>)/gi, '').slice(0, 200)
   return replace2
}

//seo data re-arrange function
export const arrangeSeoData = (seoData: any) => {
   const findByProperty = (property: any) => {
      return seoData?.find((item: any) => item?.props?.property === property)
   }
   const findByName = (name: any) => {
      return seoData?.find((item: any) => item?.props?.name === name)
   }

   const titleMeta = seoData?.find((item: any) => item?.type === 'title')
   const descMeta = findByName('description')
   const localeMetaOg = findByProperty('og:locale')
   const typeMetaOg = findByProperty('og:type')
   const titleMetaOg = findByProperty('og:title')
   const descMetaOg = findByProperty('og:description')
   const urlMetaOg = findByProperty('og:url')
   const siteNameMetaOg = findByProperty('og:site_name')
   const updatedTimeMetaOg = findByProperty('og:updated_time')
   const imgMetaOg = findByProperty('og:image')
   const imageAltMetaOg = findByProperty('og:image:alt')
   const articlePublishedMeta = findByProperty('article:published_time')
   const articleModifiedMeta = findByProperty('article:modified_time')
   const brandMeta = findByProperty('product:brand')
   const availabilityMeta = findByProperty('product:availability')
   const videoMetaOg = findByProperty('og:video')

   // // twitter-meta
   // const twitterCardMeta = findByName('twitter:card')
   // const twitterTitleMeta = findByName('twitter:title')
   // const twitterDescMeta = findByName('twitter:description')
   // const twitterImgMeta = findByName('twitter:image')

   const seoObj = {
      title: titleMeta?.props?.children || '',
      description: descMeta?.props?.content || '',
      robots: {
         index: true,
         follow: true,
      },
      viewport: {
         width: 'device-width',
      },
      article: {
         published_time:
            articlePublishedMeta?.props?.content || Date.now().toString(),
         modified_time:
            articleModifiedMeta?.props?.content || Date.now().toString(),
      },
      other: {
         brand: brandMeta?.props?.content || '',
         availability: availabilityMeta?.props?.content || '',
      },
      openGraph: {
         locale: localeMetaOg?.props?.content || 'en_US',
         // type: 'article',
         type: typeMetaOg?.props?.content === 'article' ? 'article' : 'website',
         title: titleMetaOg?.props?.content || '',
         description: descMetaOg?.props?.content || '',
         url: urlMetaOg?.props?.content || '',
         site_name: siteNameMetaOg?.props?.content || '',
         updated_time:
            updatedTimeMetaOg?.props?.content || Date.now().toString(),
         images: [
            {
               url: imgMetaOg?.props?.content,
               width: 1024,
               height: 769,
               alt: imageAltMetaOg?.props?.content || 'Website Template',
            },
         ],
         video: [{ url: videoMetaOg?.props?.content || '' }],
      },
      // twitter: {
      //    card: twitterCardMeta?.props?.content || 'summary_large_image',
      //    title:
      //       twitterTitleMeta?.props?.content ||
      //       'Headless WordPress with Next.js and Tailwind CSS',
      //    description:
      //       twitterDescMeta?.props?.content ||
      //       'Headless WordPress with Next.js and Tailwind CSS',
      //    siteId: '',
      //    creator: '',
      //    creatorId: '',
      //    images: [twitterImgMeta?.props?.content],
      // },
   }

   return seoObj
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

type PostsCarouselProps = {
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

export const PostsCarousel = ({ data }: PostsCarouselProps) => {
   const postData = data && data?.length > 0 ? data : [1, 2, 3, 4, 5, 6]

   const swiperRef = React.useRef<React.MutableRefObject<null>>(null) as any

   const sliderSettings = {
      440: {
         slidesPerView: 1,
      },
      680: {
         slidesPerView: 1,
      },
      1024: {
         slidesPerView: 1,
      },
   }

   const dateFormate = (dataInput: any) => {
      const d = new Date(dataInput)
      const date = d?.toLocaleDateString('en-US', {
         year: 'numeric',
         month: 'short',
         day: 'numeric',
      })
      return date
   }

   return (
      <div className="relative">
         <Swiper
            slidesPerView={1}
            breakpoints={sliderSettings}
            onBeforeInit={(swiper) => {
               swiperRef.current = swiper
            }}
         >
            {postData?.slice(0, 5).map((cardData: any, index) => (
               <SwiperSlide key={index}>
                  <div className="relative rounded-xl font-work mb-24">
                     <div className="h-[calc(40vh)] md:h-[calc(60vh)] lg:h-[calc(70vh-80px)]">
                        {/* <img
                           width="1216"
                           height="600"
                           src={
                              cardData?.featuredmedia?.sourceUrl ||
                              'https://placehold.it/1216x600'
                           }
                           alt={cardData?.featuredmedia?.alt || 'post-thumb'}
                           className="rounded-xl object-cover w-full h-full mx-auto"
                        /> */}
                        <Image
                           src={
                              cardData?.featuredmedia?.sourceUrl ||
                              'https://placehold.it/1216x600'
                           }
                           className="object-cover w-full h-full mx-auto rounded-xl"
                           height={1980}
                           width={908}
                           quality={90}
                           alt={cardData?.featuredmedia?.alt || 'post-thumb'}
                           priority
                        />
                     </div>
                     <div className="absolute -bottom-16 left-4 md:left-14 rounded-xl p-4 md:p-10 bg-base-100 w-10/12 md:w-7/12 lg:w-6/12 shadow-[0_12px_24px_-6px] shadow-base-content/20">
                        {cardData?.category.length > 0 && (
                           <div className="flex gap-2 flex-wrap mb-2">
                              {cardData?.category
                                 ?.slice(0, 3)
                                 ?.map((categoryData: any, index: number) => (
                                    <div
                                       key={index}
                                       className="w-fit text-primary-content px-2.5 py-0.5 bg-primary text-xs md:text-sm rounded-md"
                                    >
                                       {' '}
                                       {categoryData?.name}
                                    </div>
                                 ))}
                           </div>
                        )}
                        <h3>
                           <Link
                              href="/"
                              className="text-base-content line-clam-3 font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition-all hover:duration-500"
                           >
                              {cardData?.title ||
                                 `The Impact of Technology on the Workplace: How Technology is Changing`}
                           </Link>
                        </h3>
                        <div className="mt-6 flex items-center gap-5">
                           <div className=" flex items-center gap-3">
                              <div className="avatar">
                                 <div className="w-9 rounded-full">
                                    <Image
                                       src={
                                          cardData?.avatar ||
                                          'https://placehold.it/100x100'
                                       }
                                       alt="author"
                                       width={100}
                                       height={100}
                                    />
                                 </div>
                              </div>
                              <h6>
                                 <Link
                                    href="/"
                                    className="text-base-content/60 text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
                                 >
                                    {cardData?.author || 'unknown'}
                                 </Link>
                              </h6>
                           </div>
                           <p className="text-base-content/60 text-xs md:text-base">
                              {dateFormate(cardData?.publishTime)}
                           </p>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>

         {/* slider pre and next button  */}
         <div className="grid sm:flex items-center gap-1 md:gap-4 absolute right-2 sm:right-0 bottom-8 z-40">
            {/* pre button  */}
            <button
               onClick={() => swiperRef.current?.slidePrev()}
               className="w-7 md:w-10 h-7 md:h-10 border border-secondary rounded-md flex items-center justify-center hover:border-primary hover:bg-primary group transition duration-300 ease-in-out"
            >
               <svg
                  className="text-secondary group-hover:text-white w-3 h-3 md:w-auto md:h-auto"
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M7.47541 0.712087C7.84153 1.0782 7.84153 1.6718 7.47541 2.03791L2.51333 7L7.47541 11.9621C7.84153 12.3282 7.84153 12.9218 7.47541 13.2879C7.1093 13.654 6.5157 13.654 6.14959 13.2879L0.524587 7.66291C0.158471 7.2968 0.158471 6.7032 0.524587 6.33709L6.14959 0.712087C6.5157 0.345971 7.1093 0.345971 7.47541 0.712087Z"
                     fill="currentColor"
                  />
               </svg>
            </button>
            {/* next button  */}
            <button
               onClick={() => swiperRef.current?.slideNext()}
               className="w-7 md:w-10 h-7 md:h-10 border border-secondary rounded-md flex items-center justify-center hover:border-primary hover:bg-primary group transition duration-300 ease-in-out"
            >
               <svg
                  className="text-secondary group-hover:text-white w-3 h-3 md:w-auto md:h-auto"
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M0.524587 0.712087C0.890704 0.345971 1.4843 0.345971 1.85041 0.712087L7.47541 6.33709C7.84153 6.7032 7.84153 7.2968 7.47541 7.66291L1.85041 13.2879C1.4843 13.654 0.890704 13.654 0.524587 13.2879C0.158471 12.9218 0.158471 12.3282 0.524587 11.9621L5.48667 7L0.524587 2.03791C0.158471 1.6718 0.158471 1.0782 0.524587 0.712087Z"
                     fill="currentColor"
                  />
               </svg>
            </button>
         </div>
      </div>
   )
}

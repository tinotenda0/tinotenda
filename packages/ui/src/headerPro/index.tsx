'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Logo } from '../icons'
import MobileNav from './MobileNav'
import { useRouter } from 'next/navigation'

type HeaderProps = {
   headerData: object[]
   useMode: any
}


export const HeaderPro = ({ headerData, useMode }: HeaderProps) => {
   const { theme, setTheme, themes, hydrationError } = useMode()
   const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false)
   const [searchInput, setSearchInput] = useState<any>('')
   const router = useRouter()

   const handleChange = (e: any) => {
      setSearchInput(e.target.value);
   };

   const handleKeyPress = (e: { key: string }) => {
      if (e.key === 'Enter') {
         handleSearchSubmit();
      }
   };

   const handleSearchSubmit = () => {
      if (searchInput !== "") {
         router.push(`/search/${searchInput}`)
         setSearchInput('');
         setSidebarOpen((prev) => !prev)
         setIsOpen(false);
      }
   }


   /* search bar open and close button handler */
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };
   const closeDropdown = () => {
      setIsOpen(false);
   };


   return (
      <header className="py-5">
         <div className="container mx-auto px-5 sm:px-0">
            <div className="navbar grid grid-cols-12">
               <div className="col-span-3">
                  <Link href={`/`}>
                     <Logo className={`text-base-content`} />
                  </Link>
               </div>
               <nav className="hidden xl:block col-span-6 font-work">
                  <ul className="menu menu-horizontal w-full flex items-center justify-center gap-8">
                     {headerData.map((item: any, index: number) => (
                        <li tabIndex={index} key={index}>
                           {item.subMenu ? (
                              <span className="text-base flex gap-1 items-center text-base-content/80 hover:text-primary bg-transparent py-3 px-0 transition hover:duration-300 font-work">
                                 {item.name}
                                 {item.subMenu && (
                                    <svg
                                       className="fill-current"
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="20"
                                       height="20"
                                       viewBox="0 0 24 24"
                                    >
                                       <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                 )}
                              </span>
                           ) : (
                              <Link
                                 href={item.link}
                                 className="text-base flex gap-1 items-center text-base-content/80 hover:text-primary bg-transparent py-3 px-0 transition hover:duration-300 font-work"
                              >
                                 {item.name}
                              </Link>
                           )}
                           {item.subMenu && item.subMenu.length > 0 && (
                              <SubMenu subMenu={item.subMenu} />
                           )}
                        </li>
                     ))}
                  </ul>
               </nav>
               <div className="flex items-center justify-end gap-6 col-span-9 xl:col-span-3">
                  {/* Search Block */}
                  <div className="hidden md:block">
                     {/* search dropdown section  */}
                     <div className={`dropdown`} >
                        <label tabIndex={0} onClick={toggleDropdown}>
                           <svg
                              className="cursor-pointer w-5 h-5"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
                                 stroke="#52525B"
                                 strokeWidth="1.5"
                                 strokeMiterlimit="10"
                              />
                              <path
                                 d="M10.5715 10.5716L14 14"
                                 stroke="#52525B"
                                 strokeWidth="1.5"
                                 strokeMiterlimit="10"
                                 strokeLinecap="round"
                              />
                           </svg>
                        </label>
                        {isOpen && (
                           <ul
                              tabIndex={0}
                              className="dropdown-content menu menu-compact min-w-[360px] shadow bg-base-100 rounded-xl mt-2 -right-12"
                           >
                              <div className="p-4 md:p-6 ">
                                 <div className="flex items-center justify-between">
                                    <h5 className="text-base-content font-medium text-lg">
                                       Search
                                    </h5>
                                    <div
                                       onClick={closeDropdown}
                                    >
                                       <svg
                                          stroke="currentColor"
                                          className="text-base-content/70 w-5 h-5 cursor-pointer"
                                          fill="none"
                                          strokeWidth="0"
                                          viewBox="0 0 15 15"
                                          height="1em"
                                          width="1em"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             fillRule="evenodd"
                                             clipRule="evenodd"
                                             d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                             fill="currentColor"
                                          ></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div className="mt-6 flex items-center justify-center gap-2">
                                    <input
                                       className="w-full focus:outline-none text-sm md:text-base rounded-md border border-base-content border-opacity-10  px-4 py-3 text-base-content placeholder:text-base placeholder:text-base-content placeholder:text-opacity-40"
                                       type="text"
                                       placeholder="Search"
                                       name='searchInput'
                                       value={searchInput}
                                       onChange={handleChange}
                                       onKeyPress={handleKeyPress} // Listen for Enter keypress
                                    />
                                    <div onClick={handleSearchSubmit} className="p-4 bg-primary w-fit rounded-md">
                                       <svg
                                          className="cursor-pointer w-5 h-5 text-primary-content"
                                          width="16"
                                          height="16"
                                          viewBox="0 0 16 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
                                             stroke="currentColor"
                                             strokeWidth="1.5"
                                             strokeMiterlimit="10"
                                          />
                                          <path
                                             d="M10.5715 10.5716L14 14"
                                             stroke="currentColor"
                                             strokeWidth="1.5"
                                             strokeMiterlimit="10"
                                             strokeLinecap="round"
                                          />
                                       </svg>
                                    </div>
                                 </div>
                                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-4">
                                    {[1, 2, 3, 4, 5].map((_, index: number) => (
                                       <span
                                          key={index}
                                          className="text-primary text-sm font-medium px-2.5 py-1 bg-primary bg-opacity-5 rounded-md"
                                       >
                                          <Link href={`/ tags / Keyword`}>
                                             #Keyword
                                          </Link>
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           </ul>
                        )}
                     </div>
                  </div>
                  {/* Theme Switcher */}
                  {/*<input*/}
                  {/*   type="checkbox"*/}
                  {/*   className={`toggle rounded-full ${* /}
                  {/*      !lightMode ? 'toggle-primary' : ''*/}
                  {/*   }`}*/}
                  {/*   onClick={() => {*/}
                  {/*      if (theme === 'light') {*/}
                  {/*         setTheme('dark')*/}
                  {/*      } else {*/}
                  {/*         setTheme('light')*/}
                  {/*      }*/}
                  {/*   }}*/}
                  {/*   defaultChecked={theme === 'dark'}*/}
                  {/*/>*/}

                  {/*Multi themes switcher */}
                  <div className="flex-none">
                     <div className="dropdown dropdown-end">
                        <label
                           tabIndex={0}
                           className="btn btn-ghost btn-circle avatar"
                        >
                           <div className="rounded-full">
                              <svg
                                 stroke="currentColor"
                                 fill="currentColor"
                                 strokeWidth="0"
                                 viewBox="0 0 512 512"
                                 className="w-7 h-7 text-base-content"
                                 height="1em"
                                 width="1em"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M441 336.2l-.06-.05c-9.93-9.18-22.78-11.34-32.16-12.92l-.69-.12c-9.05-1.49-10.48-2.5-14.58-6.17-2.44-2.17-5.35-5.65-5.35-9.94s2.91-7.77 5.34-9.94l30.28-26.87c25.92-22.91 40.2-53.66 40.2-86.59s-14.25-63.68-40.2-86.6c-35.89-31.59-85-49-138.37-49C223.72 48 162 71.37 116 112.11c-43.87 38.77-68 90.71-68 146.24s24.16 107.47 68 146.23c21.75 19.24 47.49 34.18 76.52 44.42a266.17 266.17 0 0086.87 15h1.81c61 0 119.09-20.57 159.39-56.4 9.7-8.56 15.15-20.83 15.34-34.56.21-14.17-5.37-27.95-14.93-36.84zM112 208a32 32 0 1132 32 32 32 0 01-32-32zm40 135a32 32 0 1132-32 32 32 0 01-32 32zm40-199a32 32 0 1132 32 32 32 0 01-32-32zm64 271a48 48 0 1148-48 48 48 0 01-48 48zm72-239a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                              </svg>
                           </div>
                        </label>
                        <ul
                           tabIndex={0}
                           className="grid dropdown-content p-3 shadow-lg mt-5 bg-base-200 rounded-lg w-52 max-h-80 overflow-x-auto"
                        >
                           {themes.map((item: any) => (
                              <li
                                 data-theme={item}
                                 key={item}
                                 className={`capitalize w-full flex mb-2 rounded-md last-of-type:mb-0 justify-between items-center px-2 py-2 transition-all duration-300 cursor-pointer`}
                                 onClick={() => {
                                    setTheme(item)
                                 }}
                              >
                                 <span className="text-base-content flex items-center gap-2">
                                    {hydrationError && theme === item && (
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          className="w-3 h-3 text-primary"
                                       >
                                          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                                       </svg>
                                    )}
                                    {item}
                                 </span>
                                 <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                                    <div className="bg-primary w-2 rounded"></div>{' '}
                                    <div className="bg-secondary w-2 rounded"></div>{' '}
                                    <div className="bg-accent w-2 rounded"></div>{' '}
                                    <div className="bg-neutral w-2 rounded"></div>
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  {/* Responsive Sidebar Menu */}
                  <svg
                     onClick={() => setSidebarOpen(!sidebarOpen)}
                     className="cursor-pointer w-8 h-8 xl:hidden text-base-content"
                     width="20"
                     height="20"
                     viewBox="0 0 20 20"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M3.33301 5H16.6663M3.33301 10H16.6663M3.33301 15H16.6663"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
                  {/*  Newsletters */}

                  <div className="hidden md:block">
                     {/* newsletter section dropdown created  */}
                     <div className="dropdown">
                        <label tabIndex={1}>
                           <div className="flex items-center justify-center gap-2 pb-2 border-b border-primary cursor-pointer">
                              <svg
                                 className="w-5 h-5"
                                 stroke="currentColor"
                                 fill="currentColor"
                                 strokeWidth="0"
                                 viewBox="0 0 1024 1024"
                                 height="1em"
                                 width="1em"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                              </svg>
                              <h6 className="text-base-content/80 text-base font-sans">
                                 SUBSCRIBE
                              </h6>
                           </div>
                        </label>
                        <ul
                           tabIndex={1}
                           className="menu menu-compact dropdown-content min-w-[360px] shadow bg-base-100 rounded-xl mt-2 -right-2"
                        >
                           <div className="p-6 ">
                              <div className="flex items-center justify-between">
                                 <h5 className="text-base-content font-medium text-lg">
                                    Newsletter
                                 </h5>
                                 <div>
                                    <svg
                                       stroke="currentColor"
                                       className="text-base-content/70 w-5 h-5 cursor-pointer"
                                       fill="none"
                                       strokeWidth="0"
                                       viewBox="0 0 15 15"
                                       height="1em"
                                       width="1em"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                          fill="currentColor"
                                       ></path>
                                    </svg>
                                 </div>
                              </div>
                              <div className="mt-6 flex items-center justify-center gap-2">
                                 <input
                                    className="w-full focus:outline-none text-sm md:text-base rounded-md border border-base-content border-opacity-10  px-4 py-3 text-base-content placeholder:text-base placeholder:text-base-content placeholder:text-opacity-40"
                                    type="text"
                                    placeholder="Email"
                                 />
                                 <div className="p-4 bg-primary w-fit rounded-md">
                                    <svg
                                       className="text-primary-content w-5 h-5 cursor-pointer"
                                       stroke="currentColor"
                                       fill="currentColor"
                                       strokeWidth="0"
                                       viewBox="0 0 1024 1024"
                                       height="1em"
                                       width="1em"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                                    </svg>
                                 </div>
                              </div>
                              <p className="mt-2 text-base-content/70 text-sm">
                                 We care about your data in our{' '}
                                 <span className="text-base-content font-medium">
                                    Privacy Policy
                                 </span>
                              </p>
                           </div>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            {/* Responsive Sidebar Layout */}
            <MobileNav
               sidebarOpen={sidebarOpen}
               setSidebarOpen={setSidebarOpen}
               headerData={headerData}
               handleKeyPress={handleKeyPress}
               handleSearchSubmit={handleSearchSubmit}
               handleChange={handleChange}
               searchInput={searchInput}
               setSearchInput={setSearchInput}
            />
         </div>
      </header >
   )
}

const SubMenu = ({ subMenu }: any) => {
   return (
      <ul className="p-0 w-full min-w-[180px] max-w-[230px] shadow-md bg-base-100 rounded-lg z-30 font-work">
         {subMenu.map((subItem: any, index: number) => (
            <li key={index} className={'block group relative'}>
               {subItem.subMenu ? (
                  <span className="text-sm flex gap-1 justify-between items-center text-base-content/80 hover:text-primary transition hover:duration-300 whitespace-normal border-b border-base-content/10 py-3 px-4 block">
                     {subItem.name}
                     <svg
                        className="fill-current -rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                     >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                     </svg>
                  </span>
               ) : (
                  <Link
                     href={subItem.link}
                     className="text-sm text-base-content/80 hover:text-primary transition hover:duration-300 whitespace-normal border-b border-base-content/10 py-3 px-4 block"
                  >
                     {subItem.name}
                  </Link>
               )}
               {subItem.subMenu && <SubSubMenu subSubMenu={subItem.subMenu} />}
            </li>
         ))}
      </ul>
   )
}

const SubSubMenu = ({ subSubMenu }: any) => {
   return (
      <ul className="p-0 w-full absolute left-full top-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible min-w-[230px] shadow-md bg-base-100 rounded-lg z-30 font-work">
         {subSubMenu.map((subSubItem: any, index: number) => (
            <li key={index} className={'block group relative'}>
               {subSubItem.subMenu ? (
                  <span className="text-sm flex gap-1 justify-between items-center text-base-content/80 hover:text-primary transition hover:duration-300 whitespace-normal border-b border-base-content/10 py-3 px-4 block">
                     {subSubItem.name}
                     <svg
                        className="fill-current -rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                     >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                     </svg>
                  </span>
               ) : (
                  <Link
                     href={subSubItem.link}
                     className="text-sm text-base-content/80 hover:text-primary transition hover:duration-300 whitespace-normal border-b border-base-content/10 py-3 px-4 block"
                  >
                     {subSubItem.name}
                  </Link>
               )}
               {subSubItem.subMenu && (
                  <SubSubMenu subSubMenu={subSubItem.subMenu} />
               )}
            </li>
         ))}
      </ul>
   )
}

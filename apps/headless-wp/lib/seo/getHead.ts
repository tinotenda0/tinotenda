/**
 * get rank-math seo data
 * @param url  page url
 * @returns  seo data
 */
export const getSeoHead = async (url: string) => {
   return await fetch(
      `${process.env.API_ENDPOINT}/wp-json/rankmath/v1/getHead?url=${url}`
   )
      .then((res: any) => {
         return res.json()
      })
      .catch((error) => {
         throw error
      })
}

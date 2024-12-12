type QueryParams = {
   slug?: string
}

/**
 * This function is to fetch all available categories data from the WordPress API
 * @param query An object that defines the query parameters to send with the API request.
 * For all available query see the documentation: https://developer.wordpress.org/rest-api/reference/categories/
 * @returns | { data, error }
 */
export const getUsers = async (query?: QueryParams) => {
   try {
      const initialQuery = {
         per_page: 10,
      }
      /**
       * initialQuery is the default query object for fetching tags
       *  It specifies to retrieve 10 posts per page, ordered by name, in descending order
       *  If a custom query object is passed as an argument, use that, otherwise use the default query object
       */

      const newQuery = query ? query : initialQuery

      // map the query object to use on api url
      const queryStr =
         Object.entries(newQuery)
            .map(([key, value]) => `${key}=${value}`)
            .join('&') || ''

      const res = await fetch(
         `${process.env.API_ENDPOINT}/wp-json/wp/v2/users?${queryStr}`,
         {
            next: { revalidate: 60 },
         }
      )
      const data = await res.json()

      if (data && data?.length > 0) {
         return {
            data: data,
            error: false,
         }
      }
      return {
         data: [],
         error: false,
      }
   } catch (e) {
      return {
         error: true,
      }
   }
}

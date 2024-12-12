type QueryParams = {
  page?: number
  per_page?: number
  search?: string
  exclude?: number
  include?: number
  orderby?: string
  order?: string
  post?: string
  slug?: string
}

/**
 * This function is to fetch all available tags data from the WordPress API
 * @param query An object that defines the query parameters to send with the API request.
 * For all available query see the documentation: https://developer.wordpress.org/rest-api/reference/tags/
 * @returns | { data, error }
 */
export const getTags = async (query?: QueryParams) => {
  try {
    const initialQuery = {
      per_page: 10,
      orderby: 'name',
      order: 'desc'
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
      `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/tags?${queryStr}`,
      { next: { revalidate: 60 } } as any
    )
    const data = await res.json()

    if (data && data?.length > 0) {
      // filter out posts only allow title. excerpt, and featured image, author, and date
      const tags = data?.map((tag: any) => ({
        id: tag?.id,
        name: tag?.name,
        slug: tag?.slug
      }))
      return {
        data: tags,
        error: false
      }
    }
    return {
      data: [],
      error: false
    }
  } catch (e) {
    return {
      error: true
    }
  }
}

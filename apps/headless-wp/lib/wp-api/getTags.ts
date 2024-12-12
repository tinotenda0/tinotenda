import axios, { AxiosResponse } from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Define the QueryParams type
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

// Define the structure of a Tag
type Tag = {
  id: number
  name: string
  slug: string
}

// Define the return type of the getTags function
type GetTagsResult = {
  data: Tag[]
  error: boolean
}

/**
 * This function fetches all available tags data from the WordPress API
 * @param query An object that defines the query parameters to send with the API request.
 * For all available query parameters, see the documentation: https://developer.wordpress.org/rest-api/reference/tags/
 * @returns { data, error }
 */
export const getTags = async (query?: QueryParams): Promise<GetTagsResult> => {
  try {
    // Default query parameters
    const defaultQuery: QueryParams = {
      per_page: 10,
      orderby: 'name',
      order: 'desc',
    }

    // Merge default query with user-provided query
    const finalQuery: QueryParams = { ...defaultQuery, ...query }

    // Create an Axios instance with default configurations
    const wpAxios = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/`,
      timeout: 5000, // Optional: set a timeout for requests
      headers: {
        'Content-Type': 'application/json',
      },
      // If authentication is required, configure it here
      // Example using Basic Auth:
      // auth: {
      //   username: 'your-username',
      //   password: 'your-password'
      // }
    })

    // Make the GET request to the 'tags' endpoint with query parameters
    const response: AxiosResponse<Tag[]> = await wpAxios.get('tags', {
      params: finalQuery,
      // Note: Axios doesn't support Next.js's 'next' fetch options like 'revalidate'
      // If caching is required, handle it using HTTP headers or other caching mechanisms
    })

    // Check if data is received and has elements
    if (response.data && response.data.length > 0) {
      // Map the received data to include only necessary fields
      const tags: Tag[] = response.data.map((tag) => ({
        id: tag.id,
        name: tag.name,
        slug: tag.slug,
      }))

      return {
        data: tags,
        error: false,
      }
    }

    // If no tags are found, return an empty array with no error
    return {
      data: [],
      error: false,
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching tags:', error)

    // Return an error state
    return {
      data: [],
      error: true,
    }
  }
}

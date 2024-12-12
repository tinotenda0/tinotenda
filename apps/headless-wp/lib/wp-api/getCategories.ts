import axios, { AxiosResponse } from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Define the QueryParams type
type QueryParams = {
  page?: number
  per_page?: number
  search?: string
  parent?: string
  orderby?: string
  order?: string
  post?: string
  slug?: string
}

// Define the structure of a Category object returned by the WordPress API
interface Category {
  id: number
  count: number
  description: string
  link: string
  name: string
  slug: string
  taxonomy: string
  parent: number
  meta: Record<string, any>
  _links: {
    self: object[]
    collection: object[]
  }
}

// Define the return type of the getCategories function
interface GetCategoriesResult {
  data: Category[]
  error: boolean
  message?: string
}

/**
 * Fetches categories data from the WordPress API.
 * @param query An object that defines the query parameters to send with the API request.
 * For all available query parameters, see the documentation: https://developer.wordpress.org/rest-api/reference/categories/
 * @returns An object containing the fetched data and an error flag.
 */
export const getCategories = async (query?: QueryParams): Promise<GetCategoriesResult> => {
  try {
    // Default query parameters
    const defaultQuery: QueryParams = {
      per_page: 10,
    }

    /**
     * initialQuery is the default query object for fetching categories
     * It specifies to retrieve 10 categories per page
     * If a custom query object is passed as an argument, use that; otherwise, use the default query object
     */
    const finalQuery: QueryParams = { ...defaultQuery, ...query }

    // Create an Axios instance with default configurations
    const wpAxios = axios.create({
      baseURL: `${process.env.API_ENDPOINT}/wp-json/wp/v2/`,
      timeout: 5000, // Optional: set a timeout for requests
      headers: {
        'Content-Type': 'application/json',
      },
      // If authentication is required, configure it here
      // Example using Basic Auth:
      // auth: {
      //   username: process.env.WORDPRESS_USERNAME || '',
      //   password: process.env.WORDPRESS_PASSWORD || '',
      // }
    })

    // Make the GET request to the 'categories' endpoint with query parameters
    const response: AxiosResponse<Category[]> = await wpAxios.get('categories', {
      params: finalQuery,
      // Note: Axios doesn't support Next.js's 'revalidate' option like 'next: { revalidate: 60 }'
      // If caching is required, handle it using HTTP headers or other caching mechanisms
    })

    // Check if data is received and has elements
    if (response.data && response.data.length > 0) {
      return {
        data: response.data,
        error: false,
      }
    }

    // If no categories are found, return an empty array with no error
    return {
      data: [],
      error: false,
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching categories:', error)

    // Determine the error message
    let message = 'An unknown error occurred.'

    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server responded with a status other than 2xx
        message = `Error: ${error.response.status} - ${error.response.statusText}`
      } else if (error.request) {
        // Request was made but no response received
        message = 'No response received from the server.'
      } else {
        // Something happened in setting up the request
        message = error.message
      }
    } else if (error instanceof Error) {
      message = error.message
    }

    return {
      data: [],
      error: true,
      message,
    }
  }
}

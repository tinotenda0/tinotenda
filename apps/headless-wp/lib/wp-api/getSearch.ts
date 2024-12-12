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
  status?: string
}

// Define the structure of the response object from WordPress Search API
type ResObject = {
  id: number
  title: string
  url: string
  type: string
  subtype: string
  _links: {
    self: object[]
    about: object[]
    collection: object[]
  }
  _embedded: {
    self: object[]
  }
}

// Define the structure of the items returned by the search
type ItemType = {
  icon: string
  suggestion: string
  link: string
}

// Define the return type of the getSearch function
type GetSearchResult = {
  data: ResObject[] | null
  error: boolean
  message?: string
}

/**
 * Fetches search results from the WordPress API.
 * @param query An object that defines the query parameters to send with the API request.
 * For all available query parameters, see the documentation: https://developer.wordpress.org/rest-api/reference/search/
 * @returns { data, error, message }
 */
export const getSearch = async (query?: QueryParams): Promise<GetSearchResult> => {
  try {
    // Default query parameters
    const defaultQuery: QueryParams = {
      per_page: 10,
      orderby: 'date',
      status: 'publish',
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

    // Make the GET request to the 'search' endpoint with query parameters
    const response: AxiosResponse<ResObject[]> = await wpAxios.get('search', {
      params: {
        subtype: 'post',
        ...finalQuery,
      },
      // Note: Axios doesn't support Next.js's 'cache' option like 'force-cache'
      // If caching is required, handle it using HTTP headers or other caching mechanisms
    })

    // Check if data is received and has elements
    if (response.data && response.data.length > 0) {
      // Optionally, map the received data to include only necessary fields
      const results: ResObject[] = response.data.map((item) => ({
        id: item.id,
        title: item.title,
        url: item.url,
        type: item.type,
        subtype: item.subtype,
        _links: item._links,
        _embedded: item._embedded,
      }))

      return {
        data: results,
        error: false,
      }
    }

    // If no results are found, return an empty array with no error
    return {
      data: [],
      error: false,
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching search results:', error)

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
      data: null,
      error: true,
      message,
    }
  }
}

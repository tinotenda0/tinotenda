import axios, { AxiosResponse } from 'axios'

// ... (your existing type definitions)

/**
 * Fetches all post data from the WordPress API.
 * @param query An object that defines the query parameters to send with the API request.
 * For all available query parameters, see the documentation: https://developer.wordpress.org/rest-api/reference/posts/.
 * @returns { data, error, message }
 */
export const getPosts = async (query?: QueryParams): Promise<GetPostsResult> => {
  try {
    // Validate the environment variable
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    if (!apiUrl) {
      throw new Error('NEXT_PUBLIC_API_URL is not defined in environment variables.')
    }

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
      baseURL: `${apiUrl}/wp-json/wp/v2/`,
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

    // Make the GET request to the 'posts' endpoint with query parameters and embedding
    const response: AxiosResponse<ResObject[]> = await wpAxios.get('posts', {
      params: {
        _embed: true, // Equivalent to adding '?_embed' in fetch
        ...finalQuery,
      },
      // Note: Axios doesn't support Next.js's 'next' fetch option like 'revalidate'
      // If caching is required, handle it using HTTP headers or other caching mechanisms
    })

    // Check if data is received and has elements
    if (response.data && response.data.length > 0) {
      // Map the received data to include only necessary fields
      const posts: Post[] = response.data.map((post) => ({
        id: post.id || '',
        title: post.title.rendered || '',
        slug: post.slug || '',
        featuredmedia: {
          sourceUrl: post._embedded['wp:featuredmedia']?.[0]?.source_url || '',
          alt: post._embedded['wp:featuredmedia']?.[0]?.alt_text || '',
        },
        author: post._embedded.author?.[0]?.name || '',
        authorSlug: post._embedded.author?.[0]?.slug || '',
        category: post._embedded['wp:term']?.[0] || [],
        publishTime: post.date,
        avatar: post._embedded.author?.[0]?.avatar_urls?.['96'] || '',
        content: post.content.rendered || '',
        date: post.date,
        date_modified: post.date_modified,
        acf: post.acf || {},
      }))

      return {
        data: posts,
        error: false,
      }
    }

    // If no posts are found, return an empty array with no error
    return {
      data: [],
      error: false,
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching posts:', error)

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

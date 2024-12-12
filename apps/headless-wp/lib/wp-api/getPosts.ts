import axios, { AxiosResponse } from 'axios'
import { QueryParams, GetPostsResult, ResObject, Post } from './types' // Adjust path if needed

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
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Make the GET request to the 'posts' endpoint with query parameters and embedding
    const response: AxiosResponse<ResObject[]> = await wpAxios.get('posts', {
      params: {
        _embed: true,
        ...finalQuery,
      },
    })

    // Check if data is received and has elements
    if (response.data && response.data.length > 0) {
      const posts: Post[] = response.data.map((post) => ({
        id: post.id.toString(),
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
    console.error('Error fetching posts:', error)

    let message = 'An unknown error occurred.'

    if (axios.isAxiosError(error)) {
      if (error.response) {
        message = `Error: ${error.response.status} - ${error.response.statusText}`
      } else if (error.request) {
        message = 'No response received from the server.'
      } else {
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

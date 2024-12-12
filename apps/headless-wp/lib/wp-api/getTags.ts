import axios, { AxiosResponse } from 'axios'
import { QueryParams, Tag, GetTagsResult } from './types' // adjust path as needed

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

/**
 * This function fetches all available tags data from the WordPress API.
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

    // Create an Axios instance
    const wpAxios = axios.create({
      baseURL: `${API_BASE_URL}/wp-json/wp/v2/`,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Make the GET request to 'tags' endpoint
    const response: AxiosResponse<Tag[]> = await wpAxios.get('tags', {
      params: finalQuery,
    })

    // Check if data is received
    if (response.data && response.data.length > 0) {
      // Map the received data to necessary fields
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

    // If no tags are found
    return {
      data: [],
      error: false,
    }
  } catch (error) {
    console.error('Error fetching tags:', error)
    return {
      data: [],
      error: true,
    }
  }
}

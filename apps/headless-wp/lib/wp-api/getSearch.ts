import axios, { AxiosResponse } from 'axios'
import { QueryParams, ResObject, GetSearchResult } from './types' // Adjust the import path if needed

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getSearch = async (query?: QueryParams): Promise<GetSearchResult> => {
  try {
    const defaultQuery: QueryParams = {
      per_page: 10,
      orderby: 'date',
      status: 'publish',
    }

    const finalQuery: QueryParams = { ...defaultQuery, ...query }

    const wpAxios = axios.create({
      baseURL: `${API_BASE_URL}/wp-json/wp/v2/`,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const response: AxiosResponse<ResObject[]> = await wpAxios.get('search', {
      params: {
        subtype: 'post',
        ...finalQuery,
      },
    })

    if (response.data && response.data.length > 0) {
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

    return {
      data: [],
      error: false,
    }
  } catch (error) {
    console.error('Error fetching search results:', error)

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

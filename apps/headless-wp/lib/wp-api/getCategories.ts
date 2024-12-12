import axios, { AxiosResponse } from 'axios'
import { QueryParams } from './types' // Import it from the new file

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

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

interface GetCategoriesResult {
  data: Category[]
  error: boolean
  message?: string
}

export const getCategories = async (
  query?: QueryParams
): Promise<GetCategoriesResult> => {
  try {
    const defaultQuery: QueryParams = {
      per_page: 10,
    }

    const finalQuery: QueryParams = { ...defaultQuery, ...query }

    const wpAxios = axios.create({
      baseURL: `${API_BASE_URL}/wp-json/wp/v2/`,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const response: AxiosResponse<Category[]> = await wpAxios.get('categories', {
      params: finalQuery,
    })

    if (response.data && response.data.length > 0) {
      return {
        data: response.data,
        error: false,
      }
    }

    return {
      data: [],
      error: false,
    }
  } catch (error) {
    console.error('Error fetching categories:', error)

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
      data: [],
      error: true,
      message,
    }
  }
}

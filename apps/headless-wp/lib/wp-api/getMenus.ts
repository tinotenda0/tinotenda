import axios, { AxiosResponse } from 'axios'
import { Menu, MenuItem, GetMenusResult } from './types' // adjust the path if needed

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

/**
 * Fetches menu items from the WordPress API based on the provided slug.
 * @param slug The slug identifier for the specific menu to fetch.
 * @returns An array of MenuItem objects or null if fetching fails.
 */
export const getMenus = async (slug: string): Promise<GetMenusResult> => {
  try {
    const apiEndpoint = process.env.NEXT_PUBLIC_API_URL
    if (!apiEndpoint) {
      throw new Error('NEXT_PUBLIC_API_URL is not defined in environment variables.')
    }

    const wpAxios = axios.create({
      baseURL: `${apiEndpoint}/wp-json/menus/v1/menus/`,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const response: AxiosResponse<Menu> = await wpAxios.get(`${slug}/`)

    if (response.data && response.data.items && response.data.items.length > 0) {
      return response.data.items
    }

    return null
  } catch (error) {
    console.error('Error fetching menus:', error)
    return null
  }
}

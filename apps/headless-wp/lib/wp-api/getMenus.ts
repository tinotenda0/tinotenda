import axios, { AxiosResponse } from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Define the structure of a single menu item
interface MenuItem {
  id: number
  title: string
  url: string
  child_items?: MenuItem[]
  // Add other relevant fields if necessary
}

// Define the structure of the Menu object returned by the API
interface Menu {
  items: MenuItem[]
  // Add other relevant fields if necessary
}

// Define the return type of the getMenus function
type GetMenusResult = MenuItem[] | null

/**
 * Fetches menu items from the WordPress API based on the provided slug.
 * @param slug The slug identifier for the specific menu to fetch.
 * @returns An array of MenuItem objects or null if fetching fails.
 */
export const getMenus = async (slug: string): Promise<GetMenusResult> => {
  try {
    // Ensure that NEXT_PUBLIC_API_URL is defined
    const apiEndpoint = process.env.NEXT_PUBLIC_API_URL
    if (!apiEndpoint) {
      throw new Error('NEXT_PUBLIC_API_URL is not defined in environment variables.')
    }

    // Construct the API URL using the provided slug and environment variable
    const url = `${apiEndpoint}/wp-json/menus/v1/menus/${slug}/`

    // Create an Axios instance with default configurations
    const wpAxios = axios.create({
      baseURL: `${apiEndpoint}/wp-json/menus/v1/menus/`,
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

    // Make the GET request to fetch the menu data
    const response: AxiosResponse<Menu> = await wpAxios.get(`${slug}/`, {
      // Axios doesn't support Next.js's 'cache' option like 'force-cache'
      // If caching is required, handle it using HTTP headers or other caching mechanisms
    })

    // Check if data is received and has elements
    if (response.data && response.data.items && response.data.items.length > 0) {
      return response.data.items
    }

    // If no menu items are found, return null
    return null
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching menus:', error)

    return null
  }
}

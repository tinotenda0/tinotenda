// Common Query Parameters for fetching WP data
export type QueryParams = {
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
  author?: number
}

// ********** getPosts Types ********** //
export type ResObject = {
  id: number
  title: {
    rendered: string
  }
  slug: string
  _embedded: {
    'wp:featuredmedia'?: {
      source_url?: string
      alt_text?: string
    }[]
    author?: {
      name?: string
      slug?: string
      avatar_urls?: {
        '96'?: string
      }
    }[]
    'wp:term'?: any[]
  }
  date: string
  date_modified?: string
  content: {
    rendered: string
  }
  acf?: Record<string, any>
}

export type Post = {
  id: number
  title: string
  slug: string
  featuredmedia: {
    sourceUrl: string
    alt: string
  }
  author: string
  authorSlug: string
  category: any[]
  publishTime: string
  avatar: string
  content: string
  date: string
  date_modified?: string
  acf: Record<string, any>
}

export type GetPostsResult = {
  data: Post[] | [] | null
  error: boolean
  message?: string
}

// ********** getCategories Types ********** //
export interface Category {
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

export interface GetCategoriesResult {
  data: Category[]
  error: boolean
  message?: string
}

// ********** getTags Types ********** //
export type Tag = {
  id: number
  name: string
  slug: string
}

export type GetTagsResult = {
  data: Tag[]
  error: boolean
}

// ********** getSearch Types ********** //
export type SearchResObject = {
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

export type GetSearchResult = {
  data: SearchResObject[] | null
  error: boolean
  message?: string
}

// ********** getMenus Types ********** //
export interface MenuItem {
  id: number
  title: string
  url: string
  child_items?: MenuItem[]
}

export interface Menu {
  items: MenuItem[]
}

export type GetMenusResult = MenuItem[] | null

export interface IResource {
  id: number
  name: string
  description?: string
  quantity: number
  price: number
  owner_id: number
  bought_by: any
  bought_at: string
  condition: string
  transport_type: string
  country: string
  is_trade: boolean
  is_hidden: boolean
  images: Array<{
    resource_id: number
    image_id: number
  }>
}

export type IResourceCreate = Omit<
  IResource,
  'id' | 'is_hidden' | 'bought_by' | 'bought_at' | 'images'
> & {
  images: string[]
}

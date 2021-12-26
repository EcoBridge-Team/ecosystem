import { IResource } from './IResource'
import { IUser } from './IUser'

export interface ICartEntry {
  resource: IResource
  quantity: number
}

type ICart = Array<ICartEntry>

export interface IAppState {
  isAuthenticating: boolean
  isAuthenticated: boolean
  user?: IUser
  cart: ICart
  token: string
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  getUserData: (accessToken: string) => Promise<void>
  addToCart: (resource: IResource) => Promise<void>
  removeFromCart: (resource: IResource) => Promise<void>
}

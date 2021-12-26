export interface IAccessToken {
  access_token: string
  token_type: string
}

export interface IUser {
  id: number
  email?: string
  username?: string
  bio?: string
  is_active: boolean
  is_superuser: boolean
  access_token?: IAccessToken
}

export interface IUserCreate {
  email: string
  username: string
  password: string
}

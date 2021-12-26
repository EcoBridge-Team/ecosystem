import { IAccessToken } from '../types/IUser'

export const getTokenString = (token: IAccessToken | string): string => {
  let accessToken = 'Bearer '
  if (typeof token === 'object') accessToken += token.access_token
  else if (typeof token === 'string') accessToken += token
  return accessToken
}

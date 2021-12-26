import { userService } from '../services/userService'

export const authSlice = (set) => ({
  isAuthenticated: false,
  isAuthenticating: false,
  user: null,
  token: undefined,
  login: async (email: string, password: string): Promise<void> => {
    set(() => ({ isAuthenticating: true }))
    const { data: accessToken } = await userService.login(email, password)
    const { data: user } = await userService.getCurrentUser(accessToken)

    user.access_token = accessToken

    localStorage.setItem('authToken', accessToken.access_token)

    set(() => ({ user, isAuthenticated: true, isAuthenticating: false }))
  },
  logout: async (): Promise<void> => {
    set(() => ({ user: null, isAuthenticated: false, cart: [] }))
  },
  getUserData: async (accessToken: string): Promise<void> => {
    const { data: user } = await userService.getCurrentUser(accessToken)
    user.access_token = {
      access_token: accessToken,
      token_type: 'bearer',
    }
    set(() => ({ user }))
  },
})

import router from 'next/router'
import { useEffect } from 'react'
import { useStore } from '../../hooks/useStore'
import { IAppState } from '../../types/IAppState'

const logoutSelector = (state: IAppState) => state.logout
const authSelector = (state: IAppState) => ({
  isAuthenticated: state.isAuthenticated,
  user: state.user,
})

export default function Logout() {
  const logout = useStore(logoutSelector)
  const auth = useStore(authSelector)

  useEffect(() => {
    if (auth.isAuthenticated && auth.user) {
      logout()
    }

    setTimeout(() => {
      router.push('/')
    }, 300)
  }, [auth.isAuthenticated, auth.user, logout])

  return null
}

import create from 'zustand'
import { IAppState } from '../types/IAppState'
import { devtools, persist } from 'zustand/middleware'
import { authSlice } from './authSlice'
import { checkoutSlice } from './checkoutSlice'

export const useStore = create<IAppState>(
  devtools(
    persist(
      (set) => ({
        ...authSlice(set),
        ...checkoutSlice(set),
      }),
      { name: 'root' }
    )
  )
)

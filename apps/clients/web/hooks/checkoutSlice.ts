import { IAppState, ICartEntry } from '../types/IAppState'
import { IResource } from '../types/IResource'

export const checkoutSlice = (set) => ({
  cart: [],
  addToCart: async (resource: IResource): Promise<void> => {
    let added = false
    set((s: IAppState) => {
      if (
        s.cart.findIndex(({ resource: res }) => res.id === resource.id) === -1
      ) {
        const newCartEntry: ICartEntry = {
          resource: resource,
          quantity: 1,
        }
        added = true
        return { cart: [...s.cart, newCartEntry] }
      } else {
        return s
      }
    })

    if (!added)
      throw "Couldn't add resource to cart. It probably is in the cart already."
  },
  removeFromCart: async (resource: IResource): Promise<void> => {
    set((s: IAppState) => {
      const cartCopy = s.cart.filter(
        ({ resource: res }) => res.id !== resource.id
      )
      return { cart: cartCopy }
    })
  },
})

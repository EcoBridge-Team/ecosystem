//import { ShoppingCartIcon } from '@heroicons/react/solid'

import Link from 'next/link';
import { useStore } from '../hooks/useStore';
import { Button } from './Button';
import { Logo } from './Logo';

//import { useStore } from '../hooks/useStore'

/* interface CheckoutProps {
  cart: number,
  checkout: boolean,
  checkoutUrl: string,
  isLoading: boolean,
  onCheckout: () => void,
  onCheckoutError: () => void,
  onCheckoutSuccess: () => void
} */

export function Checkout() {
  const user = useStore((state) => state.user);

  return (
    <div className="p-10">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg md:max-w-xl lg:mx-2">
        <div className="md:flex ">
          <div className="w-full p-4 px-5 py-5">
            <div className="flex flex-row">
              <div className="w-1/3">
                <Logo height="h-10 xl:h-12" />
              </div>
            </div>
            <div className="flex flex-row pt-2 text-xs pb-5">
              {' '}
              <span className="font-bold">Information</span>{' '}
              <small className="text-gray-400 ml-1">`{'>'}`</small>{' '}
              <span className="text-gray-400 ml-1">Shopping</span>{' '}
              <small className="text-gray-400 ml-1">`{'<'}`</small>{' '}
              <span className="text-gray-400 ml-1">Payment</span>{' '}
            </div>{' '}
            <span>Customer Information</span>
            <div className="relative pb-5">
              {' '}
              <input
                type="text"
                name="mail"
                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="E-mail"
                defaultValue={user?.email}
              />{' '}
            </div>{' '}
            <span>Shipping Address</span>
            <div className="grid md:grid-cols-2 md:gap-2">
              {' '}
              <input
                type="text"
                name="mail"
                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="First name*"
              />{' '}
              <input
                type="text"
                name="mail"
                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="Last name*"
              />{' '}
            </div>{' '}
            <input
              type="text"
              name="mail"
              className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
              placeholder="Company (optional)"
            />{' '}
            <input
              type="text"
              name="mail"
              className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
              placeholder="Address*"
            />{' '}
            <input
              type="text"
              name="mail"
              className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
              placeholder="Apartment, suite, etc. (optional)"
            />
            <div className="grid md:grid-cols-3 md:gap-2">
              {' '}
              <input
                type="text"
                name="mail"
                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="Zipcode*"
              />{' '}
              <input
                type="text"
                name="mail"
                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="City*"
              />{' '}
              <input
                type="text"
                name="mail"
                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="State*"
              />{' '}
            </div>{' '}
            <input
              type="text"
              name="mail"
              className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
              placeholder="Country*"
            />{' '}
            <input
              type="text"
              name="mail"
              className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
              placeholder="Phone Number*"
            />
            <div className="flex justify-between items-center pt-2">
              {' '}
              <button
                type="button"
                className="h-12 w-24 text-green-500 text-xs font-medium"
              >
                Return to cart
              </button>{' '}
              <Link href="/checkout/shipping">
                <Button text="Continue to Shipping" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

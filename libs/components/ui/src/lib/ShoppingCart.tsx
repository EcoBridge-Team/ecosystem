import { useCallback, useEffect, useState } from 'react';
import { ShoppingCartIcon, TrashIcon, XIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useStore } from '../hooks/useStore';
import { Button } from './Button';
import { getImageUrl } from '../services/imageService';

/* interface ShoppingCartProps {
  items: number
  total: number
} */

export function ShoppingCart() {
  const [open, setOpen] = useState(false);
  const [sum, setSum] = useState(0);
  const cartItems = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);

  const handleToggleCheckout = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  useEffect(() => {
    if (cartItems.length === 0) {
      setSum(0);
      return;
    }

    setSum(
      cartItems
        .map((entry) => entry.resource.price)
        .reduce((prev, curr) => prev + curr)
    );
  }, [cartItems]);

  return (
    <div className="flex justify-end">
      <button
        onClick={handleToggleCheckout}
        className="relative flex items-center m-auto"
      >
        <ShoppingCartIcon className="h-10 w-10 text-green-700 pt-1 mx-2 cursor-pointer hover:text-green-600 transition duration-500" />
        <span className="absolute right-0 top-0 rounded-full bg-gray-600 w-5 h-5 top right pt-0.5 m-0 text-white text-xs  leading-tight text-center">
          {cartItems.length > 10 ? '10+' : cartItems.length}
        </span>
      </button>

      <div
        className={`${
          open ? 'block' : 'hidden'
        } absolute flex flex-col top-20 p-5 bg-white shadow-md rounded-md`}
        style={{ width: 300, height: 450, zIndex: 1000 }}
      >
        <div className="w-100 p-2 text-right mb-5 border-b-2">
          <XIcon
            className="h-5 w-5 text-left text-gray-600 cursor-pointer"
            onClick={handleToggleCheckout}
          />
          Total:{' '}
          <span className="text-green-700 font-bold">${sum.toFixed(2)}</span>
        </div>

        <ul className="flex-grow overflow-auto scrollbar-hide mb-5">
          {cartItems.length > 0 &&
            cartItems.map(({ resource }) => (
              <li key={resource.id} className="flex justify-between mb-3">
                <img
                  className="rounded-md"
                  src={getImageUrl(resource.images[0].image_id)}
                  width={80}
                  alt={resource.name}
                />
                <div className="w-3/6 flex flex-col">
                  <span className="text-sm">{resource.name}</span>
                  <span className="text-sm text-green-700">
                    ${resource.price.toFixed(2)}
                  </span>
                </div>
                <TrashIcon
                  className="w-5 h-5 text-red-600 self-start cursor-pointer"
                  onClick={() => {
                    removeFromCart(resource);
                  }}
                />
              </li>
            ))}
        </ul>

        {cartItems.length > 0 && (
          <Link href="/checkout">
            <div className="flex justify-center">
              <Button text="Continue to checkout" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

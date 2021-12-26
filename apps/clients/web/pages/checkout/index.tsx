import React from 'react';
import { Layout, Checkout } from '@ecosystem/components/ui';

export default function CheckoutCart(): JSX.Element {
  return (
    <Layout>
      <div className="justify-center flex h-full">
        <div className="inline-block align-center place-self-center">
          <Checkout />
        </div>
      </div>
    </Layout>
  );
}

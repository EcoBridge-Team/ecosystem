import React from 'react';
import { Layout, MarketResourcesForm } from '@ecosystem/components/ui';

export default function CreateItem(): JSX.Element {
  return (
    <Layout background="bg-surface bg-cover">
      <div className="justify-center flex h-full">
        <div className="inline-block align-center place-self-center text-center">
          <div className="flex justify-center items-center flex-col mb-10">
            <h2 className="text-2xl md:text-4xl md:text-left font-extrabold text-green-600 mb-5">
              Register a new resource
            </h2>
            <p className="text-green-600">
              Register a new resource in the community market.
            </p>
          </div>
          <MarketResourcesForm />
        </div>
      </div>
    </Layout>
  );
}

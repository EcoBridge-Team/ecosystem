import Link from 'next/link';
import {
  Layout,
  ShoppingCart,
  SearchInput,
  Footer,
  Pagination,
  Item,
} from '@ecosystem/components/ui';

import { AdjustmentsIcon, PlusIcon } from '@heroicons/react/solid';
import { resourceService } from '../../../services/resourceService';
import { IResource } from '../../../types/IResource';
import { useEffect, useRef, useState } from 'react';
import { useStore } from '../../../hooks/useStore';
import { getImageUrl } from '../../../services/imageService';

export default function Resources(): JSX.Element {
  const [resources, setResources] = useState<IResource[]>([]);
  const user = useStore((state) => state.user);

  const formatterRef = useRef(
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  );

  useEffect(() => {
    if (!user) return;
    resourceService
      .getAllResources(user.access_token)
      .then(({ data: resources }) => setResources(resources));
  }, [user]);

  return (
    <Layout>
      <div className="inherit lg:fixed z-20">
        <div className="flex md:py-2 mb-2 flex-col md:flex-row bg-white z-20 rounded-md shadow-xl lg:w-full justify-start">
          <h2 className="w-auto xl:w-full text-3xl lg:text-4xl xl:text-5xl text-center md:text-left font-extrabold text-green-700 md:ml-5 md:mt-2 md:mr-20">
            Resources Near You
          </h2>
          <Link href="/resources/marketplace/item/create">
            <PlusIcon className="h-16 w-16 text-green-700 pt-1 mx-2 cursor-pointer hover:text-green-600 transition duration-500" />
          </Link>
          <AdjustmentsIcon className="h-16 w-16 text-green-700 pt-1 mx-2 cursor-pointer hover:text-green-600 transition duration-500" />
          <SearchInput placeholder="Enter a Resource..." data={[1, 2, 3]} />
          <ShoppingCart />
          <div className="w-10" />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 grid-flow-row h-auto mt-24">
        {resources.map((d) => (
          <Link href={`/resources/marketplace/item/${d.id}`} key={d.id}>
            <a>
              <Item
                name={d.name}
                price={formatterRef.current.format(d.price)}
                // rating_style={d.rt_color}
                rating_style="bg-green-600"
                location={d.country.replace(/^\w/, (c) => c.toUpperCase())}
                image={
                  d.images?.[0] ? getImageUrl(d.images[0].image_id) : undefined
                }
              />
            </a>
          </Link>
        ))}
      </div>
      <Pagination />
      <Footer title="EcoBridge" />
    </Layout>
  );
}

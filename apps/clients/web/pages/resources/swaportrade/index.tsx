import {
  Layout,
  Item,
  Pagination,
  Footer,
  SearchInput,
} from '@ecosystem/components/ui';

import data from '../../../data/resources.dummy.json';
import Link from 'next/link';
import { AdjustmentsIcon, PlusIcon } from '@heroicons/react/solid';

export default function Resources(): JSX.Element {
  return (
    <Layout>
      <div className="inherit lg:fixed z-20">
        <div className="flex md:py-2 mb-2 flex-col md:flex-row bg-white z-20 rounded-md shadow-xl lg:w-full justify-start">
          <h2 className="w-auto xl:w-full text-3xl lg:text-4xl xl:text-5xl text-center md:text-left font-extrabold text-green-700 md:ml-5 md:mt-2 md:mr-20">
            Resources Near You
          </h2>
          <Link href="/resources/swaportrade/item/create">
            <PlusIcon className="h-16 w-16 text-green-700 pt-1 mx-2 cursor-pointer hover:text-green-600 transition duration-500" />
          </Link>
          <AdjustmentsIcon className="h-16 w-16 text-green-700 pt-1 mx-2 cursor-pointer hover:text-green-600 transition duration-500" />
          <SearchInput placeholder="Enter a Resource..." data={[1, 2, 3]} />
          <div />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 grid-flow-row h-auto mt-24">
        {data.map((d, index) => (
          <Link href="/resources/swaportrade/item" key={index}>
            <a>
              <Item
                name={d.name}
                price="Swap"
                rating_style={d.rt_color}
                location={d.location}
                image={d.img}
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

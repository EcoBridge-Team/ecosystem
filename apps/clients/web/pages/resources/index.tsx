import { Layout, Card } from '@ecosystem/components/ui';
import Link from 'next/link';

const bulktrade = '/images/bulktrade.svg';
const swaportrade = '/images/swaportrade.svg';

export const Resources = (): JSX.Element => (
  <Layout>
    <div className="flex md:py-2 flex-col lg:flex-row bg-white z-20 rounded-md w-full mb-10">
      <h2 className="w-auto xl:w-full text-3xl lg:text-4xl xl:text-5xl text-center md:text-left font-extrabold text-green-600 md:ml-3 md:mt-2 md:mr-20">
        Resources
      </h2>
    </div>
    <div>
      <h2 className="w-auto xl:w-full text-lg lg:text-xl xl:text-2xl text-center font-normal text-green-600 m-5 lg:mx-0 lg:my-10">
        Please select the store you want and we`ll separate the products to fit
        better your needs. ♻
      </h2>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row w-full lg:w-11/12 h-full space-y-5 lg:space-y-0 lg:space-x-5">
          <Link href="/resources/marketplace">
            <a>
              <Card title="Marketplace" image={bulktrade} />
            </a>
          </Link>
          <Link href="/resources/swaportrade">
            <a>
              <Card title="Community" image={swaportrade} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
);
export default Resources;

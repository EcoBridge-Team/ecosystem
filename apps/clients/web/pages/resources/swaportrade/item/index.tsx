import { Layout, ShoppingCart } from '@ecosystem/components/ui';
import Link from 'next/link';
import { useStore } from '../../../../hooks/useStore';
//import data from '../../../../data/resources.dummy.json'

/* interface ItemProps {
  name: string
  price: number
  img: string
  description: string
  classification: number
  location: string
  category: string
  rating: number
  rt_color: string
  weight: number
  height: number
  images: string[]
}
 */
export default function ItemResource(/* props: ItemProps */): JSX.Element {
  //const { name, price, img, description, location, classification, category, rating, rt_color, weight, height, images } = props
  const add = useStore((state: any) => state.addToCart);

  const addProductToCart = () => {
    add({ id: 1, name: 'test' });
  };
  return (
    <Layout>
      {/* <h2 className="w-full text-3xl md:text-5xl text-center md:text-left font-extrabold text-green-600 mb-4 md:ml-3">
        Resource Name
      </h2> */}

      <div className="flex md:py-2 mb-2 flex-col md:flex-row md: bg-white lg:w-11/12 justify-start">
        <h2 className="w-full text-3xl  md:text-5xl text-center md:text-left font-extrabold text-green-600 mb-4 md:ml-3">
          Resources Near You
        </h2>
        <ShoppingCart />
      </div>

      <div className="py-6">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Link href="/">Home</Link>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <Link href="/resources">Resources</Link>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <Link href="/resources/marketplace">Marketplace</Link>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <span>300lb Plastic Bottles</span>
          </div>
        </div>

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row mx-4">
            <div className="md:flex-1 px-4">
              <div>
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                    <span className="text-5xl">1</span>
                  </div>

                  <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                    <span className="text-5xl">2</span>
                  </div>

                  <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                    <span className="text-5xl">3</span>
                  </div>

                  <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                    <span className="text-5xl">4</span>
                  </div>
                </div>

                <div className="flex mx-2 mb-4">
                  <template>
                    <div className="flex-1 px-2">
                      <button className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                        <span className="text-2xl"></span>
                      </button>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                300lb Plastic Bottles
              </h2>
              <p className="text-gray-500 text-sm">
                By{' '}
                <a className="text-green-600 hover:underline">Michael Knight</a>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-green-400 mr-1 mt-1">$</span>
                    <span className="font-bold text-green-600 text-3xl">
                      25
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">
                    Save 12%
                  </p>
                  <p className="text-gray-400 text-sm">
                    Inclusive of all Taxes.
                  </p>
                </div>
              </div>

              <p className="text-gray-500">
                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
                exercitationem porro saepe ea harum corrupti vero id laudantium
                enim, libero blanditiis expedita cupiditate a est.
              </p>

              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 trackingWide font-semibold">
                    Qty
                  </div>
                  <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>

                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>

                <button
                  type="button"
                  className="h-14 px-6 py-2 font-semibold rounded-xl bg-green-600 hover:bg-green-500 text-white"
                  onClick={addProductToCart}
                >
                  Add to Cart
                </button>
              </div>
              {/*               <Info
                name={data.name}
                classification={classification}
                category={category}
                description={description}
                weight={weight}
                height={height}
                location={location} /> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

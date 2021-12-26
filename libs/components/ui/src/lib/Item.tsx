import { LocationMarkerIcon } from '@heroicons/react/outline';
//import Image from 'next/image'
/*
const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
 */
interface ItemProps {
  name: string;
  price: string;
  rating_style: string;
  location: string;
  image: string;
}

export const Item = (props: ItemProps): JSX.Element => {
  const { name, price, rating_style, location, image } = props;
  return (
    <div className="w-auto h-60 m-2">
      <button
        className="relative bg-white shadow-md hover:shadow-none focus:shadow-inner focus:bg-white transition duration-500 rounded-lg"
        style={{ width: '100%', height: '100%' }}
      >
        <p className="w-28 md:w-32 xl:w-auto h-9 absolute text-sm md:text-md xl:text-lg text-left font-semibold antialiased sm:subpixel-antialiased top-1 left-2">
          {name}
        </p>
        <p className="w-auto h-6 absolute text-sm md:text-md xl:text-lg font-semibold text-green-600 antialiased sm:subpixel-antialiased top-12 xl:top-7 left-2">
          {price}
        </p>
        <div className="flex items-center justify-center w-full md:w-auto h-auto absolute space-x-1 antialiased sm:subpixel-antialiased z-10 bottom-1.5 md:right-1.5 rounded-tl-md bg-white hover:bg-white p-2">
          <LocationMarkerIcon className="h-4 w-4 text-green-600" />
          <p className="w-auto h-full text-xs font-semibold text-right antialiased sm:subpixel-antialiased text-green-600">
            {location}
          </p>
        </div>
        <div className="inline-flex space-x-1.5 items-center rating justify-end w-6 h-6 absolute right-2 top-2">
          <div className={`w-6 h-full rounded ${rating_style}`} />
        </div>

        <img
          className="w-full h-36 lg:h-44 xl:h-48 absolute p-2 object-cover bottom-8 md:bottom-0 rounded-xl filter brightness-95"
          /* loader={myLoader} */
          src={image}
          alt={name}
          width={200}
          height={100}
        />
      </button>
    </div>
  );
};

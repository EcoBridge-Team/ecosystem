/* import { LocationMarkerIcon } from '@heroicons/react/outline' */

type AppProps = {
  image: string
}

const Organization = ({ image }: AppProps): JSX.Element => {
  return (
    <div className="w-20 h-20 md:w-32 md:h-32 flex items-center shadow-md hover:shadow-none focus:shadow-inner hover:bg-white focus:bg-gray-100 transition duration-500 rounded-full">
      <img
        className="w-20 h-20 md:w-32 md:h-32 rounded-full hover:bg-opacity-5"
        src={image}
      />
    </div>
  )
}

export default Organization

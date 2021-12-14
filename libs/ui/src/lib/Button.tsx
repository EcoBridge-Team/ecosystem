/* import { LocationMarkerIcon } from '@heroicons/react/outline' */

type AppProps = {
  text: string
}

const Button = ({ text }: AppProps): JSX.Element => {
  return (
    <button
      type="button"
      className="transition duration-300 ease-in-out tracking-wide inline-flex justify-center py-3 px-4 xl:px-6 border border-transparent text-sm font-mediumtext-white font-bold text-white bg-green-600 border-green-600 rounded-full shadow-md hover:shadow-none active:shadow-inner hover:bg-green-700 active:bg-green-800 antialiased sm:subpixel-antialiased"
    >
      {text}
    </button>
  )
}

export default Button

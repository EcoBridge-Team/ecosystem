import Link from 'next/link';

export function Heading() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center xl:justify-between">
        <h2 className="font-bold tracking-tight text-gray-800">
          <span className="block antialiased sm:subpixel-antialiased text-3xl sm:text-2xl">
            Ready to dive in?
          </span>
          <span className="block text-green-600 antialiased sm:subpixel-antialiased text-3xl sm:text-4xl">
            Start exchanging your materials today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <Link href="/login">
            <button
              type="button"
              className="inline-flex items-center justify-center w-28 h-28 border border-transparent text-sm font-bold rounded-full text-white bg-green-600 hover:bg-green-700 antialiased shadow-md ml-4 hover:shadow-none active:shadow-inner active:bg-green-800 transition duration-300 ease-in-out"
            >
              GET STARTED
            </button>
          </Link>
          <Link href="/about-us">
            <button
              type="button"
              className="inline-flex items-center justify-center w-20 h-20 border border-transparent text-sm font-bold rounded-full text-green-600 bg-white hover:bg-white antialiased shadow-md ml-4 hover:shadow-none active:shadow-inner active:bg-gray-100 transition duration-300 ease-in-out"
            >
              LEARN MORE
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

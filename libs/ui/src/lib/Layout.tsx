import Head from 'next/head'
import { useCallback, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from './Logo'
import { useStore } from '../hooks/useStore'
import { IAppState } from '../types/IAppState'

const authSelector = (state: IAppState) => state.isAuthenticated

const userSelector = (state: IAppState) => state.user

interface LayoutProps {
  children: any
  background?: string
}

const Layout = (props: LayoutProps): JSX.Element => {
  // Hook de routing
  const router = useRouter()
  const { children } = props
  const user = useStore(userSelector)

  const sidebarRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const btnClickHandler = useCallback(() => {
    sidebarRef.current.classList.toggle('-translate-x-full')
  }, [])

  const isAuthenticated = useStore(authSelector)

  return (
    <>
      <Head>
        <title>EcoBridge</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossOrigin="anonymous"
        />
        <script src="js/watson.js"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
      </Head>

      {router.pathname === '/login' || router.pathname === '/register' ? (
        <div className="bg-login bg-cover bg-no-repeat min-h-screen flex flex-col justify-start p-10 mb-40">
          {children}
        </div>
      ) : (
        <div className="relative min-h-screen xl:flex overflow-x-hidden">
          {/*   mobile menu bar   */}
          <div className="bg-white text-green-600 fixed z-10 shadow flex mt-0 justify-between w-full xl:hidden">
            {/*   logo   */}
            <div className="px-20 py-2 flex self-center">
              <Link href="/">
                <a>
                  <Logo height="h-12 md:h-14" />
                </a>
              </Link>
            </div>

            {/*   mobile menu button   */}
            <button
              className="mobile-menu-button p-4 focus:outline-none focus:bg-green-700 focus:text-white"
              ref={btnRef}
              onClick={btnClickHandler}
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* sidebar  */}
          <div
            className="sidebar z-50 bg-white text-green-600 w-36 2xl:w-40 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform -translate-x-full xl:translate-x-0 transition duration-200 ease-in-out md:fixed md:z-10 list-none"
            ref={sidebarRef}
          >
            {/*   logo   */}
            <Link href="/">
              <a href="#" className="text-white flex px-2">
                <Logo height="h-8 2xl:h-12" />
              </a>
            </Link>
            {/*   nav   */}
            <nav>
              {isAuthenticated && (
                <li
                  className={
                    router.pathname === '/profile'
                      ? 'text-green-600 text-md font-bold tracking-widest ml-2 p-2 md:mb-2 antialiased'
                      : 'text-green-600 text-md font-bold p-2 md:mb-2'
                  }
                >
                  <Link href="/profile">
                    <a className="flex">
                      <img
                        className="h-7 w-7 rounded-full mr-3"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkjktNk_waKZ6A064JikKQRYLxoKPNIUR_g&usqp=CAU"
                        alt="profile_pic"
                      />
                      <span className="uppercase">{user.username}</span>
                    </a>
                  </Link>
                </li>
              )}
              <li
                className={
                  router.pathname === '/resources'
                    ? 'text-green-600 text-md font-bold tracking-widest ml-2 p-2 md:mb-2 antialiased'
                    : 'text-green-600 text-md font-bold p-2 md:mb-2'
                }
              >
                <Link href="/resources">
                  <a className="block">RESOURCES</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === '/companies'
                    ? 'text-green-600 text-md font-bold tracking-widest ml-2 p-2 md:mb-2 antialiased'
                    : 'text-green-600 text-md font-bold p-2 md:mb-2'
                }
              >
                <Link href="/companies">
                  <a className="block">COMPANIES</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === '/learn'
                    ? 'text-green-600 text-md font-bold tracking-widest ml-2 p-2 md:mb-2 antialiased'
                    : 'text-green-600 text-md font-bold p-2 md:mb-2'
                }
              >
                <Link href="/learn">
                  <a className="block">LEARN</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === '/events'
                    ? 'text-green-600 text-md font-bold tracking-widest ml-2 p-2 md:mb-2 antialiased'
                    : 'text-green-600 text-md font-bold p-2 md:mb-2'
                }
              >
                <Link href="/events">
                  <a className="block">EVENTS</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === '/about-us'
                    ? 'text-green-600 text-md font-bold tracking-widest ml-2 p-2 md:mb-2 antialiased'
                    : 'text-green-600 text-md font-bold p-2 md:mb-2'
                }
              >
                <Link href="/about-us">
                  <a className="block">ABOUT US</a>
                </Link>
              </li>
              <div className="space-y-px" />
              {isAuthenticated ? (
                <li className="text-green-600 text-md font-bold p-2 md:mb-2 md:bottom-1 md:fixed">
                  <Link href="/logout">
                    <a className="block">LOGOUT</a>
                  </Link>
                </li>
              ) : (
                <li className="text-green-600 text-md font-bold p-2 md:mb-2 md:bottom-1 md:fixed">
                  <Link href="/login">
                    <a className="block">LOGIN</a>
                  </Link>
                </li>
              )}
            </nav>
          </div>

          {/*  content */}
          <div
            className={`xl:w-11/12 pt-20 xl:pt-0 xl:ml-36 2xl:ml-40 ${props.background}`}
          >
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Layout

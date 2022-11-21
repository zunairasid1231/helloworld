import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react';
import SearchBar from '../SearchBar/SearchBar';
import whiteLogo from '../../public/images/logo_white.svg';
import shoppingCartIcon from '../../public/images/shopping-cart.svg';
export const Navbar = (props: any) => {
  const session = useSession();
  const [clicked, setClicked] = useState(false);
  const [optionsClicked, setOptionsClicked] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);
  const router = useRouter();

  const loggedInContent = (
    <>
      <a
        href='/profile'
        className='flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium font-unica no-underline text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700'
      >
        PROFILE
      </a>
      <li
        onClick={(e) => {
          e.preventDefault();
          localStorage.removeItem('cart');
          signOut({ callbackUrl: '/' });
        }}
        className='flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium font-unica text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 px-4 md:px-5 md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700'
      >
        SIGN OUT
      </li>
      <a
        href='#'
        className='text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
      ></a>

      <div className=''>
        <div
          onClick={() => setCartClicked(!cartClicked)}
          className='text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300  rounded-lg  px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
        >
          <Image
            src={shoppingCartIcon}
            width={32}
            height={32}
            alt='Icon'
            className='rounded-full'
          />
        </div>
      </div>

      <div
        id='drawer-example'
        className='flex-col drawer fixed right-0 top-40 z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800'
        tab-index={-1}
        aria-labelledby='drawer-label'
      >
        <style jsx>{`
          .drawer {
            display: ${cartClicked ? 'flex' : 'none'};
          }
        `}</style>
        <>
          <button
            onClick={() => setCartClicked(false)}
            type='button'
            data-drawer-dismiss='drawer-example'
            aria-controls='drawer-example'
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
          >
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clip-rule='evenodd'
              ></path>
            </svg>
            <span className='sr-only'>Close menu</span>
          </button>

          {props.cart &&
            Object.keys(props.cart).map((item) => {
              return (
                <div key={item}>
                  <li className='flex  py-6'>
                    <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                      <img
                        src='https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg'
                        alt='Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>

                    <div className='ml-4 flex flex-1 flex-col'>
                      <div>
                        <div className='flex justify-between text-base font-medium text-gray-900'>
                          <h3>
                            <p>{props.cart[item].name}</p>
                          </h3>
                          <p className='ml-4'>{props.cart[item].price}</p>
                        </div>
                        <p className='mt-1 text-sm text-gray-500'>Blue</p>
                      </div>
                      <div className='flex flex-1 items-end justify-between text-sm'>
                        <p className='text-gray-500'>
                          {props.cart[item].quantity}
                        </p>

                        <div className='flex'>
                          <button
                            onClick={() => props.removeFromCart(item)}
                            type='button'
                            className='font-medium text-indigo-600 hover:text-indigo-500'
                          >
                            Remove
                          </button>
                        </div>
                        <div className='flex'>
                          <button
                            onClick={() =>
                              props.addToCart(item, '', 1, 249, 'usman')
                            }
                            type='button'
                            className='font-medium text-indigo-600 hover:text-indigo-500'
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <br />
                </div>
              );
            })}
          {console.log(props)}
          <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
            <div className='flex justify-between text-base font-medium text-gray-900'>
              <p>Subtotal</p>
              <p>{props.subTotal}</p>
            </div>
            <p className='mt-0.5 text-sm text-gray-500'>
              Shipping and taxes calculated at checkout.
            </p>
            <div className='mt-6'>
              <Link
                href='/checkout'
                className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
              >
                Checkout
              </Link>
            </div>
            <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
              <p>
                or
                <Link href='/product'>
                  <button
                    type='button'
                    className='font-medium text-indigo-600 hover:text-indigo-500'
                  >
                    Continue Shopping
                    <span aria-hidden='true'> &rarr;</span>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </>
      </div>
    </>

    /* <ul className='navbar-nav'>
      <li className='nav-item'>
        <a className='nav-link' href='#'>
          Profile
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#'>
          Settings
        </a>
      </li>
      <li
        className='nav-item'
        onClick={(e) => {
          e.preventDefault();
          console.log('signing in');
          signOut({ callbackUrl: '/' });
        }}
      >
        <a className='nav-link' href='#'>
          Logout
        </a>
      </li>

      <li className='nav-item'>
        <a className='nav-link' href='#'>
          <Image src={shoppingCartIcon} width={24} height={24} alt="Icon"/>
        </a>
      </li>
    </ul> */
  );

  const notLoggedInContent = (
    <>
      <a
        href='#'
        onClick={(e) => {
          e.preventDefault();
          signIn('keycloak', { callbackUrl: '/' });
        }}
        className='text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
      >
        Login
      </a>
      <a
        href='#'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      >
        Sign up
      </a>
    </>
    /*  <ul className='navbar-nav'>
      <li
        className='nav-item'
        onClick={(e) => {
          e.preventDefault();
          signIn('keycloak', { callbackUrl: '/' });
        }}
      >
        <a className='nav-link' href='#'>
          Login
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href={process.env.REGISTER_USER}>
          Register
        </a>
      </li>

      <li className='nav-item'>
        <a className='nav-link' href='#'>
          <Image src={shoppingCartIcon} width={24} height={24} alt="Icon"/>
        </a>
      </li>
    </ul> */
  );

  return (
    <nav className='  bg-black sticky  top-0 z-10 backdrop-filter backdrop-blur-lg  border-b border-gray-200 px-2 md:px-4 py-0.5  '>
      <div className='bg-black  flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl'>
        <div className='flex h-10 items-center md:order-2'>
          {session.data ? <>{loggedInContent}</> : <>{notLoggedInContent}</>}
          <button
            data-collapse-toggle='mega-menu-icons'
            type='button'
            className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='mega-menu-icons'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              aria-hidden='true'
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <div
          id='mega-menu-icons'
          className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
        >
          <a href='/' className='flex items-center'>
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              <Image src={whiteLogo} width={176} height={30} alt='logo' />
            </span>
          </a>
          <ul className='flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0'>
            <li>
              <button
                onClick={() => setClicked(!clicked)}
                id='mega-menu-icons-dropdown-button'
                data-dropdown-toggle='mega-menu-icons-dropdown'
                className='flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium font-unica text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:pl-8 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Languages
                <svg
                  aria-hidden='true'
                  className='ml-1 w-5 h-5 md:w-4 md:h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
              <div
                id='mega-menu-icons-dropdown'
                className='dropdown-menu  grid absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700'
              >
                <style jsx>{`
                  .dropdown-menu {
                    display: ${clicked ? 'flex' : 'none'};
                  }
                `}</style>
                <div className='p-4 pb-0 text-gray-900 md:pb-4 dark:text-white'>
                  <ul
                    className='space-y-4'
                    aria-labelledby='mega-menu-icons-dropdown-button'
                  >
                    {router.locales?.map((locale) => {
                      return (
                        <>
                          <li onClick={() => setClicked(!clicked)}>
                            <Link
                              href={router.asPath}
                              locale={locale}
                              className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'
                            >
                              {locale}
                              <span className='sr-only'>French</span>
                              <svg
                                className='mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                                aria-hidden='true'
                                focusable='false'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              French
                            </Link>
                          </li>
                        </>
                      );
                    })}

                    {/* <li>
                      <a
                        href='#'
                        className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'
                      >
                        <span className='sr-only'>Spanish</span>
                        <svg
                          className='mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                        Spanish
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'
                      >
                        <span className='sr-only'>English</span>
                        <svg
                          className='mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z'></path>
                        </svg>
                        English
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        href='#'
                        className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'
                      >
                        <span className='sr-only'>Pro Version</span>
                        <svg
                          className='mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                        Pro Version
                      </a>
                    </li> */}
                  </ul>
                </div>
                {/* <div className='p-4 pb-0 text-gray-900 md:pb-4 dark:text-white'>
                  <ul className='space-y-4'>
                    <li>
                      <a
                        href='#'
                        className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'
                      >
                        <span className='sr-only'>Blog</span>
                        <svg
                          className='mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                            clip-rule='evenodd'
                          ></path>
                          <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
                        </svg>
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'
                      >
                        <span className='sr-only'>Newsletter</span>
                        <svg
                          className='mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
                        </svg>
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'
                      >
                        <span className='sr-only'>Playground</span>
                        <svg
                          className='mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z'></path>
                        </svg>
                        Playground
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'
                      >
                        <span className='sr-only'>License</span>
                        <svg
                          className='mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z'></path>
                        </svg>
                        License
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='p-4 text-gray-900 dark:text-white'>
                  <ul className='space-y-4'>
                    <li>
                      <a
                        href='#'
                        className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'
                      >
                        <span className='sr-only'>Contact Us</span>
                        <svg
                          className='mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z'></path>
                        </svg>
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'
                      >
                        <span className='sr-only'>Support Center</span>
                        <svg
                          className='mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                        Support Center
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'
                      >
                        <span className='sr-only'>Terms</span>
                        <svg
                          className='mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'></path>
                          <path
                            fill-rule='evenodd'
                            d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                        Terms
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </li>

            <SearchBar
              addToCart={props.addToCart}
              searchHandler={(searchItem: any) =>
                props.searchHandler(searchItem)
              }
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

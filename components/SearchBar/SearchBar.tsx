import { useState } from 'react';
import Link from 'next/link';

const SearchBar = (props: any) => {
  const [searchItem, setSearchItem] = useState();
  const onSearchHandler = (e: any) => {
    setSearchItem(e.target.value);
  };

  return (
    <div>
      <div>
        <div className='flex items-center justify-center '>
          <div className='flex border-1 border-gray-100  rounded-full '>
            <input
              onChange={(e) => onSearchHandler(e)}
              type='text'
              className='px-4 py-2  w-96 border-none outline-none rounded-l-full'
              placeholder='Search...'
            />
            <Link href='/search'>
              <button
                onClick={(e) => {
                  props.searchHandler(searchItem);
                  e.target = '';
                }}
                className='flex bg-white items-center justify-center px-4 border-l rounded-full rounded-r-full rounded-l-none'
              >
                <svg
                  className='w-6 h-10 text-gray-600'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

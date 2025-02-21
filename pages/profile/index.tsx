import Image from 'next/image';
import { useSession } from 'next-auth/react';
import defaultImage from '../../public/images/default-image.jpg';
import Link from 'next/link';

const Profile = () => {
  const session = useSession();
  return (
    <section className='pt-16 bg-blueGray-50'>
      <div className='w-full lg:w-4/12 px-4 mx-auto'>
        <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16'>
          <div className='px-6'>
            <div className='flex flex-wrap justify-center'>
              <div className='w-full px-4 flex justify-center'>
                <div className='relative'>
                  <Image
                    alt='...'
                    src={defaultImage}
                    className='shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px'
                  />
                </div>
              </div>
              <div className='w-full px-4 text-center mt-20'>
                <div className='flex justify-center py-4 lg:pt-4 pt-8'>
                  <div className='mr-4 p-3 text-center'>
                    <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                      22
                    </span>
                    <span className='text-sm text-blueGray-400'>Products</span>
                  </div>
                  <div className='mr-4 p-3 text-center'>
                    <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                      $100,000
                    </span>
                    <span className='text-sm text-blueGray-400'>Earnings</span>
                  </div>
                  <div className='lg:mr-4 p-3 text-center'>
                    <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                      4+
                    </span>
                    <span className='text-sm text-blueGray-400'>Rating</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center mt-12'>
              <h3 className='text-xl font-semibold leading-normal text-blueGray-700 mb-2'>
                {session?.data?.user?.name}
              </h3>
              <div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
                <i className='fas fa-map-marker-alt mr-2 text-lg text-blueGray-400'></i>
                Los Angeles, California
              </div>
              <div className='mb-2 text-blueGray-600 mt-10'>
                <i className='fas fa-briefcase mr-2 text-lg text-blueGray-400'></i>
                Solution Manager - Creative Tim Officer
              </div>
              <div className='mb-2 text-blueGray-600'>
                <i className='fas fa-university mr-2 text-lg text-blueGray-400'></i>
                University of Computer Science
              </div>
            </div>
            <div className='mt-10 py-10 border-t border-blueGray-200 text-center'>
              <div className='flex flex-wrap justify-center'>
                <div className='w-full lg:w-9/12 px-4'>
                  <p className='mb-4 text-lg leading-relaxed text-blueGray-700'>
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  <a
                    href='javascript:void(0);'
                    className='font-normal text-pink-500'
                  >
                    Show more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href='product/CreateProduct'>
        <button>Add Product</button>
      </Link>
    </section>
  );
};

export default Profile;

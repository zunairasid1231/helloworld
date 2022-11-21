import Image from 'next/image';
import { Formik, Field } from 'formik';
import { checkoutSchema } from '../../validations/checkoutSchema';
import defaultImage from '../../public/images/default-image.jpg';
import InputField from '../../components/Fields/InputField';
const Checkout = ({ cart, subTotal }: any) => {
  return (
    <Formik
      onSubmit={async (data: any) => {
        console.log(data);
        try {
          // const response = await CategoryAPI.createCategory(data);
          // setErrors('');
        } catch (error: any) {
          // setErrors(error.message);
        }
      }}
      validationSchema={checkoutSchema}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        postalCode: 0,
      }}
    >
      {({ handleSubmit }) => (
        <div>
          <div className='mt-20'>
            <h1 className='flex items-center justify-center font-bold text-black text-md lg:text-3xl'>
              Checkout Page
            </h1>
          </div>
          <div className='container p-12 mx-auto'>
            <div className='flex flex-col w-full px-0 mx-auto md:flex-row'>
              <div className='flex flex-col md:w-full'>
                <h2 className='mb-4 font-bold md:text-xl text-heading '>
                  Shipping Address
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className='justify-center w-full mx-auto'
                  method='post'
                >
                  <div className=''>
                    <div className='space-x-0 lg:flex lg:space-x-4'>
                      <div className='w-full lg:w-1/2'>
                        <label
                          htmlFor='firstName'
                          className='block mb-3 text-sm font-semibold text-gray-500'
                        >
                          First Name
                        </label>
                        <Field
                          component={InputField}
                          name='firstName'
                          type='text'
                          placeholder='First Name'
                          className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                        />
                      </div>
                      <div className='w-full lg:w-1/2 '>
                        <label
                          htmlFor='firstName'
                          className='block mb-3 text-sm font-semibold text-gray-500'
                        >
                          Last Name
                        </label>
                        <Field
                          component={InputField}
                          name='lastName'
                          type='text'
                          placeholder='Last Name'
                          className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                        />
                      </div>
                    </div>
                    <div className='mt-4'>
                      <div className='w-full'>
                        <label
                          htmlFor='Email'
                          className='block mb-3 text-sm font-semibold text-gray-500'
                        >
                          Email
                        </label>
                        <Field
                          component={InputField}
                          name='email'
                          type='text'
                          placeholder='Email'
                          className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                        />
                      </div>
                    </div>
                    <div className='mt-4'>
                      <div className='w-full'>
                        <label
                          htmlFor='Address'
                          className='block mb-3 text-sm font-semibold text-gray-500'
                        >
                          Address
                        </label>
                        <Field
                          component={InputField}
                          className='w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                          name='address'
                          cols={20}
                          rows={4}
                          placeholder='Address'
                        />
                      </div>
                    </div>
                    <div className='space-x-0 lg:flex lg:space-x-4'>
                      <div className='w-full lg:w-1/2'>
                        <label
                          htmlFor='city'
                          className='block mb-3 text-sm font-semibold text-gray-500'
                        >
                          City
                        </label>
                        <Field
                          component={InputField}
                          name='city'
                          type='text'
                          placeholder='City'
                          className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                        />
                      </div>
                      <div className='w-full lg:w-1/2 '>
                        <label
                          htmlFor='postcode'
                          className='block mb-3 text-sm font-semibold text-gray-500'
                        >
                          Postcode
                        </label>
                        <Field
                          component={InputField}
                          name='postalCode'
                          type='text'
                          placeholder='Post Code'
                          className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                        />
                      </div>
                    </div>
                    <div className='flex items-center mt-4'>
                      <label className='flex items-center text-sm group text-heading'>
                        <input
                          type='checkbox'
                          className='w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1'
                        />
                        <span className='ml-2'>
                          Save this information for next time
                        </span>
                      </label>
                    </div>
                    <div className='relative pt-3 xl:pt-6'>
                      <label
                        htmlFor='note'
                        className='block mb-3 text-sm font-semibold text-gray-500'
                      >
                        {' '}
                        Notes (Optional)
                      </label>
                      <textarea
                        name='note'
                        className='flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600'
                        rows={4}
                        placeholder='Notes htmlFor delivery'
                      ></textarea>
                    </div>
                    <div className='mt-4'>
                      <button
                        type='submit'
                        className='w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900'
                      >
                        Process
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className='flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5'>
                <div className='pt-12 md:pt-0 2xl:ps-4'>
                  <h2 className='text-xl font-bold'>Order Summary</h2>
                  <div className='mt-8'>
                    <div className='flex flex-col space-y-4'>
                      {Object.keys(cart).map((item) => {
                        return (
                          <div key={item} className='flex space-x-4'>
                            <div>
                              <Image
                                src={defaultImage}
                                alt='image'
                                className='w-60'
                              />
                            </div>
                            <div>
                              <h2 className='text-xl font-bold'>
                                {cart[item].name}
                              </h2>
                              <p className='text-sm'>
                                Lorem ipsum dolor sit amet, tet
                              </p>
                              <span className='text-red-600'>Price</span>
                              {cart[item].price}
                            </div>
                            <div>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-6 h-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                              >
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  stroke-width='2'
                                  d='M6 18L18 6M6 6l12 12'
                                />
                              </svg>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className='flex p-4 mt-4'>
                    <h2 className='text-xl font-bold'>ITEMS 2</h2>
                  </div>
                  <div className='flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0'>
                    Subtotal<span className='ml-2'>{subTotal}</span>
                  </div>
                  <div className='flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0'>
                    Shipping Tax<span className='ml-2'>0</span>
                  </div>
                  <div className='flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0'>
                    Total<span className='ml-2'>{subTotal}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Checkout;

import { Formik, Field } from 'formik';
import { useState } from 'react';

import { Category } from '../../model/category';
import CategoryAPI from '../../api/category/category';
import InputField from '../../components/Fields/InputField';
import { categorySchema } from '../../validations/categorySchema';
import { Navbar } from '../../components/Navbar/Navbar';

const CreateCategory = ({ category }: { category: Category }) => {
  const [errors, setErrors] = useState<any>();
  return (
    <>
      <Formik
        onSubmit={async (data: Category) => {
          try {
            const response = await CategoryAPI.createCategory(data);
            setErrors('');
          } catch (error: any) {
            setErrors(error.message);
          }
        }}
        validationSchema={categorySchema}
        initialValues={{
          name: '',
          categoryId: 0,
          products: [],
          updatedAt: 0,
          createdAt: 0,
          createdBy: '',
          image: '',
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className='grid gap-6 mb-6 md:grid-cols-1 p-4'>
              <div className='mb-6'>
                <label
                  htmlFor='first_name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Category Name
                </label>
                <Field
                  component={InputField}
                  type='name'
                  name='name'
                  placeholder='Enter name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
              </div>
              <div className='mb-6'>
                <div className='flex items-center justify-start w-full'>
                  <label
                    htmlFor='dropzone-file'
                    className='flex flex-col items-center justify-center w-1/2 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                  >
                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                      <svg
                        aria-hidden='true'
                        className='w-10 h-10 mb-3 text-gray-400'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                        ></path>
                      </svg>
                      <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                        <span className='font-semibold'>Click to upload</span>{' '}
                        or drag and drop
                      </p>
                      <p className='text-xs text-gray-500 dark:text-gray-400'>
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <Field
                      component={InputField}
                      type='file'
                      name='image'
                      placeholder='Enter name'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                  </label>
                </div>
              </div>
              <button type='submit'> Create Category </button>
              {errors}
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default CreateCategory;

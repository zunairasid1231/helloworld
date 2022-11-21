import { useRouter } from 'next/router';
import { useState } from 'react';

import { Category } from '../../../model/category';
import { Product } from '../../../model/product';
import Image from 'next/image';
import defaultImage from '../../../public/images/default-image.jpg';

const UpdateCategory = ({ category }: { category: Category }) => {
  const [error, setError] = useState<any>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { id } = router.query;
  console.log('carrrrrr', category);

  return (
    <>
      <>
        {console.log(category.name, 'sas')}
        <p className='text-gray-500 text-xs tracking-widest title-font mb-1'>
          {' '}
          {category.name}{' '}
        </p>

        {category.image && (
          <Image
            src={category.image}
            alt='Category Image'
            width={50}
            height={50}
          />
        )}

        {category.products &&
          category.products.map((product: Product) => {
            return (
              <>
                <div>
                  <section className='text-gray-600 body-font'>
                    <div className='container px-5 py-24 mx-auto'>
                      <div className='flexflex-wrap -m-4'></div>

                      <div
                        key={product.productId}
                        className='lg:w-1/4 md:w-1/2 p-4 w-full'
                      ></div>

                      {product.image ? (
                        <Image
                          className='object-cover object-center w-1/4 h-full block'
                          src={category.image}
                          alt='Product Image'
                        />
                      ) : (
                        <Image
                          className='object-cover object-center w-1/4 h-full block'
                          src={defaultImage}
                          alt='Product Image'
                        />
                      )}
                      <p className='text-gray-900 title-font text-lg font-medium'>
                        {product.name}
                      </p>
                      <p className='text-gray-900 title-font text-lg font-medium'>
                        {product.price}
                      </p>
                      <p className='text-gray-900 title-font text-lg font-medium'>
                        {product.rating}
                      </p>
                      <p className='text-gray-900 title-font text-lg font-medium'>
                        {product.description}
                      </p>
                    </div>
                  </section>
                </div>
              </>
            );
          })}

        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8'
          type='button'
          //  onClick={() => handleDeleteCategory(category.category_id)}
        >
          Delete this Category
        </button>

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4'>
          Update this Category
        </button>
      </>
    </>
  );
};

export const getStaticProps = async (context: any) => {
  const id = parseInt(context.params.id);
  console.log(typeof id);
  try {
    const response = await fetch(`http://localhost:8000/api/category/get/0/1`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'text/plain',
      },
    });
    console.log(response);
    const category: Category[] = await response.json();
    console.log(category);
    return {
      props: {
        category: category[0],
      },
    };
  } catch (error: any) {
    return {
      props: { errCode: 500, message: error },
    };
  }
};

export const getStaticPaths = async () => {
  try {
    const response = await fetch(
      `http:/localhost:8000/api/category/get/0/1000`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'text/plain',
        },
      },
    );

    const categories = await response.json();
    console.log('cat', categories);
    const ids = categories.map((category: any) => category.categoryId);
    console.log('ids', ids);
    const paths = ids.map((id: number) => ({
      params: {
        id: id.toString(),
      },
    }));
    console.log('paths', paths);
    return {
      paths,
      fallback: false,
    };
  } catch (error: any) {
    return {
      props: { errCode: 500, message: error },
    };
  }
};

export default UpdateCategory;

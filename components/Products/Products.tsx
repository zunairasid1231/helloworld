import Image from 'next/image';
import Link from 'next/link';

const Products = (props: any) => {
  console.log('PRODUCTS', props);

  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {props.products ? (
              props.products.map((product: any) => {
                return (
                  <div
                    key={product.productId}
                    className='lg:w-1/4 md:w-1/2 p-4 w-full'
                  >
                    <a className='block relative h-48 rounded overflow-hidden'>
                      <Image
                        alt='ecommerce'
                        className='object-cover object-center w-full h-full block'
                        src='https://dummyimage.com/420x260'
                        width={200}
                        height={200}
                      />
                    </a>
                    <div className='mt-4'>
                      <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                        CATEGORY
                      </h3>
                      <h2 className='text-gray-900 title-font text-lg font-medium'>
                        {product.name}
                      </h2>
                      <p className='mt-1'>{product.price}</p>
                    </div>
                    <button
                      onClick={() =>
                        props.addToCart(
                          product.productId,
                          '',
                          1,
                          product.price,
                          product.name,
                        )
                      }
                      className='flex  mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                    >
                      Add to Cart
                    </button>
                  </div>
                );
              })
            ) : (
              <p>No Products found</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

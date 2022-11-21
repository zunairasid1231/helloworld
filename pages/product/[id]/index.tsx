import { useRouter } from 'next/router';
import { Field, Formik } from 'formik';
import { useState } from 'react';
import Error from 'next/error';
import { Product } from '../../../model/product';
import { Loader } from '../../../components/Loader/Loader';
import ProductAPI from '../../../api/product/product';
import { productSchema } from '../../../validations/productSchema';
import InputField from '../../../components/Fields/InputField';

const UpdateProduct = (
  { product }: { product: Product },
  searchValue: string,
) => {
  console.log('product', searchValue);
  const [error, setError] = useState<any>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Formik
          onSubmit={async (data: Product) => {
            try {
              const productId = parseInt(id as string);
              setLoading(true);
              const response = await ProductAPI.updateProduct(productId, data);
              setLoading(false);
              if (!response) setError('Server did not respond');
            } catch (error: any) {
              setError(error);
            }
          }}
          validationSchema={productSchema}
          initialValues={{
            productId: product.productId,
            categoryId: product.categoryId,
            name: product.name,
            price: product.price,
            rating: product.rating,
            description: product.description,
            image: product.image,
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <p> Product Name: </p>
              <Field
                componenet={InputField}
                type='name'
                name='name'
                placeholder='Enter name'
                required
              />

              <p> Product Price: </p>
              <Field
                componenet={InputField}
                type='text'
                name='price'
                placeholder='Enter price'
              />

              <p> Product Rating: </p>
              <Field
                componenet={InputField}
                type='text'
                name='rating'
                placeholder='Enter Rating'
              />

              <p> Product Image: </p>
              <Field
                componenet={InputField}
                type='text'
                name='image'
                placeholder='Enter description'
              />

              <p> Product Image: </p>
              <Field
                componenet={InputField}
                type='file'
                name='image'
                placeholder='Upload image'
              />
              <button type='submit'> Update Product </button>
              {error}
            </form>
          )}
        </Formik>
      )}
    </>
  );
};

export const getStaticProps = async (context: any) => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/product/637806a066cca8f067080c10/get/0/1`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'text/plain',
        },
      },
    );

    const product: Product = await response.json();

    return {
      props: {
        product: product,
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
      `http:/localhost:8000/api/product/637806a066cca8f067080c10/get/0/1000`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'text/plain',
        },
      },
    );

    const products = await response.json();

    const ids = products.map((product: any) => product.productId);

    const paths = ids.map((id: any) => {
      return {
        params: { id: id.toString() },
      };
    });

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
export default UpdateProduct;

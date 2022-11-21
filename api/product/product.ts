import { Product } from '../../model/product';
import { fullUrl } from '../api';

const productRoute = '/api/product'; // might have to change once the api is tested

const ProductAPI = Object.freeze({
  createProduct: (product: Product) => createProduct(product),
  deleteProduct: (id: number) => deleteCategory(id),
  updateProduct: (id: number, product: Product) => updateProduct(id, product),
  getProduct: (id: number) => getProduct(id),
  getAllProducts: (id: number) => getAllProducts(id),
});

const createProduct = (product: Product) =>
  fetch(`${fullUrl}${productRoute}/createProduct`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

const updateProduct = (id: number, product: Product) =>
  fetch(`${fullUrl}${productRoute}/updateProduct/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ product: product, id: id }),
  });

const deleteCategory = (id: number) =>
  fetch(`${fullUrl}${productRoute}/deleteProduct/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify({ id }),
  });

const getAllProducts = (categoryId: number) =>
  fetch(`${fullUrl}${productRoute}/${categoryId}/get/0/20`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'text/plain',
    },
  });

const getProduct = (categoryId: number) =>
  fetch(`${fullUrl}${productRoute}/${categoryId}/get/0/20`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'text/plain',
    },
  });

export default ProductAPI;

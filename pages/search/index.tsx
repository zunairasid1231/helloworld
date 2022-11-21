import Products from '../../components/Products/Products';
import { Product } from '../../model/product';

const Search = (props: any) => {
  return (
    <>
      <Products addToCart={props.addToCart} products={props.searchResults} />
    </>
  );
};

export default Search;

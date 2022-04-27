import ProductItem from './ProductItem';

import { useStore } from '../../hooks-store/store';

const ProductList = () => {
  const state = useStore()[0];

  return state.products.map((product) => {
    return <ProductItem key={product.id} id={product.id} title={product.title} content={product.content} isFavourite={product.isFavourite} />;
  });
};

export default ProductList;

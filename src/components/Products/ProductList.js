import { useContext } from 'react';
import ProductItem from './ProductItem';

import { ProductsContext } from '../../context/products-context';

const ProductList = () => {
  const productsList = useContext(ProductsContext).products;

  return productsList.map((product) => {
    return <ProductItem key={product.id} id={product.id} title={product.title} content={product.content} isFavourite={product.isFavourite} />;
  });
};

export default ProductList;

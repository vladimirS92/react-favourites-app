import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const ProductList = () => {
  const { products } = useSelector((state) => state.product);

  return products.map((product) => {
    return <ProductItem key={product.id} id={product.id} title={product.title} content={product.content} isFavourite={product.isFavourite} />;
  });
};

export default ProductList;

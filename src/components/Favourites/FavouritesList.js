import { useContext } from 'react';
import { ProductsContext } from '../../context/products-context';
import FavouritesItem from './FavouritesItem';

const FavouritesList = () => {
  const favouritesList = useContext(ProductsContext).products.filter((product) => product.isFavourite);

  return favouritesList.map((favourite) => {
    return <FavouritesItem key={favourite.id} id={favourite.id} title={favourite.title} content={favourite.content} isFavourite={favourite.isFavourite} />;
  });
};

export default FavouritesList;

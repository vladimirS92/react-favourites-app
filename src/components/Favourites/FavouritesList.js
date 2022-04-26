import { useSelector } from 'react-redux';
import FavouritesItem from './FavouritesItem';

const FavouritesList = () => {
  const favouritesList = useSelector((state) => state.product.products.filter((product) => product.isFavourite));

  return favouritesList.map((favourite) => {
    return <FavouritesItem key={favourite.id} id={favourite.id} title={favourite.title} content={favourite.content} isFavourite={favourite.isFavourite} />;
  });
};

export default FavouritesList;

import FavouritesItem from './FavouritesItem';

import { useStore } from '../../hooks-store/store';

const FavouritesList = () => {
  const state = useStore()[0];
  const favouritesList = state.products.filter((product) => product.isFavourite);

  return favouritesList.map((favourite) => {
    return <FavouritesItem key={favourite.id} id={favourite.id} title={favourite.title} content={favourite.content} isFavourite={favourite.isFavourite} />;
  });
};

export default FavouritesList;

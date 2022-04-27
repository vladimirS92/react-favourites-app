import { useContext } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ProductsContext } from '../../context/products-context';

const ProductItem = (props) => {
  const toggleFav = useContext(ProductsContext).toggleFav;

  const switchFavouriteHandler = () => {
    toggleFav(props.id);
  };

  const footer = (
    <span>
      <Button
        label={props.isFavourite ? 'Unfavourite' : 'Favourite'}
        icon='pi pi-heart'
        className={props.isFavourite ? 'p-button-primary' : 'p-button-outlined'}
        onClick={switchFavouriteHandler}
      />
    </span>
  );

  return (
    <Card className='w-full mt-3' title={props.title} footer={footer}>
      <p>{props.content}</p>
    </Card>
  );
};

export default ProductItem;

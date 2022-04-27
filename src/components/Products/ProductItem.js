import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import { useStore } from '../../hooks-store/store';

const ProductItem = React.memo((props) => {
  console.log('RENDERING');
  const dispatch = useStore(false)[1];

  const switchFavouriteHandler = () => {
    dispatch('TOGGLE_FAVOURITE', props.id);
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
});

export default ProductItem;

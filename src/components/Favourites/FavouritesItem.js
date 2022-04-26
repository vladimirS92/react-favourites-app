import { Card } from 'primereact/card';

const FavouritesItem = (props) => {
  return (
    <Card className='w-full mt-3' title={props.title}>
      <p>{props.content}</p>
    </Card>
  );
};

export default FavouritesItem;

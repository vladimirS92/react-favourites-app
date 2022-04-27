/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

export default (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: 'p1',
      title: 'Title 1',
      content: 'content 1',
      isFavourite: false,
    },
    {
      id: 'p2',
      title: 'Title 2',
      content: 'content 2',
      isFavourite: false,
    },
    {
      id: 'p3',
      title: 'Title 3',
      content: 'content 3',
      isFavourite: false,
    },
    {
      id: 'p4',
      title: 'Title 4',
      content: 'content 4',
      isFavourite: true,
    },
  ]);

  const toggleFavourite = (productId) => {
    setProductsList((current) => {
      const index = current.findIndex((p) => p.id === productId);
      const newStatus = !current[index].isFavourite;

      const updated = [...current];
      updated[index] = {
        ...current[index],
        isFavourite: newStatus,
      };
      return updated;
    });
  };

  return <ProductsContext.Provider value={{ products: productsList, toggleFav: toggleFavourite }}>{props.children}</ProductsContext.Provider>;
};

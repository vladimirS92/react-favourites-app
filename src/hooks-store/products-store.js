import { initStore } from './store';

const configureStore = () => {
  const actions = {
    TOGGLE_FAVOURITE: (currentState, productId) => {
      const index = currentState.products.findIndex((p) => p.id === productId);
      const newStatus = !currentState.products[index].isFavourite;

      const updated = [...currentState.products];
      updated[index] = {
        ...currentState.products[index],
        isFavourite: newStatus,
      };
      return { products: updated };
    },
  };

  initStore(actions, {
    products: [
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
    ],
  });
};

export default configureStore;

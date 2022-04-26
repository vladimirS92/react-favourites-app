import { createSlice } from '@reduxjs/toolkit';

const productInitialState = {
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
};

const productSlice = createSlice({
  name: 'product',
  initialState: productInitialState,
  reducers: {
    switchFavourite(state, action) {
      const productIndex = state.products.findIndex((product) => product.id === action.payload);

      state.products[productIndex].isFavourite = !state.products[productIndex].isFavourite;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type List = {
  product: string;
  price: number;
  id: number;
  discountPrice: number;
};

export interface ShoppingListSlice {
  id: number;
  list: List[];
}
export type ShoppingListSliceStore = {
  shoppingList: ShoppingListSlice[];
};

const initialState: ShoppingListSlice[] = [
  {
    id: 1,
    list: [
      { id: 1, product: 'ananas', price: 57815, discountPrice: 56910 },
      { id: 2, product: 'house', price: 54325, discountPrice: 50000 },
      { id: 3, product: 'computer', price: 55452, discountPrice: 45000 },
    ],
  },
  {
    id: 2,
    list: [
      { id: 1, product: 'apple', price: 54315, discountPrice: 52010 },
      { id: 2, product: 'house', price: 54325, discountPrice: 35000 },
      { id: 3, product: 'computer', price: 55452, discountPrice: 45658 },
    ],
  },
  {
    id: 3,
    list: [
      { id: 1, product: 'orange', price: 53515, discountPrice: 52610 },
      { id: 2, product: 'house', price: 54325, discountPrice: 52321 },
      { id: 3, product: 'bread', price: 56215, discountPrice: 54611 },
    ],
  },
  {
    id: 4,
    list: [
      { id: 1, product: 'tools', price: 60015, discountPrice: 59012 },
      { id: 2, product: 'bread', price: 58915, discountPrice: 57813 },
      { id: 3, product: 'car', price: 53555, discountPrice: 52545 },
      { id: 4, product: 'house', price: 54325, discountPrice: 54000 },
      { id: 5, product: 'computer', price: 55452, discountPrice: 53000 },
    ],
  },
  {
    id: 5,
    list: [
      { id: 1, product: 'bread', price: 50215, discountPrice: 49013 },
      { id: 2, product: 'car', price: 56055, discountPrice: 53045 },
      { id: 3, product: 'house', price: 54325, discountPrice: 54000 },
      { id: 4, product: 'computer', price: 55452, discountPrice: 54789 },
      { id: 5, product: 'dog', price: 55435, discountPrice: 53456 },
    ],
  },
];

export const shoppingListSlice = createSlice({
  initialState,
  name: 'shoppingListSlice',
  reducers: {
    createNewList: (state, action) => {
      //najpierw otypowac formika i pozniej tutaj ogarnac
      console.log(action);
      return [...state];
    },
  },
});

export const { createNewList } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;

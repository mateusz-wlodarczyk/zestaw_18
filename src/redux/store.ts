import { combineReducers, configureStore } from '@reduxjs/toolkit';

import shoppingListSlice from './shoppingListSlice';

const reducer = combineReducers({
  shoppingList: shoppingListSlice,
});

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

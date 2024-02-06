import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ShoppingListSliceStore } from '../redux/shoppingListSlice';
import SingleList from './SingleList';

export const ShowLists = () => {
  const [showList, setShowList] = useState(false);
  const shoppingLists = useSelector((state: ShoppingListSliceStore) => state.shoppingList);

  return (
    <div>
      {shoppingLists.map((el) => (
        <SingleList key={el.id} item={el} />
      ))}
    </div>
  );
};

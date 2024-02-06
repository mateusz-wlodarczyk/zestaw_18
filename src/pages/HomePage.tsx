import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AddList } from '../components/AddList';
import { ShowLists } from '../components/ShowLists';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingListSliceStore, createNewList } from '../redux/shoppingListSlice';

export const HomePage = () => {
  const [addListMode, setAddListMode] = useState(false);
  const [showLists, setShowLists] = useState(false);
  const dispatch = useDispatch();

  const handleAddList = () => {
    setAddListMode((show) => !show);
    setShowLists(false);
    dispatch(createNewList());
  };
  const handleShowList = () => {
    setShowLists((show) => !show);
    setAddListMode(false);
  };

  return (
    <Box>
      <Flex wrap='wrap' flex='10px'>
        <ButtonGroup>
          <Button onClick={handleAddList}>add list</Button>
          <Button onClick={handleShowList}>{showLists ? 'hide lists' : 'show lists'}</Button>
        </ButtonGroup>{' '}
      </Flex>
      {addListMode && <AddList />}
      {showLists && <ShowLists />}
    </Box>
  );
};

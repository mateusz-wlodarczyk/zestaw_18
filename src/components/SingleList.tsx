import { Box, Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import SingleListView from './SingleListView';
import { ShoppingListSlice } from '../redux/shoppingListSlice';
import LineChart from './LineChart';

export default function SingleList({ item }: { item: ShoppingListSlice }) {
  const [showList, setShowList] = useState(false);

  const handleOnClick = () => {
    setShowList((show) => !show);
  };

  return (
    <Box>
      <Flex
        sx={{ gap: '15px', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}
      >
        {showList && <SingleListView item={item} />}
        <Button onClick={handleOnClick}>
          {showList ? `close list #${item.id}` : `list #${item.id}`}
        </Button>
      </Flex>
    </Box>
  );
}

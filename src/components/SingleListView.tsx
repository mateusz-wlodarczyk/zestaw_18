import { Box, Container, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ShoppingListSlice } from '../redux/shoppingListSlice';
import LineChart from './LineChart';
import {
  CategoryScale,
  Chart,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function SingleListView({ item }: { item: ShoppingListSlice }) {
  const [chartData, setChartData] = useState({
    labels: item.list.map((data) => data.product),
    datasets: [
      {
        label: 'price',
        data: item.list.map((data) => data.price),
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
      },
      {
        label: 'discount price',
        data: item.list.map((data) => data.discountPrice),
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `{shopping list #${item.id}}`,
      },
      legend: {
        display: true,
      },
    },
  };

  return (
    <Box>
      <Flex sx={{ alignItems: 'center', gap: '15px' }}>
        <Box sx={{ width: '400px' }}>
          <Line data={chartData} options={options} />
        </Box>
        <Container sx={{ width: '250px' }}>
          {item !== undefined &&
            item.list.map((el) => {
              return (
                <Flex key={Math.floor(Math.random() * 99999)}>
                  <Box>
                    <Text>
                      product: {el.product}, ${el.price}
                    </Text>
                  </Box>
                </Flex>
              );
            })}
        </Container>
      </Flex>
    </Box>
  );
}

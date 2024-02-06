import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ChakraProvider, Text } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/constans';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <>
      <>
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path={ROUTES.home}
                element={
                  <>
                    <HomePage />
                  </>
                }
              />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </>
    </>
  );
}

export default App;

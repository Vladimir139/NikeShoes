import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import '@assets/styles/globalstyles.css';
import {Provider} from "react-redux";
import {store} from "@store/store";
import { ChakraProvider } from '@chakra-ui/react'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
);

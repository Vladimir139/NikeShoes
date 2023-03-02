import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/layout/Layout";
import Home from "@pages/home/Home";
import Products from "@pages/products/Products";
import Basket from "@pages/basket/Basket";
import {About} from "@pages";


function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="products" element={<Products />}/>
            <Route path="basket" element={<Basket />}/>
          </Route>
      </Routes>
  );
}

export default App;

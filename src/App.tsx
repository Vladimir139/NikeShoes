import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/layout/Layout";



function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route path="Home" />
          </Route>
      </Routes>
  );
}

export default App;

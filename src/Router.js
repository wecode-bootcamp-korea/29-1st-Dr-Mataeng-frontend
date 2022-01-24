import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/MyPage" element={<MyPage />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/ProductDetail" element={<ProductDetail />} />
      <Route path="/ProductList" element={<ProductList />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/WishList" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
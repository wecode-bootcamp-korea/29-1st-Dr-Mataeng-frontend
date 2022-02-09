import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import Payment from './pages/Payment/Payment';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Search from './pages/Search/Search';
import SignUp from './pages/SignUp/SignUp';
import WishList from './pages/WishList/WishList';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function Router() {
  return (
    <BrowserRouter>
      <Header />
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
      <Footer />
    </BrowserRouter>
  );
}
export default Router;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
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
        <Route path="/login" element={<SignIn />} />
        <Route path="/main" element={<Main />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/wishList" element={<WishList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;

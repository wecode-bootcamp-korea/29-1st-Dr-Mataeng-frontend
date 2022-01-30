import React from 'react';
import './WishList.scss';
import Cart from '../WishList/Cart';
//import Empty from '../WishList/Empty';
import Footer from '../../components/footer/footer';

const WishList = () => {
  return (
    <>
      <div className="loginHeaderWrapper">
        <div className="loginHead">
          <div className="loginHeadTop">
            <button className="loginHeadTop backButton">
              <img src="images/backBotton.png" alt="뒤로가기" />
            </button>
          </div>
          <div className="loginHeadBottom">
            <h1 className="loginHeadBottom title">장바구니</h1>
          </div>
        </div>
      </div>
      <Cart />
      <Footer />
    </>
  );
};

export default WishList;

import React from 'react';
import Footer from '../../components/footer/footer';
import './WishList.scss';

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
            <h1 className="loginHeadBottom title">로그인</h1>
          </div>
        </div>
      </div>
      <div className="cartBaseContainer">
        <div className="cartContainer">
          <div className="cartContainer empty">
            <div className="emptyCartImage">
              <img src="images/icon/shopping-cart.png" />
            </div>
            <div className="emptyCartComment">
              <span>장바구니가 비었습니다.</span>
            </div>
            <button>
              <span>쇼핑 계속하기</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishList;

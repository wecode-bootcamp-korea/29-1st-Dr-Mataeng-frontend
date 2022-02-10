import React, { useEffect } from 'react';
import './WishList.scss';
import { useState } from 'react/cjs/react.development';
import ProductList from './ProductList';
import WISHLIST_DATA from './wishlistData';
import Empty from './Empty';
import END_POINT from '../../config';
import { useNavigate } from 'react-router-dom';

const WishList = () => {
  const [cart, setCart] = useState([]);

  let referrer = document.referrer;
  const goToPrevPage = () => {
    window.location.href = referrer;
  };

  const navigate = useNavigate();
  const goToPayment = () => {
    navigate('/payment');
  };

  const priceList = () => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price;
    }
    return totalPrice;
  };

  useEffect(() => {
    fetch(END_POINT.wishList, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => setCart(data.result));
  }, []);

  // useEffect(() => {
  //   setCart(WISHLIST_DATA);
  // }, []);

  return (
    <>
      <header className="loginHeaderWrapper">
        <div className="loginHead">
          <div className="loginHeadTop">
            <button className="loginHeadTop backButton">
              <img
                src="images/productList/icon-left-arrow.png"
                alt="뒤로가기"
                onClick={goToPrevPage}
              />
            </button>
          </div>
          <div className="loginHeadBottom">
            <h1 className="loginHeadBottom title">장바구니</h1>
          </div>
        </div>
      </header>
      {cart.length === 0 && <Empty />}
      {cart.length > 0 && (
        <div className="cart">
          <div className="cart container">
            <div className="containerRow">
              <div className="controlCheckbox">
                <div className="checkbox">
                  <input type="checkbox" />
                  <span>전체선택({cart.length})</span>
                </div>
                <div className="deleteButton">
                  <button>
                    <img alt="trashcan" src="images/icon/trash-can.png" />
                    <span>선택 삭제</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cartBox">
            <div className="cartBoxContainer">
              <ul className="orderProductList">
                {cart.map(list => {
                  return (
                    <ProductList
                      key={list.product_id}
                      list={list}
                      cart={cart}
                      setCart={setCart}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="orderBoxContainer">
              <div className="orderBox">
                <div className="orderTitle">
                  <span>주문 예정 금액</span>
                </div>
                <div className="orderPriceBox">
                  <div className="orderPriceList">
                    <dt className="orderPriceTitle">총 상품 금액</dt>
                    <dd className="orderPrice">
                      <span>₩</span>
                      <span>{priceList()}</span>
                    </dd>
                  </div>
                  <div className="orderPriceList">
                    <dt className="orderPriceTitle">할인 금액</dt>
                    <dd className="orderPrice">
                      <span>₩</span>
                      <span>(-)0</span>
                    </dd>
                  </div>
                  <div className="orderPriceList">
                    <dt className="orderPriceTitletotal">총 결제 예정 금액</dt>
                    <dd className="orderPrice">
                      <span>₩</span>
                      <span>{priceList()}</span>
                    </dd>
                  </div>
                </div>
              </div>
              <div className="buyButton">
                <button onClick={goToPayment}>구매하기</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WishList;

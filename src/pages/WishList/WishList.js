import React, { useEffect } from 'react';
import './WishList.scss';
import Footer from '../../components/footer/footer';
import { useState } from 'react/cjs/react.development';
import ProductList from './ProductList';
import WISHLIST_DATA from './wishlistData';

const WishList = () => {
  const [cartList, setCartList] = useState([]);
  const priceList = () => {
    let totalPrice = 0;
    for (let i = 0; i < cartList.length; i++) {
      totalPrice += cartList[i].price;
    }
    return totalPrice;
  };

  // useEffect(() => {
  //   fetch('http://10.58.7.157:8000/carts', {
  //     method: 'GET',
  //     headers: {
  //       Authorization:
  //         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1fQ.wJO6SJNZeBgZWe8KLTo2flSDaL0KdDOA_oBpObKiRCw',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => setCartList(data.result));
  // }, []);

  useEffect(() => {
    setCartList(WISHLIST_DATA);
  }, []);

  // const deleteHandler = () => {
  //   fetch('api', {
  //     method : "DELETE",
  //     headers : {
  //       Authorization:
  //         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1fQ.wJO6SJNZeBgZWe8KLTo2flSDaL0KdDOA_oBpObKiRCw',
  //     },
  //   })
  //     .then
  // }

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
      <div className="cart">
        <div className="cart container">
          <div className="containerRow">
            <div className="controlCheckbox">
              <div className="checkbox">
                <input type="checkbox" />
                <span>전체선택</span>
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
              {WISHLIST_DATA.map(list => {
                return (
                  <ProductList
                    key={list.product_id}
                    productName={list.product_name}
                    image={list.product_image}
                    color={list.product_color}
                    size={list.product_size}
                    quantity={list.quantity}
                    price={list.price}
                    like={list.product_like}
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
              <button>구매하기</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishList;

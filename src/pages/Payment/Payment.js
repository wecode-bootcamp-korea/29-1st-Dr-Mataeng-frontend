import React from 'react';
import './Payment.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Payment = () => {
  const [orderProduct, setOrderProduct] = useState(true);

  const orderProductHandler = () => {
    setOrderProduct(!orderProduct);
  };

  const orderPaymentHandler = () => {
    alert('주문이 완료되었습니다.');
  };

  return (
    <section className="Payment">
      <div className="titleWrap">
        <Link to="/Main" className="goBackBtn">
          <img
            alt="left arrow icon"
            className="leftArrowIcon"
            src="/images/payment/icon-left-arrow.png"
          />
        </Link>
        <h1 className="mainTitle">주문/결제</h1>
      </div>
      <div className="contentsWrap">
        <div className="orderProductInfoWrap">
          <div className="expectedOrderPrice">
            <span className="title">주문 예정 금액 (1item | ₩280,000)</span>
            <button className="orderListBtn" onClick={orderProductHandler}>
              <img
                alt="arrow icon"
                className="arrowIcon"
                src={
                  orderProduct
                    ? '/images/payment/icon-down-arrow-white.png'
                    : '/images/payment/icon-up-arrow-white.png'
                }
              />
            </button>
          </div>
          <div className={orderProduct ? 'orderListWrap' : 'orderListWrapShow'}>
            <div className="orderItemWrap">
              <img
                alt="basket icon"
                className="basketIcon"
                src="/images/payment/icon-bag.png"
              />
              <span className="title">주문상품</span>
            </div>
            <ul className="orderProductListWrap">
              <li className="orderProductList">
                <div className="productTumWrap">
                  <img
                    alt="shoes thumbnail"
                    className="productTum"
                    src="/images/payment/tum-test.jpeg"
                  />
                </div>
                <div className="productInfoWrap">
                  <h2 className="productInfoTitle">아드리안</h2>
                  <ul className="productInfoOption">
                    <li className="optionList">컬러 : 블랙</li>
                    <li className="optionList">사이즈 : 220</li>
                    <li className="optionList">수량 : 1</li>
                  </ul>
                  <span className="productInfoPrice">280000</span>
                </div>
              </li>
            </ul>
          </div>
          <fieldset className="ordererWrap">
            <div className="ordererTitleWrap">
              <img
                alt="user icon"
                className="userIcon"
                src="/images/payment/icon-user.png"
              />
              <span className="title">주문자 정보</span>
            </div>
            <div className="ordererInfoWrap">
              <div className="ordererInfo">
                <label className="ordererKinds">이름</label>
                <input
                  type="text"
                  defaultValue="유재민"
                  className="ordererValue"
                />
              </div>
              <div className="ordererInfo">
                <label className="ordererKinds">전화번호</label>
                <input
                  type="text"
                  defaultValue="01024709454"
                  className="ordererValue"
                />
              </div>
              <div className="ordererInfo">
                <label className="ordererKinds">이메일</label>
                <input
                  type="text"
                  defaultValue="yoojamer@gmail.com"
                  className="ordererValue"
                />
              </div>
              <div className="ordererInfo">
                <label className="ordererKinds">포인트</label>
                <input
                  type="text"
                  defaultValue="1000000"
                  className="ordererValue"
                />
              </div>
            </div>
          </fieldset>
        </div>
        <div className="orderPriceWrap">
          <article className="orderPriceStickyWrap">
            <span className="orderPriceTitle">주문 예정 금액</span>
            <ul className="orderPriceListWrap">
              <li className="orderPriceList">
                <span className="title">총 상품 금액</span>
                <span className="price">280,000</span>
              </li>
              <li className="orderPriceList">
                <span className="title">배송비</span>
                <span className="price">(+)0</span>
              </li>
              <li className="orderPriceList">
                <span className="title">할인 금액</span>
                <span className="price">(-)0</span>
              </li>
              <li className="orderPriceList">
                <span className="title titleAccent">총 결제 예정 금액</span>
                <span className="price priceAccent">280,000</span>
              </li>
            </ul>
          </article>
          <button className="SettlePayButton" onClick={orderPaymentHandler}>
            결제하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Payment;

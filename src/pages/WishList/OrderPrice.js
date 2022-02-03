import React from 'react';

const OrderPrice = () => {
  return (
    <div className="orderBoxContainer">
      <div className="orderBox">
        <div className="orderTitle">
          <span>주문 예정 금액</span>
        </div>
        <div className="orderPriceBox">
          <div className="orderPriceList">
            <dt className="orderPriceTitle">총 상품 금액</dt>
            <dd className="orderPrice">
              <span>3,000</span>
            </dd>
          </div>
          <div className="orderPriceList">
            <dt className="orderPriceTitle">할인 금액</dt>
            <dd className="orderPrice">
              <span>3,000</span>
            </dd>
          </div>
          <div className="orderPriceList">
            <dt className="orderPriceTitle">총 결제 예정 금액</dt>
            <dd className="orderPrice">
              <span>3,000</span>
            </dd>
          </div>
        </div>
      </div>
      <div className="buyButton">
        <button>구매하기</button>
      </div>
    </div>
  );
};

export default OrderPrice;

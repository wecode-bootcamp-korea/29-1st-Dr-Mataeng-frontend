import React, { useState } from 'react';
import MypagePoints from './MypagePoints';
import { Link } from 'react-router-dom';
import './MyPage.scss';

const Mypage = () => {
  const [orderProduct, setOrderProduct] = useState(false);

  const orderProductHandler = () => {
    setOrderProduct(!orderProduct);
  };

  return (
    <main className="Mypage">
      <main className="MypagePosition">
        <section className="imgUploadWrap">
          <img
            alt="dr mataeng logo"
            className="defaultImg"
            src="/images/mypage/logo@3x.png"
          />
          <div className="imgUploadBtn">
            <img
              alt="photo icon"
              className="uploadBtnImg"
              src="/images/mypage/img_profile.png"
            />
          </div>
        </section>
        <section className="infoWrap">
          <div className="infoGreetingsWrap">
            <button type="button" className="gearBtn">
              <img
                alt="gear icon"
                className="gearBtnImg"
                src="/images/mypage/btn_mypageSetting.jpeg"
              />
            </button>
            <span className="userName">
              <strong>유재민님,</strong>
            </span>
            <span className="greetings">환영합니다.</span>
          </div>
          <div className="userRankWrap">
            <p className="userRank">DOCS FAMILY</p>
          </div>
          <div className="userPoingWrap">
            {POINT_LIST.map(({ id, pointType, pointHistory, url }) => (
              <MypagePoints
                key={id}
                label={pointType}
                point={pointHistory}
                url={url}
              />
            ))}
          </div>
        </section>
      </main>
      <section className="Payment">
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
            <div
              className={orderProduct ? 'orderListWrap' : 'orderListWrapShow'}
            >
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
          </div>
        </div>
      </section>
    </main>
  );
};

// 상수 데이터 : 포인트
const POINT_LIST = [
  {
    id: 1,
    pointType: '포인트',
    pointHistory: 10000,
    url: '/images/mypage/img_summary01.jpeg',
  },
  {
    id: 2,
    pointType: '쿠폰',
    pointHistory: 1,
    url: '/images/mypage/img_summary02.jpeg',
  },
  {
    id: 3,
    pointType: '미션',
    pointHistory: 4,
    url: '/images/mypage/img_summary03.jpeg',
  },
];

export default Mypage;

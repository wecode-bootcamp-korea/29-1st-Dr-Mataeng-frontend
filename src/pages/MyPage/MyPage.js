import React, { useState } from 'react';
import MypagePoints from './MypagePoints';
import { useEffect } from 'react';
import './MyPage.scss';

const Mypage = () => {
  const [orderProduct, setOrderProduct] = useState(false);
  const [userData, setUserData] = useState('');

  const orderProductHandler = () => {
    setOrderProduct(!orderProduct);
  };

  useEffect(() => {
    fetch(`http://172.20.10.5:8000/users/user`, {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1fQ.wJO6SJNZeBgZWe8KLTo2flSDaL0KdDOA_oBpObKiRCw',
      },
    })
      .then(res => res.json())
      .then(data => setUserData(data.users));
  }, []);

  console.log(userData);

  //{name: '테스트', point: '0', phone_number: '010-0000-0000', email: 'test1234@gmail.com'}

  return (
    <main className="Mypage">
      <div className="MypagePosition">
        <section className="imgUploadWrap">
          <img
            alt="dr mataeng logo"
            className="defaultImg"
            src="/images/mypage/logo@3x.png"
          />
          <div className="uploadBtnWrap">
            <img
              alt="frame icon"
              className="uploadBtn"
              src="/images/mypage/img_profile.png"
            />
          </div>
        </section>
        <section className="infoWrap">
          <div className="infoGreetingsWrap">
            <button type="button" className="gearBtnWrap">
              <img
                alt="gear icon"
                className="gearBtn"
                src="/images/mypage/btn_mypageSetting.jpeg"
              />
            </button>
            <span className="userName">
              <strong>{userData.name}</strong>
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
                moneyPoing={userData.point}
              />
            ))}
          </div>
        </section>
      </div>
      <div className="PaymentWrap">
        <div className="contentsWrap">
          <div className="orderProductInfoWrap">
            <div className="expectedOrderPrice">
              <span className="title">주문 제품 (1item | ₩280,000)</span>
              <button className="orderListBtn" onClick={orderProductHandler}>
                <img
                  alt="arrow icon"
                  className="arrowIcon"
                  src={
                    orderProduct
                      ? '/images/myPage/icon-down-arrow-white.png'
                      : '/images/myPage/icon-up-arrow-white.png'
                  }
                />
              </button>
            </div>
            <div
              className={orderProduct ? 'orderListWrap' : 'orderListWrapShow'}
            >
              {/* <div className="orderItemWrap">
                <img
                  alt="basket icon"
                  className="basketIcon"
                  src="/images/myPage/icon-bag.png"
                />
                <span className="title">주문상품</span>
              </div> */}
              <ul className="orderProductListWrap">
                <li className="orderProductList">
                  <div className="productTumWrap">
                    <img
                      alt="shoes thumbnail"
                      className="productTum"
                      src="/images/myPage/tum-test.jpeg"
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
              <span className="orderPriceTitle">주문 정보</span>
              <ul className="orderPriceListWrap">
                <li className="orderPriceList">
                  <span className="title">상품 금액</span>
                  <span className="price">280,000</span>
                </li>
                <li className="orderPriceList">
                  <span className="title">주문 상태</span>
                  <span className="price">배송 대기 중</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
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

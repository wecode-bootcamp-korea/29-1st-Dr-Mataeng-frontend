import React, { useState } from 'react';
import MypagePoints from './MypagePoints';
import { useEffect } from 'react';
import './MyPage.scss';

const Mypage = () => {
  const [orderProduct, setOrderProduct] = useState(false);
  const [userData, setUserData] = useState('');
  const [orderData, setOrderData] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다.');
    document.location.href = 'main';
  };

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

  useEffect(() => {
    fetch(`http://172.20.10.5:8000/orders`, {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1fQ.wJO6SJNZeBgZWe8KLTo2flSDaL0KdDOA_oBpObKiRCw',
      },
    })
      .then(res => res.json())
      .then(data => setOrderData(...data.result));
  }, []);

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
              <strong>{userData.name}님</strong>
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
          <div className="userLogout">
            <button className="logout" onClick={handleLogout}>
              로그아웃
            </button>
          </div>
        </section>
      </div>
      <div className="PaymentWrap">
        <div className="contentsWrap">
          <div className="orderProductInfoWrap">
            <div className="expectedOrderPrice">
              <span className="title">
                주문 번호 : {orderData.order_number}
              </span>
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
              <ul className="orderProductListWrap">
                {orderData.order_items?.map(
                  ({
                    order_item_id,
                    product_image,
                    product_name,
                    product_color,
                    product_size,
                    quantity,
                    price,
                  }) => (
                    <li className="orderProductList" key={order_item_id}>
                      <div className="productTumWrap">
                        <img
                          alt="shoes thumbnail"
                          className="productTum"
                          src={product_image}
                        />
                      </div>
                      <div className="productInfoWrap">
                        <h2 className="productInfoTitle">{product_name}</h2>
                        <ul className="productInfoOption">
                          <li className="optionList">컬러 : {product_color}</li>
                          <li className="optionList">
                            사이즈 : {product_size}
                          </li>
                          <li className="optionList">수량 : {quantity}</li>
                        </ul>
                        <span className="productInfoPrice">{price}</span>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="orderPriceWrap">
            <article className="orderPriceStickyWrap">
              <span className="orderPriceTitle">주문 정보</span>
              <ul className="orderPriceListWrap">
                <li className="orderPriceList">
                  <span className="title">총 상품 금액</span>
                  <span className="price">{orderData.total_price}</span>
                </li>
                <li className="orderPriceList">
                  <span className="title">주문 상태</span>
                  <span className="price">{orderData.order_status}</span>
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

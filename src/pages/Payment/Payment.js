import React from 'react';
import './Payment.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import END_POINT from '../../config';

const Payment = () => {
  const [orderProduct, setOrderProduct] = useState(true);
  const [userData, setUserData] = useState('');
  const [orderData, setOrderData] = useState([]);

  const orderProductHandler = () => {
    setOrderProduct(!orderProduct);
  };

  const navigate = useNavigate();

  const orderPaymentHandler = () => {
    // 데이터 받아오기
    let queryApiAdress = orderData
      .map(({ cart_id }) => 'cart_id=' + cart_id)
      .join('&');

    // 쿼리스트링 보내기
    fetch(END_POINT.payment + `?${queryApiAdress}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });

    alert('주문이 완료되었습니다.');

    navigate('/myPage');
  };

  useEffect(() => {
    fetch(END_POINT.myPage, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => setUserData(data.users));
  }, []);

  useEffect(() => {
    fetch(END_POINT.wishList, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => setOrderData(data.result));
  }, []);

  // Function : 합계 계산
  let sumPrice = 0;

  const sumPriceHandler = () => {
    for (let i = 0; i < orderData.length; i++) {
      sumPrice += orderData[i].price;
    }
  };
  sumPriceHandler();

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
            <span className="title">
              주문 예정 금액 ({orderData.length}item | ₩{sumPrice})
            </span>
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
              {orderData?.map(
                ({
                  cart_id,
                  price,
                  product_name,
                  product_color,
                  product_size,
                  quantity,
                  product_image,
                }) => (
                  <li className="orderProductList" key={cart_id}>
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
                        <li className="optionList">사이즈 : {product_size}</li>
                        <li className="optionList">수량 : {quantity}</li>
                      </ul>
                      <span className="productInfoPrice">{price}</span>
                    </div>
                  </li>
                )
              )}
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
                  defaultValue={userData.name}
                  className="ordererValue"
                />
              </div>
              <div className="ordererInfo">
                <label className="ordererKinds">전화번호</label>
                <input
                  type="text"
                  defaultValue={userData.phone_number}
                  className="ordererValue"
                />
              </div>
              <div className="ordererInfo">
                <label className="ordererKinds">이메일</label>
                <input
                  type="text"
                  defaultValue={userData.email}
                  className="ordererValue"
                />
              </div>
              <div className="ordererInfo">
                <label className="ordererKinds">포인트</label>
                <input
                  type="text"
                  defaultValue={userData.point}
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
                <span className="price">{sumPrice}</span>
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
                <span className="price priceAccent">{sumPrice}</span>
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

import React from 'react';
import './ProductDetail.scss';
import { useState, useEffect } from 'react';
import ProductStock from './ProductStock';

const ProductDetail = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentRight, secContentRight] = useState('');
  const [quantityValue, setquantityValue] = useState(1);
  const [productData, setProductData] = useState([]);

  // 데이터 받아오기
  // error : 객체안의 객체 접근 시 에러 발생 (ex productData.result.id) 하므로 data를 받아올 때 result를 받아와야 함
  useEffect(() => {
    fetch('/data/productDetailData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setProductData(data.result));
  }, []);

  // // 우측 엘리먼트 고정
  const handleFollow = () => {
    setScrollPosition(window.pageYOffset);
    if (scrollPosition >= 125) {
      secContentRight('contentFix');
    } else {
      secContentRight('content');
    }
  };

  useEffect(() => {
    const contentScrollHandler = () => {
      window.addEventListener('scroll', handleFollow);
    };
    contentScrollHandler();
    return () => {
      window.removeEventListener('scroll', handleFollow); // 여러번 addEventListener를 사용할 때에는 removeEventListener로 삭제, 메모리 갈비지컬렉터
    };
  });

  // 수량 조절 (error : 고정되지 않는 value)
  const quantityCountHandler = event => {
    if (quantityValue > 0 && event.target.className === 'quantityPlus')
      setquantityValue(quantityValue + 1);
    else if (quantityValue > 1 && event.target.className === 'quantityMinus')
      setquantityValue(quantityValue - 1);
  };

  // 수량 조절 (타겟 벨류가 넘버타입으로 들어가야 위 +,-버튼 클릭 시 넘버타입으로 인식함)
  // onChange(input값이 바뀌는 경우), onKeyup(0을 입력한 순간을 캐치) 중복 들어감. onChage를 빼면 고정되지 않은 value 오류
  const quantityValueHandler = event => {
    setquantityValue(Number(event.target.value));

    if (quantityValue === 0) {
      alert('수량은 최소 1개 이상 선택하셔야 합니다.');
      setquantityValue(1);
    }
  };

  return (
    <section className="ProductDetail">
      <div className="ProductDetailContainer">
        <div className="productImgWrap">
          <img
            alt="detail img"
            className="detailImg"
            src="/images/productDetail/productDetail.jpeg"
          />
          <img
            alt="detail img"
            className="detailImg"
            src="/images/productDetail/productDetail.jpeg"
          />
          <img
            alt="detail img"
            className="detailImg"
            src="/images/productDetail/productDetail.jpeg"
          />
        </div>
        <div className="contentWrap">
          <div className={contentRight}>
            <div className="productDetailTop">
              <div className="shareHeartWrap">
                <button className="shareIconWrap">
                  <img
                    alt="share icon"
                    className="shareIcon"
                    src="/images/productDetail/icon-share.png"
                  />
                </button>
                <div className="wishConutWrap">
                  <button className="heartIconWrap">
                    <img
                      alt="heart icon"
                      className="heartIcon"
                      src="/images/productDetail/icon-love.png"
                    />
                  </button>
                  <span className="wishConut">0</span>
                </div>
              </div>
              <div className="gradeStarWrap">
                <ul className="gradeStar">
                  <li className="Star">★</li>
                  <li className="Star">★</li>
                  <li className="Star">★</li>
                  <li className="Star">★</li>
                  <li className="Star">★</li>
                </ul>
                <span className="gradeConut">0</span>
                <span className="gradeConutTxt">건</span>
              </div>
            </div>
            <h1 className="productDetailTitle">{productData.product_name}</h1>
            <div className="memberBenefitsWrap">
              <button className="memberBenefits">회원 혜택 보기</button>
            </div>
            <ul className="productDetailOptions">
              {productData.sizes &&
                productData.sizes.map(({ size_id, size, stock }) => (
                  <ProductStock
                    key={size_id}
                    size_id={size_id}
                    size={size}
                    stock={stock}
                  />
                ))}
            </ul>
            <div className="productThumbnailWrap">
              <div className="productThumbnailContainer">
                <img
                  alt="product thumbnail"
                  className="productThumbnail"
                  src="/images/productDetail/productDetail.jpeg"
                />
              </div>
            </div>
            <div className="purchasePriceAndQuantity">
              <div className="purchaseQuantityWrap">
                <span className="quantityTitle">수량</span>
                <input
                  type="text"
                  pattern="\d*"
                  maxLength="3"
                  className="quantityInput"
                  value={quantityValue}
                  onChange={quantityValueHandler}
                  onKeyUp={quantityValueHandler}
                />
                <button
                  type="button"
                  className="quantityMinus"
                  onClick={quantityCountHandler}
                />
                <button
                  type="button"
                  className="quantityPlus"
                  onClick={quantityCountHandler}
                />
              </div>
              <span className="purchasePrice">
                {/* String타입을 주지 않으면 에러남 ㅠ 왜그러니 */}
                {String(productData.price * quantityValue)}
              </span>
            </div>
            <div className="cartAndBuyBtn">
              <button type="button" className="cartBtn">
                장바구니
              </button>
              <button type="button" className="buyBtn">
                구매하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="productDetailDescList">
        <div className="position" />
        <ul className="descListWrap">
          <li className="descList">
            <span className="model">모델명</span>
            <span className="name">{productData.product_name}</span>
          </li>
          <li className="descList">
            <span className="model">제조연월</span>
            <span className="name">제품라벨 표기</span>
          </li>
          <li className="descList">
            <span className="model">제품 주소재</span>
            <span className="name">{productData.material}</span>
          </li>
          <li className="descList">
            <span className="model">제조국</span>
            <span className="name">{productData.country}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductDetail;

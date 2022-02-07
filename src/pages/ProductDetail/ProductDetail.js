import React from 'react';
import './ProductDetail.scss';
import { useState, useEffect } from 'react';
import ProductStock from './ProductStock';
import { useNavigate } from 'react-router';

const ProductDetail = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentRight, secContentRight] = useState('');
  const [quantityValue, setquantityValue] = useState(1);
  const [productData, setProductData] = useState([]);
  const [sizeChoiceValue, setSizeChoiceValue] = useState('');

  // mock 데이터 받아오기
  // error : 객체안의 객체 접근 시 에러 발생 (ex productData.result.id) 하므로 data를 받아올 때 result를 받아와야 함
  // useEffect(() => {
  //   fetch('/data/productDetailData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => setProductData(data.result));
  // }, []);

  // const a = productData.sizes[0].stock;
  const b = productData.sizes;
  const c = b;
  // console.log(c[0]);

  // 백엔드 데이터 연동
  useEffect(() => {
    fetch('http://10.58.4.82:8000/products/38', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data.result);
        setSizeChoiceValue(data.result.sizes[0].size);
      });
  }, []);

  // 우측 엘리먼트 고정
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
    // 사이즈 체크에 따른 stock값 불러오기
    const sizeDataFilter = productData.sizes?.filter(
      el => el.size === sizeChoiceValue
    );
    const sizeDataStock = sizeDataFilter[0].stock;

    if (
      quantityValue > 0 &&
      event.target.className === 'quantityPlus' &&
      quantityValue < sizeDataStock
    ) {
      setquantityValue(quantityValue + 1);
    } else if (
      quantityValue > 1 &&
      event.target.className === 'quantityMinus'
    ) {
      setquantityValue(quantityValue - 1);
    } else if (quantityValue === sizeDataStock) {
      alert(`해당 옵션의 최대 구매 가능 수량은 ${sizeDataStock}개 입니다.`);
    }
  };

  // 수량 조절 (타겟 벨류가 넘버타입으로 들어가야 위 +,-버튼 클릭 시 넘버타입으로 인식함)
  // onChange(input값이 바뀌는 경우), onKeyup(0을 입력한 순간을 캐치) 중복 들어감. onChage를 빼면 고정되지 않은 value 오류
  const quantityValueHandler = event => {
    // 사이즈 체크에 따른 stock값 불러오기
    const sizeDataFilter = productData.sizes?.filter(
      el => el.size === sizeChoiceValue
    );
    const sizeDataStock = sizeDataFilter[0].stock;

    setquantityValue(Number(event.target.value));

    if (quantityValue === 0) {
      alert('수량은 최소 1개 이상 선택하셔야 합니다.');
      setquantityValue(1);
    } else if (quantityValue > sizeDataStock) {
      alert(`해당 옵션의 최대 구매 가능 수량은 ${sizeDataStock}개 입니다.`);
      setquantityValue(sizeDataStock);
    }
  };

  // size데이터 받아오는 이벤트
  const sizeDataGetHandler = event => {
    setSizeChoiceValue(event.target.value);
  };

  // 남은 작업 내용 1 : 장바구니 버튼 클릭 시 데이터 전송
  // 남은 작업 내용 2 : 백엔드님과 키 값 맞추기 or 데이터 연동하기
  const CartBtnClickHandler = () => {
    fetch('http://10.58.4.82:8000/products/38', {
      method: 'POST',
      body: JSON.stringify({
        size: sizeChoiceValue,
        stock: quantityValue,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data.result);
        console.log('하이');
      });

    // 남은 작업 내용 3 : 페이지 이동 이벤트 걸기
    const navigate = useNavigate();
  };

  return (
    <section className="ProductDetail">
      <div className="ProductDetailContainer">
        <div className="productImgWrap">
          {productData.images?.map(({ image_id, image_url }) => (
            <img
              key={image_id}
              alt="detail img"
              className="detailImg"
              src={image_url}
            />
          ))}
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
                  <span className="wishConut">{productData.like}</span>
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
            {/* <ul className="productDetailOptions">
              {productData.sizes &&
                productData.sizes.map(({ size_id, size, stock }) => (
                  <ProductStock
                    key={size_id}
                    size_id={size_id}
                    size={size}
                    stock={stock}
                  />
                ))}
            </ul> */}
            <div className="sizeChoiceWrap">
              <span className="sizeTitle">사이즈 선택</span>
              <select className="sizeOptions" onChange={sizeDataGetHandler}>
                {productData.sizes?.map(({ size_id, size, stock }) => (
                  <option
                    value={size}
                    className="size"
                    key={size_id}
                    disabled={stock === 0}
                  >
                    {size}
                    {stock < 5 && ' - 재고 5개 미만'}
                    {stock <= 0 && ' - 일시품절'}
                  </option>
                ))}
              </select>
            </div>
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
              <button
                type="button"
                className="cartBtn"
                onClick={CartBtnClickHandler}
              >
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

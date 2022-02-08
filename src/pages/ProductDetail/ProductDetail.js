import React from 'react';
import './ProductDetail.scss';
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router';

const ProductDetail = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentRight, secContentRight] = useState('');
  const [quantityValue, setquantityValue] = useState(1);
  const [productData, setProductData] = useState([]);
  const [sizeChoiceValue, setSizeChoiceValue] = useState('');

  // Connect : mock 데이터
  // useEffect(() => {
  //   fetch('/data/productDetailData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => setProductData(data.result));
  // }, []);

  // Connect : 백엔드와 데이터 연동
  useEffect(() => {
    fetch('http://10.58.7.157:8000/products/38', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data.result);
        setSizeChoiceValue(data.result.sizes[0].size);
      });
  }, []);

  // Event : 스크롤 이벤트, 우측 엘리먼트 고정

  // Review: 두개의 값 중 하나면은 Boolean 사용
  // contentFix, content
  // boolean => ! true false
  //
  const handleFollow = () => {
    setScrollPosition(window.pageYOffset);
    if (scrollPosition >= HEADER_HEIGHT) {
      // header만큼 내려왔는지? is~~~~~~~~
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

  // Event : +, - 버튼으로 주문 수량 선택, 사이즈 재고별 limit 걸기
  const quantityCountHandler = event => {
    const sizeDataFilter = productData.sizes?.filter(
      sizesList => sizesList.size === sizeChoiceValue
    );
    const sizeDataStock = sizeDataFilter[0].stock;

    const is =
      quantityValue > 0 &&
      event.target.className === 'quantityPlus' &&
      quantityValue < sizeDataStock;

    // Review: 긴 조건은 변수화
    if (is) {
      // count, setCount  = 0
      // fetch(~~~~).then(()=> setCount(prev => prev + 1) // 100ms
      // 50ms count = 3

      setquantityValue(quantityValue + 1);
      // 가장 최신의 이전값이 보장이 되지 않음

      setquantityValue(prev => {
        return prev + 1;
      });
      // 안전해서, function update
    } else if (
      quantityValue > 1 &&
      event.target.className === 'quantityMinus'
    ) {
      setquantityValue(quantityValue - 1);
    } else if (quantityValue === sizeDataStock) {
      alert(`해당 옵션의 최대 구매 가능 수량은 ${sizeDataStock}개 입니다.`);
    }
  };

  // Event : 키보드 입력으로 주문 수량 작성, 사이즈 재고별 limit 걸기
  const quantityValueHandler = event => {
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

  // Event : 사이즈 select value 받아오기
  const sizeDataGetHandler = event => {
    setSizeChoiceValue(event.target.value);
  };

  // // Event : 장바구니 버튼 클릭 시 POST body로 데이터 전송 및 알림창 생성
  // // 남은 작업 내용 1 : 장바구니 버튼 클릭 시 데이터 전송
  // // 남은 작업 내용 2 : 백엔드님과 키 값 맞추기 or 데이터 연동하기
  // const CartBtnClickHandler = () => {
  //   fetch('http://10.58.4.82:8000/products/38', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       size: sizeChoiceValue,
  //       stock: quantityValue,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setProductData(data.result);
  //       console.log('하이');
  //     });

  //   // 남은 작업 내용 3 : 페이지 이동 이벤트 걸기, alert창 띄우기
  //   const navigate = useNavigate();
  // };

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
              {productData.colors?.map(({ product_id, color_img }) => (
                <button
                  className="productThumbnailContainer colorChoiceActive"
                  key={product_id}
                >
                  <img
                    alt="product thumbnail"
                    className="productThumbnail"
                    src={color_img}
                  />
                </button>
              ))}
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
                {String(productData.price * quantityValue)}
              </span>
            </div>
            <div className="cartAndBuyBtn">
              <button
                type="button"
                className="cartBtn"
                // onClick={CartBtnClickHandler}
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

const HEADER_HEIGHT = 125;

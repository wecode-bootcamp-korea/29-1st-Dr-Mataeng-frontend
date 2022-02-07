import React from 'react';
import './ProductList.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Filter from './Filter';

const ProductList = () => {
  const [itemList, setItemList] = useState([]);
  const [filterShow, setFilterShow] = useState(false);

  const filterHandler = () => {
    setFilterShow(!filterShow);
  };

  useEffect(() => {
    fetch('http://10.58.4.82:8000/products?category=부츠&gender=여성,공용', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItemList(data.result);
      });
  }, []);

  return (
    <section className="ProductList">
      <div className="titleWrap">
        <Link to="/Main" className="goBackBtn">
          <img
            alt="left arrow icon"
            className="leftArrowIcon"
            src="/images/productList/icon-left-arrow.png"
          />
        </Link>
        <h1 className="mainTitle">여성부츠</h1>
        <span className="mediumTitle">60개의 여성 부츠 상품이 있습니다.</span>
        <span className="productIntroduction">
          닥터마틴의 여성 부츠 컬렉션입니다. 심플한 스타일부터 과감한 스타일까지
          개성을 지닌 닥터 마틴의 여성 부츠는 성별과 나이를 초월해 시대를
          상징하는 아이템으로 폭넓게 사랑받고 있습니다. 닥터마틴의 여성
          부츠는1460, 2976, 101, 1490 등 오리지널 부츠부터 제이든과 같은 퓨전
          스타일까지 자기 자신을 표현하는 수단으로서 자리잡았습니다.
        </span>
        <div className="filterBtnWrap">
          <button className="filterIcon" />
          <span className="btnName">필터</span>
          <button className="arrowIcon" onClick={filterHandler} />
        </div>
        <div className={filterShow ? 'filterActive' : 'filterHide'}>
          <Filter />
        </div>
      </div>
      <div className="borderLine" />
      <div className="productListWrap">
        <h1 className="productCount">제품 &#40;{itemList.length}&#41;</h1>
        <ul className="productList">
          {itemList.map(
            ({
              product_id,
              product_name,
              thumbnail_img,
              price,
              product_color,
              total_stock,
            }) => (
              <li className="product" key={product_id}>
                <Link
                  to="/search/result?dm_search_text={동적 라우팅}"
                  className="productImgWrap"
                >
                  <img
                    alt="product"
                    className="productImg"
                    src={thumbnail_img}
                  />
                </Link>
                <div className="contentWrap">
                  <div className="contentLeft">
                    <Link
                      to="/search/result?dm_search_text={동적 라우팅}"
                      className="name"
                    >
                      {product_name}
                    </Link>
                    <span className="color">{product_color}</span>
                    <button className="likeConutWrap">
                      <img
                        alt="heart icon"
                        className="heartIcon"
                        src="/images/productList/icon-heart.png"
                      />
                      <span className="likeConut">0</span>
                    </button>
                  </div>
                  <div className="contentRight">
                    <span className="price">{price}</span>
                    <button className="cartBtn">장바구니 담기</button>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default ProductList;

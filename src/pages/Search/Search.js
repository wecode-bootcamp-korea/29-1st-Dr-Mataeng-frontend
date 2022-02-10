import React from 'react';
import './Search.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

const Search = () => {
  const [searchData, setSearchData] = useState([]);

  // Event : 페이지 전환 시 전달 받았던 props를 useLocation hook으로 받아오기
  const location = useLocation();

  // Connect : 백엔드와 연동하여 필터 로직 받아오기
  useEffect(() => {
    fetch(
      `http://3.36.97.236:8000/products/search?text=${location.state.inputValue}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        setSearchData(data.result);
      });
  }, [location.state.inputValue]);

  return (
    <section className="Search">
      <div className="titleWrap">
        <Link to="/Main" className="goBackBtn">
          <img
            alt="left arrow icon"
            className="leftArrowIcon"
            src="/images/search/icon-left-arrow.png"
          />
        </Link>
        <h1 className="mainTitle">
          "{location.state.inputValue}"
          {searchData.length <= 0 && <span>검색결과가 존재하지 않습니다.</span>}
        </h1>
        {searchData.length > 0 ? (
          <span className="mediumTitle">검색결과를 확인하세요</span>
        ) : (
          <span className="mediumTitle">검색어를 다시 한 번 확인하세요</span>
        )}
      </div>
      <div className="borderLine" />
      <div className="productListWrap">
        <h1 className="productCount">제품 &#40;{searchData.length}&#41;</h1>
        <ul className="productList">
          {searchData.map(
            ({
              product_id,
              product_name,
              thumbnail_img,
              price,
              product_color,
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
                        src="/images/search/icon-heart.png"
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

export default Search;

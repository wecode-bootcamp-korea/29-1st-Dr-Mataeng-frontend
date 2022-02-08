import React from 'react';
import './Search.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
// import { useLocation } from 'react-router';

const Search = () => {
  const [itemList, setItemList] = useState([]);

  // Connect : mock 데이터 연결
  useEffect(() => {
    fetch('/data/search.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setItemList(data);
      });
  }, []);

  // Event : 페이지 전환 시 전달 받았던 props를 useLocation hook으로 받아오기
  // const location = useLocation();
  // console.log(location.state.inputValue);

  // Connect : 백엔드와 연동하여 필터 로직 받아오기
  // useEffect(() => {
  //   fetch('/data/search.json', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: {location.state.inputValue},
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setSearchData(...data);
  //     });
  // }, []);

  // 동적 라우팅 구현
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate('/main');
  };

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
          {/* "{location.state.inputValue}" */}
          {itemList.length <= 0 && <span>검색결과가 존재하지 않습니다.</span>}
        </h1>
        {itemList.length > 0 ? (
          <span className="mediumTitle">검색결과를 확인하세요</span>
        ) : (
          <span className="mediumTitle">검색어를 다시 한 번 확인하세요</span>
        )}
      </div>
      <div className="borderLine" />
      <div className="productListWrap">
        <h1 className="productCount">제품 &#40;{itemList.length}&#41;</h1>
        <ul className="productList">
          {itemList.map(({ id, modelName, modelImage, price, color }) => (
            <li className="product" key={id}>
              <Link to="/" className="productImgWrap">
                <img
                  alt="product"
                  className="productImg"
                  src={modelImage}
                  onClick={goToDetail}
                />
              </Link>
              <div className="contentWrap">
                <div className="contentLeft">
                  <Link to="/" className="name" onClick={goToDetail}>
                    {modelName}
                  </Link>
                  <span className="color">{color}</span>
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
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Search;

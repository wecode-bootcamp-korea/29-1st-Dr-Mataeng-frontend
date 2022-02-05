import React from 'react';
import './Search.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

const Search = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('/data/search.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setItemList(data);
      });
  }, []);

  // useLocation hook으로 props 받아오기
  const location = useLocation();
  console.log(location.state.inputValue);

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
        <h1 className="mainTitle">{location.state.inputValue}</h1>
        <span className="mediumTitle">검색결과를 확인하세요</span>
        <span className="productIntroduction">
          여성 슈즈 컬렉션은 노동자 계층과 서브컬처에서 출발해 대중과
          셀러브리티에게 사랑받고 있습니다. 매해 새롭게 등장하는 슈즈 컬렉션은
          오리지널 실루엣 뿐만 아니라 트렌드에 걸맞는 컨템포러리한 디자인을 통해
          우리의 헤리티지를 이어오고 있습니다.
        </span>
        <div className="filterBtnWrap">
          <button className="filterIcon" />
          <span className="btnName">필터</span>
          <button className="arrowIcon" />
        </div>
      </div>
      <div className="borderLine" />
      <div className="productListWrap">
        <h1 className="productCount">제품 &#40;{itemList.length}&#41;</h1>
        <ul className="productList">
          {itemList.map(({ id, modelName, modelImage, price, color }) => (
            <li className="product" key={id}>
              <Link
                to="/search/result?dm_search_text={동적 라우팅}"
                className="productImgWrap"
              >
                <img alt="product" className="productImg" src={modelImage} />
              </Link>
              <div className="contentWrap">
                <div className="contentLeft">
                  <Link
                    to="/search/result?dm_search_text={동적 라우팅}"
                    className="name"
                  >
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

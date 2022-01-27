import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="cartAndCloseBtnPosition">
        <div className="cartAndCloseBtnWrap">
          <button className="cartAndCloseBtn cartBtn">
            <Link to="/WishList">
              <img
                alt="cart icon"
                className="buttonIcon cartIcon"
                src="/images/header/icon-bag.png"
              />
            </Link>
          </button>
          <button className="cartAndCloseBtn closeBtn">
            <img
              alt="close icon"
              className="buttonIcon closeIcon"
              src="/images/header/icon-close.png"
            />
          </button>
        </div>
      </div>
      <div className="searchWrapPosition">
        <div className="searchWrap">
          <input
            type="text"
            className="searchInput"
            placeholder="검색어를 입력해주세요."
          />
          <button className="searchBtn">
            <img
              alt="search icon"
              className="searchBtnIcon"
              src="/images/header/icon-search-white.png"
            />
          </button>
        </div>
      </div>
      <div className="contentWrap">
        <div className="contentPositionWrap">
          <div className="menuWrap">
            {NAV_MENU_LIST.map(
              ({
                id,
                name,
                icon,
                arrowClass,
                listMan,
                listFemale,
                listAll,
              }) => (
                <div className="menuMappingWrap" key={id}>
                  <div className="menuTitleWrap">
                    <span className="menuName">{name}</span>
                    <button className="downArrowBtn">
                      <img
                        alt="down arrow icon"
                        className={arrowClass}
                        src={icon}
                      />
                    </button>
                  </div>
                  <ul className="menuListWrap">
                    <li className="menuList">
                      <a href="#" className="menu">
                        남성
                      </a>
                    </li>
                    <li className="menuList">
                      <a href="#" className="menu">
                        여성
                      </a>
                    </li>
                    <li className="menuList">
                      <a href="#" className="menu">
                        전체보기
                      </a>
                    </li>
                  </ul>
                </div>
              )
            )}
            {/* {NAV_MENU_CUSTOMER.map(({ id, name }) => (
              <div className="menuMappingWrap customerMappingWrap" key={id}>
                <div className="menuTitleWrap">
                  <span className="menuName">{name}</span>
                </div>
              </div>
            ))} */}
          </div>
          <div className="rightContentBoundary">
            <div className="rightContentWrap">
              {RIGHT_CONTENTS_LIST.map(el => (
                <div className="categoryWrap" key={el.id}>
                  <p className="categoryTitle">{el.name}</p>
                  <img
                    className="categorySummaryImg"
                    alt="dr martin shoes"
                    src={el.url}
                  />
                  <button className="detailBtn">
                    <span className="detailBtnTxt">자세히 보기</span>
                    <img
                      className="rightArrowIcon"
                      alt="right arrow Icon"
                      src="/images/header/icon-right-arrow.png"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 상수 데이터 1 : 네비게이션 메뉴 상단
const NAV_MENU_LIST = [
  {
    id: 1,
    name: 'NEW',
    icon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '남성',
    listFemale: '여성',
    listAll: '전체보기',
  },
  {
    id: 2,
    name: 'BEST',
    icon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '남성',
    listFemale: '여성',
    listAll: '전체보기',
  },
  {
    id: 3,
    name: 'EXCLUSIVE',
    icon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '콜라보레이션',
    listFemale: 'MIE',
    listAll: '비건',
  },
  {
    id: 4,
    name: '여성',
    icon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '슈즈',
    listFemale: '부츠',
    listAll: '전체보기',
  },
  {
    id: 5,
    name: '남성',
    icon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '슈즈',
    listFemale: '부츠',
    listAll: '전체보기',
  },
  {
    id: 6,
    name: '키즈',
    icon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '토들러',
    listFemale: '주니어',
    listAll: '전체보기',
  },
  {
    id: 7,
    name: '액세서리',
    icon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '가방',
    listFemale: '슈케어',
    listAll: '전체보기',
  },
  {
    id: 8,
    name: 'ORIGINALS',
    icon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '슈즈',
    listFemale: '부츠',
    listAll: '전체보기',
  },
  {
    id: 9,
    name: '세일',
    icon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '남성세일',
    listFemale: '여성세일',
    listAll: '전체보기',
  },
  {
    id: 10,
    name: 'EXPLORE',
    icon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: 'HOW TO CARE',
    listFemale: 'HOW TO LACE',
    listAll: '전체보기',
  },
  {
    id: 11,
    name: '브랜드',
    icon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: 'HERITAGE',
    listFemale: 'ABOUT DM',
    listAll: '지속 가능성',
  },
  {
    id: 12,
    name: '/고객센터',
    icon: '/images/header/icon-right-arrow.png',
    arrowClass: 'rightArrowIcon',
  },
  {
    id: 13,
    name: '/매장찾기',
    icon: '/images/header/icon-right-arrow.png',
    arrowClass: 'rightArrowIcon',
  },
];

// 상수 데이터 2 : 네비게이션 메뉴 하단
// const NAV_MENU_CUSTOMER = [
//   {
//     id: 1,
//     name: '/고객센터',
//   },
//   {
//     id: 2,
//     name: '/매장찾기',
//   },
// ];

// 상수 데이터 3 : 네비게이션 우측 컨텐츠
const RIGHT_CONTENTS_LIST = [
  {
    id: 1,
    name: '공식몰 혜택',
    img: 'a',
    url: '/images/header/content-img01.jpeg',
  },
  {
    id: 2,
    name: '콜라보레이션',
    img: 'a',
    url: '/images/header/content-img02.jpeg',
  },
  {
    id: 3,
    name: '지속 가능성',
    img: 'a',
    url: '/images/header/content-img03.jpeg',
  },
  {
    id: 4,
    name: '브랜드 헤리티지',
    img: 'a',
    url: '/images/header/content-img04.png',
  },
];

export default Nav;

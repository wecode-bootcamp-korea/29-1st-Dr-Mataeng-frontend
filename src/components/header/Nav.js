import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

import NavMenu from './NavMenu';

const Nav = ({ navDisplayHandler, inputValueRecord }) => {
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
          <button
            className="cartAndCloseBtn closeBtn"
            onClick={navDisplayHandler}
          >
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
            onChange={inputValueRecord}
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
            {NAV_MENU_LIST.map(navMenu => (
              <NavMenu
                key={navMenu.id}
                id={navMenu.id}
                name={navMenu.name}
                arrowIcon={navMenu.arrowIcon}
                arrowClass={navMenu.arrowClass}
                listMan={navMenu.listMan}
                listFemale={navMenu.listFemale}
                listAll={navMenu.listAll}
              />
            ))}
          </div>
          <div className="rightContentBoundary">
            <div className="rightContentWrap">
              {RIGHT_CONTENTS_LIST.map(({ id, name, url }) => (
                <div className="categoryWrap" key={id}>
                  <p className="categoryTitle">{name}</p>
                  <img
                    className="categorySummaryImg"
                    alt="dr martin shoes"
                    src={url}
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
    arrowIcon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '남성',
    listFemale: '여성',
    listAll: '전체보기',
  },
  {
    id: 2,
    name: 'BEST',
    arrowIcon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '남성',
    listFemale: '여성',
    listAll: '전체보기',
  },
  {
    id: 3,
    name: 'EXCLUSIVE',
    arrowIcon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '콜라보레이션',
    listFemale: 'MIE',
    listAll: '비건',
  },
  {
    id: 4,
    name: '여성',
    arrowIcon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '슈즈',
    listFemale: '부츠',
    listAll: '전체보기',
  },
  {
    id: 5,
    name: '남성',
    arrowIcon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '슈즈',
    listFemale: '부츠',
    listAll: '전체보기',
  },
  {
    id: 6,
    name: '키즈',
    arrowIcon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '토들러',
    listFemale: '주니어',
    listAll: '전체보기',
  },
  {
    id: 7,
    name: '액세서리',
    arrowIcon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '가방',
    listFemale: '슈케어',
    listAll: '전체보기',
  },
  {
    id: 8,
    name: 'ORIGINALS',
    arrowIcon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '슈즈',
    listFemale: '부츠',
    listAll: '전체보기',
  },
  {
    id: 9,
    name: '세일',
    arrowIcon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: '남성세일',
    listFemale: '여성세일',
    listAll: '전체보기',
  },
  {
    id: 10,
    name: 'EXPLORE',
    arrowIcon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: 'HOW TO CARE',
    listFemale: 'HOW TO LACE',
    listAll: '전체보기',
  },
  {
    id: 11,
    name: '브랜드',
    arrowIcon: '/images/header/icon-down-arrow.png',
    arrowClass: 'downArrowIcon',
    listMan: 'HERITAGE',
    listFemale: 'ABOUT DM',
    listAll: '지속 가능성',
  },
  {
    id: 12,
    name: '/고객센터',
    arrowIcon: '/images/header/icon-right-arrow.png',
    arrowClass: 'rightArrowIcon',
  },
  {
    id: 13,
    name: '/매장찾기',
    arrowIcon: '/images/header/icon-right-arrow.png',
    arrowClass: 'rightArrowIcon',
  },
];

// 상수 데이터 2 : 네비게이션 우측 컨텐츠
const RIGHT_CONTENTS_LIST = [
  {
    id: 1,
    name: '공식몰 혜택',
    url: '/images/header/content-img01.jpeg',
  },
  {
    id: 2,
    name: '콜라보레이션',
    url: '/images/header/content-img02.jpeg',
  },
  {
    id: 3,
    name: '지속 가능성',
    url: '/images/header/content-img03.jpeg',
  },
  {
    id: 4,
    name: '브랜드 헤리티지',
    url: '/images/header/content-img04.png',
  },
];

export default Nav;

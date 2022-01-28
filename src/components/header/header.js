import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
// import { useEffect } from 'react';

import './Header.scss';

const Header = () => {
  const [navHandler, setnavHandler] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchData, setSearchData] = useState([]);

  const navDisplayHandler = () => {
    setnavHandler(!navHandler);
  };

  const inputValueRecord = event => {
    setInputValue(event.target.value);
  };

  // useEffect(() => {
  //   fetch('/data/comment.json', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: inputValue,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setSearchData(...data);
  //     });
  // }, [inputValue]);

  return (
    <header className="Header">
      {navHandler && (
        <Nav
          navDisplayHandler={navDisplayHandler}
          inputValueRecord={inputValueRecord}
        />
      )}
      <div className="topMenuListWrap">
        <ul className="topMenuList">
          {TOP_BAR_MENU_LIST.map(({ id, url, buttonName }) => (
            <li className="topMenuWrap" key={id}>
              <Link to={url} className="topMenu">
                {buttonName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="headerWrap">
        <button className="navigationBtn" onClick={navDisplayHandler}>
          <img
            alt="three line icon"
            className="navigationBtnIcon"
            src="/images/header/icon-toggle.png"
          />
        </button>
        <img
          alt="brand logo"
          className="headerLogo"
          src="/images/header/header-logo.svg"
        />
        <div className="searchAndIconWrap">
          <input
            className="searchInput"
            placeholder="검색어를 입력해주세요."
            onChange={inputValueRecord}
          />
          <div className="iconListWrap">
            {HEADER_ICON_LIST.map(({ id, btnClass, iconClass, url }) => (
              <button className={btnClass} key={id}>
                <img alt="cart close icon" src={url} className={iconClass} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

// 상수 데이터 1 : 아이콘 리스트
const TOP_BAR_MENU_LIST = [
  {
    id: 1,
    buttonName: '로그인',
    url: '/Main',
  },
  {
    id: 2,
    buttonName: '회원가입',
    url: '/Main',
  },
  {
    id: 3,
    buttonName: '매장찾기',
    url: '/Main',
  },
  {
    id: 4,
    buttonName: '브랜드헤리티지',
    url: '/Main',
  },
  {
    id: 5,
    buttonName: '고객센터',
    url: '/Main',
  },
];

// 상수 데이터 2 : 헤더 상단 버튼 리스트
const HEADER_ICON_LIST = [
  {
    id: 1,
    btnClass: 'iconWrap',
    iconClass: 'headerIcon',
    url: '/images/header/icon-search.png',
  },
  {
    id: 2,
    btnClass: 'iconWrap',
    iconClass: 'headerIcon',
    url: '/images/header/icon-heart.png',
  },
  {
    id: 3,
    btnClass: 'iconWrap',
    iconClass: 'headerIcon',
    url: '/images/header/icon-bag.png',
  },
  {
    id: 4,
    btnClass: 'iconWrap',
    iconClass: 'headerIcon',
    url: '/images/header/icon-eye.png',
  },
  {
    id: 5,
    btnClass: 'iconWrap',
    iconClass: 'headerIcon',
    url: '/images/header/icon-user.png',
  },
];

export default Header;

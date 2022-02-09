import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';

import './header.scss';

const Header = () => {
  const [navHandler, setnavHandler] = useState(false);
  const [inputValue, setInputValue] = useState('');
  // const [searchData, setSearchData] = useState([]);
  const [logOutput, setlogOutput] = useState(['로그인', '로그아웃']);

  const isLogin = () => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    } else {
      localStorage.removeItem('token');
      alert('로그아웃 되었습니다.');
      document.location.href = 'main';
    }
  };

  const navDisplayHandler = () => {
    setnavHandler(!navHandler);
  };

  // Event : 헤더 검색어 받아오기
  const inputValueRecord = event => {
    setInputValue(event.target.value);
  };

  // Event : 검색어 입력 값 조건에 따른 Link태그 이동 막기
  // event3 : 검색어 입력 값이 0 보다 작거나 같은 경우 Link태그 이동 막기
  /*
  const preventLinkHandler = ({ id, event }) => {
    if (id === 1) {
      if (inputValue.length <= 0) event.preventDefault();
    } else {
      event.preventDefault();
    }
  };
  */

  // Event : 엔터 키 입력 시 페이지 이동 및 value 전달
  const navigate = useNavigate();

  const handleClick = event => {
    if (event.key === 'Enter' && inputValue.length > 0) {
      navigate('/Search', {
        state: {
          inputValue: inputValue,
          productFilter: '여기에 백에서 전달받은 data를 집어넣어야 한닷!!!',
        },
      });
    }
  };

  // Event : 필터 처리 된 데이터 받아오기
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
          // inputValueRecord={inputValueRecord}
        />
      )}
      <div className="topMenuListWrap">
        <ul className="topMenuList">
          <li className="login" onClick={isLogin}>
            {!localStorage.getItem('token') ? logOutput[0] : logOutput[1]}
          </li>
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
          src="/images/header/header-logo.png"
        />
        <div className="searchAndIconWrap">
          <input
            className="searchInput"
            placeholder="검색어를 입력해주세요."
            onChange={inputValueRecord}
            onKeyPress={handleClick}
          />
          <div className="iconListWrap">
            {HEADER_ICON_LIST.map(
              ({ id, btnName, iconName, imgUrl, linkUrl }) => {
                return (
                  <Link
                    className={btnName}
                    to={linkUrl}
                    key={id}
                    /*
                    state={{
                      inputValue: inputValue,
                      productFilter:
                        '여기에 백에서 전달받은 data를 집어넣어야 한닷!!!',
                    }}
                    onClick={event => preventLinkHandler({ id, event })}
                    */
                  >
                    <img
                      alt="header menu icon"
                      src={imgUrl}
                      className={iconName}
                    />
                  </Link>
                );
              }
            )}
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
    buttonName: '회원가입',
    url: '/SignUp',
  },
  {
    id: 2,
    buttonName: '매장찾기',
    url: '/Main',
  },
  {
    id: 3,
    buttonName: '브랜드헤리티지',
    url: '/Main',
  },
  {
    id: 4,
    buttonName: '고객센터',
    url: '/Main',
  },
];

// 상수 데이터 2 : 헤더 상단 버튼 리스트
const HEADER_ICON_LIST = [
  {
    id: 1,
    btnName: 'iconWrap',
    iconName: 'headerIcon',
    imgUrl: '/images/header/icon-search.png',
    linkUrl: '/Search',
  },
  {
    id: 2,
    btnName: 'iconWrap',
    iconName: 'headerIcon',
    imgUrl: '/images/header/icon-heart.png',
    linkUrl: '/Search',
  },
  {
    id: 3,
    btnName: 'iconWrap',
    iconName: 'headerIcon',
    imgUrl: '/images/header/icon-bag.png',
    linkUrl: '/WishList',
  },
  {
    id: 4,
    btnName: 'iconWrap',
    iconName: 'headerIcon',
    imgUrl: '/images/header/icon-eye.png',
    linkUrl: '/Search',
  },
  {
    id: 5,
    btnName: 'iconWrap',
    iconName: 'headerIcon',
    imgUrl: '/images/header/icon-user.png',
    linkUrl: '/MyPage',
  },
];

export default Header;

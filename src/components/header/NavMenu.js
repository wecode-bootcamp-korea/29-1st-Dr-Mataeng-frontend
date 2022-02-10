import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavMenu = ({
  id,
  name,
  arrowClass,
  arrowIcon,
  listMan,
  listFemale,
  listAll,
  navDisplayHandler,
}) => {
  const [btnHandler, setbtnHandler] = useState(false);

  const btnDisplayHandler = () => {
    setbtnHandler(!btnHandler);
  };

  return (
    <div className="NavMenu" key={id}>
      <div className="menuTitleWrap">
        <span className="menuName">{name}</span>
        <button className="downArrowBtn" onClick={btnDisplayHandler}>
          <img
            alt="down arrow icon"
            className={arrowClass}
            src={
              id > 11
                ? arrowIcon
                : btnHandler
                ? '/images/header/icon-up-arrow.png'
                : arrowIcon
            }
          />
        </button>
      </div>
      {id < 12 && (
        <ul className={btnHandler ? 'menuListWrap' : 'menuListWrapHide'}>
          <li className="menuList">
            <Link
              to="/ProductList"
              className="menu"
              onClick={navDisplayHandler}
            >
              {listMan}
            </Link>
          </li>
          <li className="menuList">
            <Link
              to="/ProductList"
              className="menu"
              onClick={navDisplayHandler}
            >
              {listFemale}
            </Link>
          </li>
          <li className="menuList">
            <Link
              to="/ProductList"
              className="menu"
              onClick={navDisplayHandler}
            >
              {listAll}
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavMenu;

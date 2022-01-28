import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavMenu = props => {
  const [btnHandler, setbtnHandler] = useState(false);

  const btnDisplayHandler = () => {
    setbtnHandler(!btnHandler);
  };

  // ㅎㅎ
  return (
    <div className="NavMenu" key={props.id}>
      <div className="menuTitleWrap">
        <span className="menuName">{props.name}</span>
        <button className="downArrowBtn" onClick={btnDisplayHandler}>
          <img
            alt="down arrow icon"
            className={props.arrowClass}
            src={
              props.id > 11
                ? props.arrowIcon
                : btnHandler
                ? '/images/header/icon-up-arrow.png'
                : props.arrowIcon
            }
          />
        </button>
      </div>
      {props.id < 12 && (
        <ul className={btnHandler ? 'menuListWrap' : 'menuListWrapHide'}>
          <li className="menuList">
            <Link to="/ProductList" className="menu">
              {props.listMan}
            </Link>
          </li>
          <li className="menuList">
            <Link to="/ProductList" className="menu">
              {props.listFemale}
            </Link>
          </li>
          <li className="menuList">
            <Link to="/ProductList" className="menu">
              {props.listAll}
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavMenu;

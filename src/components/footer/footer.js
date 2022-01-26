import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footerWrap">
      <div className="footerPositionWrap">
        <ul className="footerMenuListWrap">
          {footerMenuList.map(el => (
            <li className="footerMenuList" key={el.id}>
              <a href="#" className="footerMenu">
                {el.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="socialIconListWrap">
          {socialIconList.map(el => (
            <button key={el.id} className="socialIconWrap">
              <img alt="socialIcon" className="socialIcon" src={el.url} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// 상수 데이터 1 : 푸터 메뉴 리스트
const footerMenuList = [
  {
    id: 1,
    name: '이용약관',
  },
  {
    id: 2,
    name: '개인정보취급방침',
  },
  {
    id: 3,
    name: '매장찾기',
  },
  {
    id: 4,
    name: 'CONTACT',
  },
  {
    id: 5,
    name: '사이트 맵',
  },
];

// 상수 데이터 2 : 소셜 아이콘 리스트
const socialIconList = [
  {
    id: 1,
    url: '/images/footer/social-twitter.png',
  },
  {
    id: 2,
    url: '/images/footer/social-youtube.png',
  },
  {
    id: 3,
    url: '/images/footer/social-facebook.png',
  },
  {
    id: 4,
    url: '/images/footer/social-instagram.png',
  },
];

export default Footer;

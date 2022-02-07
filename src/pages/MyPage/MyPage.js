import React from 'react';
import MypagePoints from './MypagePoints';
import './MyPage.scss';

const Mypage = () => {
  return (
    <main className="Mypage">
      <section className="imgUploadWrap">
        <img
          alt="dr mataeng logo"
          className="defaultImg"
          src="/images/mypage/logo@3x.png"
        />
        <div className="imgUploadBtn">
          <img
            alt="photo icon"
            className="uploadBtnImg"
            src="/images/mypage/img_profile.png"
          />
        </div>
      </section>
      <section className="infoWrap">
        <div className="infoGreetingsWrap">
          <button type="button" className="gearBtn">
            <img
              alt="gear icon"
              className="gearBtnImg"
              src="/images/mypage/btn_mypageSetting.jpeg"
            />
          </button>
          <span className="userName">
            <strong>유재민님,</strong>
          </span>
          <span className="greetings">환영합니다.</span>
        </div>
        <div className="userRankWrap">
          <p className="userRank">DOCS FAMILY</p>
        </div>
        <div className="userPoingWrap">
          {POINT_LIST.map(({ id, pointType, pointHistory, url }) => (
            <MypagePoints
              key={id}
              label={pointType}
              point={pointHistory}
              url={url}
            />
          ))}
        </div>
        <div className="userLogout">
          <button className="logout">로그아웃</button>
        </div>
      </section>
    </main>
  );
};

// 상수 데이터 : 포인트
const POINT_LIST = [
  {
    id: 1,
    pointType: '포인트',
    pointHistory: 10000,
    url: '/images/mypage/img_summary01.jpeg',
  },
  {
    id: 2,
    pointType: '쿠폰',
    pointHistory: 1,
    url: '/images/mypage/img_summary02.jpeg',
  },
  {
    id: 3,
    pointType: '미션',
    pointHistory: 4,
    url: '/images/mypage/img_summary03.jpeg',
  },
];

export default Mypage;

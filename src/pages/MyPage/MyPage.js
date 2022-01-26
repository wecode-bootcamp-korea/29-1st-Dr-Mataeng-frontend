import React from 'react';
import MypagePoints from './MypagePoints';
import './MyPage.scss';

const Mypage = () => {
  return (
    <div className="MypageWrap">
      <div className="imgUploadWrap">
        <img
          alt="defaultImg"
          className="imgUploadDefault"
          src="/images/mypage/logo@3x.png"
        />
        <div className="imgUploadBtn">
          <img
            alt="buttonImg"
            className="imgUploadBtnImg"
            src="/images/mypage/img_profile.png"
          />
        </div>
      </div>
      <div className="myPageInfoWrap">
        <div className="myPageInfoWelcome">
          <button type="button" className="gearBtn">
            <img
              alt="gearBtnImg"
              className="gearBtnImg"
              src="/images/mypage/btn_mypageSetting.jpeg"
            />
          </button>
          <span className="myPageUserName">
            <strong>유재민님,</strong>
          </span>
          <span className="myPageGreetings">환영합니다.</span>
        </div>
        <div className="MypageInformationLevel">
          <p className="myPageLevel">DOCS FAMILY</p>
        </div>
        <div className="MypageSummaryItems">
          {pointList.map(el => (
            <MypagePoints
              key={el.id}
              label={el.pointLabel}
              point={el.holdingPoint}
              url={el.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 상수 데이터 : 포인트
const pointList = [
  {
    id: 1,
    pointLabel: '포인트',
    holdingPoint: 10000,
    url: '/images/mypage/img_summary01.jpeg',
  },
  {
    id: 2,
    pointLabel: '쿠폰',
    holdingPoint: 1,
    url: '/images/mypage/img_summary02.jpeg',
  },
  {
    id: 3,
    pointLabel: '미션',
    holdingPoint: 4,
    url: '/images/mypage/img_summary03.jpeg',
  },
];

export default Mypage;

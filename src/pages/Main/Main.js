import React from 'react';
import './Main.scss';
import ImageSlide from '../Main/ImageSlide';

const Main = () => {
  return (
    <>
      <ImageSlide />
      <div className="container">
        <div className="collection">
          <div className="textWrap">
            <div className="subTitle"> 2022년 검은 호랑이의 해 기념 컬렉션</div>
            <div className="collectTitle">YEAR OF THE TIGER</div>
            <div className="titleLine" />
          </div>
          <div className="collectionImg">
            <img src="images/main/tiger.jpg" alt="tiger" />
          </div>
          <div className="textWrap">
            <div className="descript">
              2022년 검은 호랑이의 해를 맞이하여 <br /> 신년 한정판 컬렉션을
              만나보세요.
            </div>
            <div className="descriptBt">
              <span>자세히 보기</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

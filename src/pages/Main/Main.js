import { React } from 'react';
import './Main.scss';
import ImageSlide from '../Main/ImageSlide';

const Main = () => {
  return (
    <>
      <ImageSlide />
      <div className="container">
        <div className="mainWrap">
          <div className="textWrap">
            <h2 className="mdTitle">MD 추천</h2>
            <div className="productTabs">
              <button className="productBt">
                <span>오드릭</span>
              </button>
              <button className="productBt">
                <span>온라인전용</span>
              </button>
              <button className="productBt">
                <span>부츠</span>
              </button>
              <button className="productBt">
                <span>비건</span>
              </button>
              <button className="productBt">
                <span>콜라보레이션</span>
              </button>
              <button className="productBt">
                <span>기타용품</span>
              </button>
            </div>
            <div className="productSwiper">
              <div className="productLeft">
                <div className="productTop">
                  <h2 className="productName">제이든 하이</h2>
                </div>
                <div className="swiperImg">
                  <img src="images/main/product2.jpg" alt="product" />
                </div>
              </div>
              <div className="productLeft">
                <div className="productTop">
                  <h2 className="productName">오드릭 부츠</h2>
                </div>
                <div className="swiperImg">
                  <img src="images/main/product1.jpg" alt="product" />
                </div>
              </div>
            </div>
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

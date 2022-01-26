import React from 'react';
import './Main.scss';

const Main = () => {
  let count = 0;
  const showPrevImage = () => {
    if (count < 0 && count > -400) {
      count = count + 100;
    } else if (count === 0) {
      count = -300;
    }
    return count;
  };

  const showNextImage = () => {
    //console.log(count);
    if (count > -300 && count < 100) {
      count = count - 100;
      return count;
    } else if (count === -300) {
      count = 0;
      return count;
    }
  };

  console.log(count);

  return (
    <>
      <div className="container">
        <div className="albums">
          <div className="images">
            <div className="img1"></div>
            <div className="img2"></div>
            <div className="img3"></div>
            <div className="img4"></div>
          </div>
        </div>
      </div>
      <div className="nextButton">
        <button onClick={showPrevImage}>뒤로</button>
        <button onClick={showNextImage}>다음</button>
      </div>
    </>
  );
};

export default Main;

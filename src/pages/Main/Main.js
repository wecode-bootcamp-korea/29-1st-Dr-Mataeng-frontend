import React, { useState } from 'react';
import './Main.scss';

const Main = () => {
  const [count, setCount] = useState(0);
  const showPrevImage = () => {
    let num = count;
    if (num < 0 && num > -4) {
      num = num + 1;
    } else if (num === 0) {
      num = -3;
    }
    return setCount(num);
  };

  const showNextImage = () => {
    let num = count;
    if (num > -3 && num < 1) {
      num = num - 1;
    } else if (num === -3) {
      num = 0;
    }
    return setCount(num);
  };

  return (
    <>
      <div className="container">
        <div className="albums">
          <div className="images" style={{ left: count * 100 + '%' }}>
            <img src="images/main/main0.jpg" alt="shoes" />
            <img src="images/main/main1.jpg" alt="shoes" />
            <img src="images/main/main2.jpg" alt="shoes" />
            <img src="images/main/main3.jpg" alt="shoes" />
          </div>
        </div>
      </div>
      <div className="nextButton">
        <button onClick={showPrevImage}>
          <img src="images/icon/prev.png" alt="previous button" />
        </button>
        <button onClick={showNextImage}>
          <img src="images/icon/next.png" alt="next button" />
        </button>
      </div>
    </>
  );
};

export default Main;

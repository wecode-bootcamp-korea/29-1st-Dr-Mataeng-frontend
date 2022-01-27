import React, { useState } from 'react';
import './Main.scss';

const Main = () => {
  const [count, setCount] = useState(0);
  const showPrevImage = () => {
    let num = count;
    if (num < 0 && num > -400) {
      num = num + 100;
    } else if (num === 0) {
      num = -300;
    }
    return setCount(num);
  };

  const showNextImage = () => {
    let num = count;
    if (num > -300 && num < 100) {
      num = num - 100;
    } else if (num === -300) {
      num = 0;
    }
    return setCount(num);
  };

  console.log(count);

  return (
    <>
      <div className="container">
        <div className="albums">
          <div className="images" style={{ left: count + '%' }}>
            <img src="images/main/main0.jpg" />
            <img src="images/main/main1.jpg" />
            <img src="images/main/main2.jpg" />
            <img src="images/main/main3.jpg" />
          </div>
        </div>
      </div>
      <div className="nextButton">
        <button onClick={showPrevImage}>
          <img src="images/icon/prev.png" />
        </button>
        <button onClick={showNextImage}>
          <img src="images/icon/next.png" />
        </button>
      </div>
    </>
  );
};

export default Main;

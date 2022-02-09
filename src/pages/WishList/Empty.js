import React from 'react';
import { useNavigate } from 'react-router-dom';

const Empty = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/Main');
  };

  return (
    <div className="cartBaseContainer">
      <div className="cartContainer">
        <div className="cartContainer empty">
          <div className="emptyCartImage">
            <img alt="emptycart" src="images/icon/shopping-cart.png" />
          </div>
          <div className="emptyCartComment">
            <span>장바구니가 비었습니다.</span>
          </div>
          <button onClick={goToMain}>
            <span>쇼핑 계속하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Empty;

import React from 'react';
import OrderProduct from './OrderProduct';
import OrderPrice from './OrderPrice';

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart container">
        <div className="containerRow">
          <div className="controlCheckbox">
            <div className="checkbox">
              <input type="checkbox" />
              <span>전체선택</span>
            </div>
            <div className="deleteButton">
              <button>
                <img src="images/icon/shopping-cart.png" />
                <span>선택삭제</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cart container">
        <OrderProduct />
        <OrderPrice />
      </div>
    </div>
  );
};

export default Cart;

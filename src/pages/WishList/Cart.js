import React from 'react';
import OrderPrice from './OrderPrice';
import OrderProduct from './OrderProduct';

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
                <img src="images/icon/trash-can.png" />
                <span>선택 삭제</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cartBox">
        <OrderProduct />
        <OrderPrice />
      </div>
    </div>
  );
};

export default Cart;

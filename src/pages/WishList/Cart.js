import React from 'react';
import OrderPrice from './OrderPrice';
import WISHLIST_DATA from './WishListData';
import ProductList from './ProductList';

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
        <div className="cartBoxContainer">
          <ul className="orderProductList">
            {WISHLIST_DATA.map(product => {
              return (
                <ProductList
                  key={product.id}
                  name={product.product_name}
                  img={product.thumbnail_img}
                  price={product.price}
                  color={product.color}
                  size={product.size}
                  option={product.option}
                />
              );
            })}
          </ul>
        </div>
        <OrderPrice />
      </div>
    </div>
  );
};

export default Cart;

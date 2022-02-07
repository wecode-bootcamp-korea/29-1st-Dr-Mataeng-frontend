import React from 'react';

function ProductList(props) {
  return (
    <li className="itemList">
      <div className="productContainer">
        <div className="productBox">
          <img src={props.image} alt="productimage" />
          <div className="productInfoBox">
            <div className="productInfo">
              <h2>{props.productName}</h2>
              <ul className="productDetail">
                <li>컬러 : {props.color} </li>
                <li>사이즈 : {props.size}</li>
                <li>수량 : {props.quantity}</li>
                <li className="point">포인트 사용 불가</li>
              </ul>
            </div>
            <div className="productPrice">
              <span className="mark">₩</span>
              <span className="price">{props.price}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productFooter">
        <div className="wishButton">
          <img alt="heartbutton" src="images/header/icon-heart.png" />
          <span>{props.like}</span>
        </div>
        <div className="wishListButton">
          <button>위시리스트 담기</button>
        </div>
      </div>
    </li>
  );
}

export default ProductList;

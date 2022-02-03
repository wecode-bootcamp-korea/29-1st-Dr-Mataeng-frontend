import react from 'react';

const OrderProduct = () => {
  return (
    <div className="cartBoxContainer">
      <ul className="orderProductList">
        <li className="itemList">
          <div className="productContainer">
            <div className="productBox">
              <img src="images/main/main0.jpg" alt="productimage" />
              <div className="productInfo">
                <h2>제품명</h2>
                <ul className="productDetail">
                  <li>컬러</li>
                  <li>사이즈</li>
                  <li>수량</li>
                  <li className="point">포인트 사용 불가</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="productFooter">
            <div className="wishButton">
              <img alt="heartbutton" src="images/header/icon-heart.png" />
              <span>200</span>
            </div>
            <div className="wishListButton">
              <button>위시리스트 담기</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OrderProduct;

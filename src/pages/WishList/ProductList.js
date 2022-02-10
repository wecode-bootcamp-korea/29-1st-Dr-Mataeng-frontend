import React from 'react';
import { useNavigate } from 'react-router-dom';
import END_POINT from '../../config';

const ProductList = ({ list, cart, setCart }) => {
  const {
    cart_id,
    product_id,
    product_name,
    product_image,
    product_color,
    product_size,
    quantity,
    price,
    product_like,
  } = list;

  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/productDetail/${product_id}`);
  };

  const deleteHandler = () => {
    setCart(cart.filter(cart => cart.cart_id !== cart_id));
    fetch(END_POINT.wishList + `?cart_id=${cart_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
  };

  return (
    <li className="itemList">
      <div className="productContainer">
        <div className="productBox">
          <img src={product_image} onClick={goToDetail} alt="productimage" />
          <div className="productInfoBox">
            <div className="productInfo">
              <h2>{product_name}</h2>
              <ul className="productDetail">
                <li>컬러 : {product_color} </li>
                <li>사이즈 : {product_size}</li>
                <li>수량 : {quantity}</li>
                <li className="point">포인트 사용 불가</li>
              </ul>
            </div>
            <div className="productPrice">
              <span className="mark">₩</span>
              <span className="price">{price}</span>
            </div>
          </div>
          <div className="deleteButton">
            <button>
              <img
                src="images/icon/cancel.png"
                alt="deleteicon"
                onClick={deleteHandler}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="productFooter">
        <div className="wishButton">
          <img alt="heartbutton" src="images/header/icon-heart.png" />
          <span>{product_like}</span>
        </div>
        <div className="wishListButton">
          <button>위시리스트 담기</button>
        </div>
      </div>
    </li>
  );
};

export default ProductList;

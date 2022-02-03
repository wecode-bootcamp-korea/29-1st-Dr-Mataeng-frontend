//import react from 'react';
import WISHLIST_DATA from './WishListData';
import ProductList from './ProductList';

const OrderProduct = () => {
  return (
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
  );
};

export default OrderProduct;

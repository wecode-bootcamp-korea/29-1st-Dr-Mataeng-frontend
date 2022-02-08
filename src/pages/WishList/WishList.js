import React, { useEffect, useState } from 'react';

const WishList = () => {
  const [cartList, setCartList] = useState([]);

  const totalPrice = cartList.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  useEffect(() => {
    setCartList(CART_LIST);
  }, []);

  return <div />;
};

export default WishList;

const CART_LIST = [
  { name: 1, price: 5000 },
  { name: 2, price: 5000 },
  { name: 3, price: 5000 },
  { name: 4, price: 5000 },
  { name: 5, price: 5000 },
  { name: 6, price: 5000 },
  { name: 7, price: 5000 },
  { name: 8, price: 5000 },
];

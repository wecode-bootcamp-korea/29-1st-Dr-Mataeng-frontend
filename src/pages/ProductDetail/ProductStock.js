import React from 'react';
import { useState } from 'react';

const ProductStock = ({ size_id, size, stock }) => {
  // 버튼 활성화
  const [btnActive, setBtnActive] = useState('');

  const sizeStockCheckHandler = (size_id, event) => {
    setBtnActive(!btnActive);
  };

  return (
    <li className="optionsWrap">
      <button
        disabled={stock === 0}
        name={size_id}
        className={btnActive ? 'optionsBtnActive' : 'optionsBtn'}
        onClick={event => sizeStockCheckHandler(size_id, event)}
      >
        <span className="size">{size}</span>
        {stock > 5 && <span className="quantity">재고 5개 미만</span>}
        {stock === 0 && <span className="quantity">일시품절</span>}
      </button>
    </li>
  );
};

export default ProductStock;

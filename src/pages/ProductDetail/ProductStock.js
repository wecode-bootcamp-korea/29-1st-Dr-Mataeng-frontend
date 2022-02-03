import React from 'react';
import { useState } from 'react';

const ProductStock = ({ size_id, size, stock }) => {
  // 버튼 활성화
  const [btnActive, setBtnActive] = useState('');

  const sizeStockCheckHandler = (size_id, event) => {
    setBtnActive(!btnActive);

    // console.log(event.target);
    // console.log(event.currentTarget);
    // console.log(size_id);
    // console.log(Number(event.target.name) === size_id);

    // const checkboxes = document.getElementsByName('optionsBtnActive');
    // console.log(checkboxes.className);

    // checkboxes.forEach(checkboxes => {
    //   checkboxes.className = setBtnActive(!btnActive);
    //   console.log(checkboxes.className);
    // });
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

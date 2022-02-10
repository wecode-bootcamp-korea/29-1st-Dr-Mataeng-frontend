import React from 'react';
import './Pagination.scss';

function Pagination({ updateOffset }) {
  return (
    <div className="pagiNation">
      <button className="pageBt" onClick={() => updateOffset(0)}>
        1
      </button>
      <button className="pageBt" onClick={() => updateOffset(1)}>
        2
      </button>
      <button className="pageBt" onClick={() => updateOffset(2)}>
        {' '}
        3
      </button>
      <button className="pageBt" onClick={() => updateOffset(3)}>
        4
      </button>
      <button className="pageBt" onClick={() => updateOffset(4)}>
        5
      </button>
    </div>
  );
}

export default Pagination;

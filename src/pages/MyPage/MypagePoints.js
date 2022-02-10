import React from 'react';

const MypagePoints = ({ id, label, point, url, moneyPoing }) => {
  return (
    <div className="userPoingHistoryWrap" key={id}>
      <img alt="point icon" className="pointIcon" src={url} />
      <span className="pointIconName">{label}</span>
      {label === '포인트' ? (
        <span className="holdingPoints">{moneyPoing}</span>
      ) : (
        <span className="holdingPoints">{point}</span>
      )}
    </div>
  );
};

export default MypagePoints;

import React from 'react';

const MypagePoints = ({ id, label, point, url }) => {
  return (
    <div className="userPoingHistoryWrap" key={id}>
      <img alt="point icon" className="pointIcon" src={url} />
      <span className="pointIconName">{label}</span>
      <span className="holdingPoints">{point}</span>
    </div>
  );
};

export default MypagePoints;

import React from 'react';

const MypagePoints = ({ id, label, point, url }) => {
  return (
    <div className="SummaryItemsWrap" key={id}>
      <img alt="summaryIcon" className="summaryIcons" src={url} />
      <span className="summaryIconName">{label}</span>
      <span className="holdingPoints">{point}</span>
    </div>
  );
};

export default MypagePoints;

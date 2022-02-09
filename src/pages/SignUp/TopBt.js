import { useState, useEffect } from 'react';
import './TopBt.scss';

function TopBt() {
  const [scroll, setScroll] = useState(0);
  const [btStatus, setBtStauts] = useState(false);

  const handleScroll = () => {
    setScroll(window.pageYOffset);
    if (scroll > 50) {
      setBtStauts(true);
    } else {
      setBtStauts(false);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScroll(0);
    setBtStauts(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleScroll);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className="topWrap">
      <button className={btStatus ? 'topBt' : 'topActive'} onClick={handleTop}>
        <img src="images/topBt/up-arrow.png" alt="upBt" />
      </button>
    </div>
  );
}

export default TopBt;

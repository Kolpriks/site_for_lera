import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${loading ? 'show' : 'hide'}`}>
      <div className="loader-text">PhotObject</div>
    </div>
  );
};

export default Preloader;

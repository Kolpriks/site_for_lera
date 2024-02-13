import React, { useEffect, useState } from 'react';
import styles from '../../styles/Preloader.module.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.preloader} ${loading ? styles.show : styles.hide}`}>
				<div className={styles.loaderText}>PhotObject</div>
		</div>
  );
};

export default Preloader;

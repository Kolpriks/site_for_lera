import React from 'react';
import styles from '../../../styles/WhyUsCard.module.css';
import Image from 'next/image'

const WhyUsCard = ({ text1, text2, frame }) => {
	return (
		<div className={styles['why-us-card']}>
			<Image src={frame} alt="frame" className={styles['why-us-img']} />
			<div className={styles['why-us-text-container']}>
				<p className={styles.accent}>{text1}</p>
				<p>{text2}</p>
			</div>
		</div>
	);
};

export default WhyUsCard;

import React from 'react';
import styles from '../../styles/Team.module.css';

const TeamPhotoCard = ({ photo, frame }) => {
    return (
        <div className={styles.teamCardWrap}>
            <div className={styles.teamCardPhotoFrame}>
                <img src={frame} alt='photo frame' />
                <div className={styles.photoContent}>
                    <img src={photo} alt='employee photo' className={styles.employeePhoto} />
                </div>
            </div>
        </div>
    );
}

export default TeamPhotoCard;

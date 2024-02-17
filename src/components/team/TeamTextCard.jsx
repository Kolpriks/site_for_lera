import React from 'react';
import styles from '../../styles/Team.module.css';

const TeamTextCard = ({ name, position, description, frame }) => {
    return (
        <div className={styles.teamTextFrame}>
            <img src={frame} alt='text frame' className={styles.teamCardImg} />
            <div className={styles.textContent}>
                <p className={styles.accentName}>{name}</p>
                <p className={styles.teamCardPosition}>{position}</p>
                <p className={styles.teamCardDescription}>{description}</p>
            </div>
        </div>
    );
}

export default TeamTextCard;

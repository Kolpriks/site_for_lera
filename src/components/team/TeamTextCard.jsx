import React from 'react';
import styles from '../../styles/Team.module.css'; // Импортируем модуль CSS

const TeamTextCard = ({ name, position, description, frame }) => {
    return (
        <div className={styles.teamTextFrame}> {/* Используем стили из модуля CSS */}
            <img src={frame} alt='text frame' className={styles.teamCardImg} /> {/* Используем стили из модуля CSS */}
            <div className={styles.textContent}> {/* Используем стили из модуля CSS */}
                <p className={styles.accentName}>{name}</p> {/* Используем стили из модуля CSS */}
                <p className={styles.teamCardPosition}>{position}</p> {/* Используем стили из модуля CSS */}
                <p className={styles.teamCardDescription}>{description}</p> {/* Используем стили из модуля CSS */}
            </div>
        </div>
    );
}

export default TeamTextCard;

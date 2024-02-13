import React from 'react';
import styles from '../../styles/Team.module.css';
import Image from 'next/image'; // Импортируем компонент Image из next/image
import TeamTextCard from './TeamTextCard'
import TeamPhotoCard from './TeamPhotoCard'

const Team = () => {
    return (
        <div className={styles.teamContainer} id='team'>
            <div className={styles.positionRelative}>
                {/* Используем компонент Image для отображения изображений */}
								<Image className={`${styles.cornerImage} ${styles.topLeft}`} src="/TeamImages/left-top-black-corner.svg" alt="top-left" width={100} height={100} />
								<Image className={`${styles.cornerImage} ${styles.topRight}`} src="/TeamImages/rigth_top_corner.svg" alt="top-right" width={100} height={100} />
            </div>
            <h2>команда</h2>
            <div className={styles.teamRightCard}>
                {/* Используем компонент Image для отображения изображений */}
                <TeamTextCard name='Богдан' position='Оператор' 
                    description='Профессионал, который 
                    сделает вам потрясающие 
                    фотокарточки и отретуширует 
                    всё по красоте' frame="/TeamImages/orange-top-bottom-text.svg" />
                <TeamPhotoCard photo="/TeamImages/bogdanPhoto.jpg" frame="/TeamImages/black_frame.svg"/>
            </div>
            <div className={styles.teamLeftCard}>
                {/* Используем компонент Image для отображения изображений */}
                <TeamPhotoCard photo="/TeamImages/photoAnna.png" frame="/TeamImages/orange_frame.svg"/>
                <TeamTextCard name='Анна' position='Визажист' 
                    description='поможет моделям стать 
                    ещё более обворожительными и подчеркнет 
                    их достоинства' frame="/TeamImages/black-top-bottom-text.svg" />
            </div>
            <div className={styles.teamRightCard}>
                {/* Используем компонент Image для отображения изображений */}
                <TeamTextCard name='Валерия' position='Продюсер' 
                    description='Быстро и качественно 
                    выйдет на связь, 
                    проведет бриф и сделает совместную 
                    работу комфортнее' frame="/TeamImages/orange-top-bottom-text.svg" />
                <TeamPhotoCard photo="/TeamImages/photoLera.png" frame="/TeamImages/black_frame.svg"/>
            </div>
            <div className={styles.positionRelative}>
                {/* Используем компонент Image для отображения изображений */}
                <Image className={`${styles.cornerImage} ${styles.bottomLeft}`} src="/TeamImages/left-bottom-orange-corner.svg" alt="bottom-left" width={100} height={100} />
                <Image className={`${styles.cornerImage} ${styles.bottomRight}`} src="/TeamImages/rigth_bottom_corner.svg" alt="bottom-right" width={100} height={100} />
            </div>
        </div>
    );
}

export default Team;

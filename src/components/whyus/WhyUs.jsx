import React from 'react';
import Image from 'next/image';
import styles from '../../styles/WhyUs.module.css';
import WhyUsCard from './whyuscard/WhyUsCard';
import svgFrame from '../../../public/images/frame.svg';
import whyUsLogo from '../../../public/images/whyuslogo.png';
import left_bottom_corner from '../../../public/images/left-bottom-orange-corner.svg';
import left_top_corner from '../../../public/images/left-top-black-corner.svg';
import rigth_top_corner from '../../../public/images/rigth_top_corner.svg';
import rigth_bottom_corner from '../../../public/images/rigth_bottom_corner.svg';

const WhyUs = () => {
    const textOneAccent = 'Современное оборудование и технологии';
    const textOne = 'Включает в себя использование профессиональных камер, освещения и программного обеспечения';

    const textTwoAccent = 'Индивидуальный подход к каждому проекту';
    const textTwo = 'Наши фотографы тщательно изучают особенности объекта и предметов, чтобы создать индивидуальный и запоминающийся образ';

    const textThreeAccent = 'Разнообразие стилей и подходов';
    const textThree = 'Наша команда фотографов владеет различными стилями и подходами к предметной съемке';

    const textFourAccent = 'Профессиональные фотографы с опытом';
    const textFour = 'Наши специалисты обеспечивают высокий уровень мастерства и предоставляют качественные и эстетичные изображения';

    return (
        <div className={styles.wrap} id='whyus'>
            <div className={styles['position-relative']}>
                <Image className={`${styles['corner-image']} ${styles['top-left']}`} src={left_top_corner} alt="top-left" />
                <Image className={`${styles['corner-image']} ${styles['top-right']}`} src={rigth_top_corner} alt="top-right" />
            </div>

            <h1>Почему мы?</h1>

            <div className={`${styles.cards} ${styles['cards-top']}`}>
                <WhyUsCard text1={textTwoAccent} text2={textTwo} frame={svgFrame} />
                <WhyUsCard text1={textOneAccent} text2={textOne} frame={svgFrame} />
            </div>

            <div className={styles['centered-container']}>
                <Image src={whyUsLogo} alt="why-logo" />
            </div>

            <div className={styles.cards}>
                <WhyUsCard text1={textThreeAccent} text2={textThree} frame={svgFrame} />
                <WhyUsCard text1={textFourAccent} text2={textFour} frame={svgFrame} />
            </div>

            <div className={styles['position-relative']}>
                <Image className={`${styles['corner-image']} ${styles['bottom-left']}`} src={left_bottom_corner} alt="bottom-left" />
                <Image className={`${styles['corner-image']} ${styles['bottom-right']}`} src={rigth_bottom_corner} alt="bottom-right" />
            </div>
        </div>
    );
};

export default WhyUs;

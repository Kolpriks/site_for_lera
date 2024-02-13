import React from 'react';
import styles from '../../styles/Steps.module.css';
import arrowRight from '../../../public/arrows/arrow-right.svg';
import arrowLeft from '../../../public/arrows/arrow-left.svg';
import Image from 'next/image'

const Steps = () => {
    return (
        <div className={styles.stepsContainerWrap}>
            <h1>Как это работает?</h1>
            <div className={styles.stepsContainer}>

                <div className={styles.step}>
                    <div className={styles.stepText}>
                        <h2>01 Заявка</h2>
                        <p>Вы оставляете заявку на сайте, <br/>
                            после которого вам наберет менеджер и 
                            договорится с вами о брифинге</p>
                    </div>
                    <Image src={arrowRight} className={styles.arrow} alt='arrow right'/>
                </div>

                <div className={styles.stepSecond}>
                    <Image src={arrowLeft} className={styles.arrowRight} alt='arrow left'/>
                    <div className={styles.stepTextSecond}>
                        <h2>02 Брифинг</h2>
                        <p>Организовываем созвон на 30 минут после которого мы:</p>
                        <ul>
                            <li>Выясним потребности
                                <ul className={styles.secondUl}>
                                    <li>Составим ТЗ</li>
                                    <li>Разработаем концепцию</li>
                                </ul>
                            </li>
                            <li>Пришлем коммерческое предложение</li>
                            <li>Назначим дату съемок</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepText}>
                        <h2>03 Съемки</h2>
                        <ul>
                            <li>Приезжаем на студию</li>
                            <li>Выставляем оборудование</li>
                            <li>Проводим съемку</li>
                        </ul>
                    </div>
                    <Image src={arrowRight} className={styles.arrow} alt='arrow right'/>
                </div>

                <div className={styles.stepThird}>
                    <div className={styles.stepText}>
                        <h2>04 Ретушь</h2>
                        <ul>
                            <li>Редакция продукта</li>
                            <li>Правки</li>
                            <li>Сдача материала</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Steps;

import React from 'react';
import styles from '../../styles/Price.module.css';
import PriceCard from './PriceCard';

const Price = () => {
    const priceData = [
        { id: 1, name: 'Съемка на католог с выездом', price: '450р \\ фото', typeOfCard: 'white', typeOfButton: 'white-button' },
        { id: 2, name: 'Модельная съемка', price: '500р \\ фото', typeOfCard: 'orange', typeOfButton: 'orange-button' },
        { id: 3, name: 'Художественная съемка', price: '1000р \\ фото', typeOfCard: 'white', typeOfButton: 'white-button' },
        { id: 4, name: 'Модельная съемка с нашими моделями и гримером', price: '1000р \\ фото', typeOfCard: 'orange', typeOfButton: 'orange-button' },
        { id: 5, name: ['• Студия от нас ', <br/>, '• Услуги Визажиста'], price: ['• 2000р \\ час', <br/>, '• 600р \\ час'], typeOfCard: 'white', typeOfButton: 'white-button' }
    ];

    return (
        <div className={styles.priceContainerWrap} id='price'>
            <h1>Прайс</h1>
            <div className={styles.priceContainer}>
                {priceData.map((price) => (
                    <div className={styles.priceCard} key={price.id}>
                        <PriceCard
                            name={price.name}
                            price={price.price}
                            typeOfCard={price.typeOfCard}
                            typeOfButton={price.typeOfButton}
                        />
                    </div>
                ))}
            </div>
            <p className={styles.ps}>Минимальный заказ - 15 фото <br/> *Присутствуют скидки на объем</p>
        </div>
    );
}

export default Price;

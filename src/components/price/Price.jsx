import React from 'react'
import styles from '../../styles/Price.module.css'
import PriceCard from './PriceCard'


const Price = () => {
	return (
		<div className={styles.priceContainerWrap} id='price'>
			<h2>Прайс</h2>
			<div className={styles.priceContainer}>
				<div className={styles.priceCard}>
					<PriceCard name='Съемка на католог с выездом' price='450p \ фото' typeOfCard='white' typeOfButton='white-button'/>
				</div>
				<div className={styles.priceCard}>
					<PriceCard name='Модельная съемка' price='500р \ фото' typeOfCard='orange' typeOfButton='orange-button'/>
				</div>
				<div className={styles.priceCard}>
					<PriceCard name='Художественная съемка' price='1000p \ фото' typeOfCard='white' typeOfButton='white-button'/>
				</div>
				<div className={styles.priceCard}>
					<PriceCard name='Модельная съемка с нашими моделями и гримером' price='1000р \ фото' typeOfCard='orange' typeOfButton='orange-button'/>
				</div>
				<div className={styles.priceCard}>
					<PriceCard name={['• Студия от нас ', <br/>,'• Услуги Визажиста']} price={['• 2000р \\ час', <br/>,'• 600р \\ час']} typeOfCard='white' typeOfButton='white-button'/>
				</div>
			</div>
			<p className={styles.ps}>Минимальный заказ - 15 фото <br/> *Присутствуют скидки на объем</p>
		</div>
	)
}

export default Price

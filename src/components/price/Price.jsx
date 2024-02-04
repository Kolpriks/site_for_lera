import React from 'react'
import './Price.css'
import PriceCard from './PriceCard'

const Price = () => {
	return (
		<div className='price-container__wrap'>
			<h1>Прайс</h1>
			<div className='price-container'>
				<div className='price-card'>
					<PriceCard name='Съемка на католог с выездом' price='350p \ фото' typeOfCard='white' typeOfButton='white-button'/>
				</div>
				<div className='price-card'>
					<PriceCard name='Модельная съемка' price='- \ фото' typeOfCard='orange' typeOfButton='orange-button'/>
				</div>
				<div className='price-card'>
					<PriceCard name='Художественная съемка' price='900p \ фото' typeOfCard='white' typeOfButton='white-button'/>
				</div>
				<div className='price-card'>
					<PriceCard name='Модельная съемка с нашими моделями и гримером' price='- \ фото' typeOfCard='orange' typeOfButton='orange-button'/>
				</div>
				<div className='price-card'>
					<PriceCard name='Студия от нас' price='2000р \ час' typeOfCard='white' typeOfButton='white-button'/>
				</div>
			</div>
		</div>
	)
}

export default Price

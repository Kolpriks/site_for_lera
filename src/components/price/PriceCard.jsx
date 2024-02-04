import React, { useState } from 'react'
import PriceButton from '../buttons/PriceButton'
import './Price.css'
import MainButton from '../buttons/MainButton'


const PriceCard = ({name, price, typeOfCard, typeOfButton}) => {
	const [modalActive, setModalActive] = useState(false)
	return (
		<div className='price-card__contur'>
			<div className={(typeOfCard === 'orange') 
			? ['price-card__text', 'orange'].join(' ') 
			: ['price-card__text', 'white'].join(' ')}>
				<p className='name'>{name}</p>
				<p className='price'>{price}</p>
				<MainButton onModalToggle={(modalState) => setModalActive(modalState)} 
				text='Заявка' type={typeOfButton} />
			</div>
		</div>
	)
}

export default PriceCard

import React from 'react'
import './Buttons.css'


const PriceButton = (type) => {
	return (
		<div className='btn-container'>
			<div className={(type === 'white') ? 'btn-white' : 'btn-orange'}>
			</div>
		</div>
		
	)
}

export default PriceButton

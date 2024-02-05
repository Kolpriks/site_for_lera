import React from 'react'


const TeamTextCard = ({ name, position, description, frame}) => {
	return (
		<div className='team-text-frame'>
			<img src={frame} alt='text frame' className='team-card-img' />
			<div className='text-content'>
				<p className='accent-name'>{name}</p>
				<p className='team-card-position'>{position}</p>
				<p className='team-card-description'>{description}</p>
			</div>
		</div>
	)
}

export default TeamTextCard

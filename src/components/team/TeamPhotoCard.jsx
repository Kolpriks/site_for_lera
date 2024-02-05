import React from 'react'

const TeamPhotoCard = ({photo, frame}) => {
	return (
		<div className='team-card__wrap'>
			<div className='team-card-photo__frame'>
				<img src={frame} alt='photo frame'/>
				<div className='photo-content'>
					<img src={photo} alt='employee photo' className='employee-photo' />
				</div>
			</div>
		</div>
	)
}

export default TeamPhotoCard

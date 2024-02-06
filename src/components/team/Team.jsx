import React from 'react'
import './Team.css'

import rightPhotoFrame from './images/black_frame.svg';
import leftPhotoFrame from './images/orange_frame.svg';
import rigthTextFrame from './images/orange-top-bottom-text.svg';
import leftTextFrame from './images/black-top-bottom-text.svg';
import photoBogdan from './images/photoBordan.png'
import photoLera from './images/photoLera.png'
import photoAnna from './images/photoAnna.png'
import TeamTextCard from './TeamTextCard'
import TeamPhotoCard from './TeamPhotoCard';

import left_bottom_corner from './images/left-bottom-orange-corner.svg'
import left_top_corner from './images/left-top-black-corner.svg'
import rigth_top_corner from './images/rigth_top_corner.svg'
import rigth_bottom_corner from './images/rigth_bottom_corner.svg'

const Team = () => {
	return (
		<div className='team-container' id='team'>
			<div className="position-relative">
				<img className="corner-image top-left" src={left_top_corner} alt="top-left" />
				<img className="corner-image top-right" src={rigth_top_corner} alt="top-right" />
			</div>
			<h2>команда</h2>
			<div className='team-right-card'>
				<TeamTextCard name='Богдан' position='Оператор' 
				description='Профессионал, который 
				сделает вам потрясающие 
				фотокарточки и отретуширует 
				всё по красоте' frame={rigthTextFrame} />
				<TeamPhotoCard photo={photoBogdan} frame={rightPhotoFrame}/>
			</div>
			<div className='team-left-card'>
				<TeamPhotoCard photo={photoAnna} frame={leftPhotoFrame}/>
				<TeamTextCard name='Анна' position='Визажист' 
				description='поможет моделям стать 
				ещё более обворожительными и подчеркнет 
				их достоинства' frame={leftTextFrame} />
			</div>
			<div className='team-right-card'>
				<TeamTextCard name='Валерия' position='Продюсер' 
				description='Быстро и качественно 
				выйдет на связь, 
				проведет бриф и сделает совместную 
				работу комфортнее' frame={rigthTextFrame} />
				<TeamPhotoCard photo={photoLera} frame={rightPhotoFrame}/>
			</div>
			<div className="position-relative">
				<img className="corner-image bottom-left" src={left_bottom_corner} alt="bottom-left" />
				<img className="corner-image bottom-right" src={rigth_bottom_corner}  alt="bottom-right" />
			</div>
		</div>
	)
}

export default Team

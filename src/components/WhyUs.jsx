import React from 'react'
import './WhyUs.css'
import WhyUsCard from './WhyUsCard'
import svgFrame from '../images/frame.svg'
import whyUsLogo from '../images/whyuslogo.png'
import left_bottom_corner from '../images/left-bottom-orange-corner.svg'
import left_top_corner from '../images/left-top-black-corner.svg'
import rigth_top_corner from '../images/rigth_top_corner.svg'
import rigth_bottom_corner from '../images/rigth_bottom_corner.svg'


const WhyUs = () => {
	const textOneAccent = 'Современное оборудование и технологии'
	const textOne = 'Включает в себя использование профессиональных камер, освещения и программного обеспечения.'

	const textTwoAccent = 'Индивидуальный подход к каждому проекту'
	const textTwo = 'Наши фотографы тщательно изучают особенности объекта и предметов, чтобы создать индивидуальный и запоминающийся образ.'
	return (
		<div className='wrap'>

			<div className="position-relative">
				<img className="corner-image top-left" src={left_top_corner} alt="Изображение 1" />
				<img className="corner-image top-right" src={rigth_top_corner} alt="Изображение 2" />
			</div>

			<h2 >Почему мы?</h2>

			<div className='cards'>
				<WhyUsCard text1={textTwoAccent} text2={textTwo} frame={svgFrame}/>
				<WhyUsCard text1={textOneAccent} text2={textOne} frame={svgFrame}/>
			</div>

			<div className="centered-container">
				<img src={whyUsLogo} alt="why-logo" />
			</div>

			<div className='cards'>
				<WhyUsCard text1={textTwoAccent} text2={textTwo} frame={svgFrame}/>
				<WhyUsCard text1={textOneAccent} text2={textOne} frame={svgFrame}/>
			</div>

			<div className="position-relative">
				
				<img className="corner-image bottom-left" src={left_bottom_corner} alt="Изображение 3" />
				<img className="corner-image bottom-right" src={rigth_bottom_corner}  alt="Изображение 4" />
			</div>

		</div>

	)
}

export default WhyUs

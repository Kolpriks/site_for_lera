import React from 'react'
import './Steps.css'
import arrowRigth from './arrows/arrow-right.svg'
import arrowLeft from './arrows/arrow-left.svg'

const Steps = () => {
	return (
		<div className='steps-container__wrap'>
			<h1>Как это работает?</h1>
			<div className='steps-container'>

				<div className='step'>
					<div className='step__text'>
					<h2>01 Заявка</h2>
					<p>Вы оставляете заявку на сайте, <br/>
     				после которого вам наберет менеджер и 
     				договорится с вами о брифинге</p>
						</div>
				
					<img src={arrowRigth} className='arrow' alt='arrow rigth'/>
				</div>

				<div className='step-second'>
					<img src={arrowLeft} className='arrow-rigth' alt='arrow left'/>
					<div className='step__text-second'>
					<h2>02 Брифинг</h2>
					<p>Организовываем созвон на 30 минут после которого мы:</p>
					<ul>
						<li>Выясним потребности
							<ul className='second-ul'>
								<li>Составим ТЗ</li>
								<li>Разработаем концепцию</li>
							</ul>
						</li>
						<li>Пришлем коммерческое предложение</li>
						<li>Назначим дату съемок</li>
					</ul>
					</div>
				</div>

				<div className='step'>
					<div className='step__text'>
					<h2>03 Съемки</h2>
					<ul>
						<li>Приезжаем на студию</li>
						<li>Выставляем оборудование</li>
						<li>Проводим съемку</li>
					</ul>
					</div>
				
					<img src={arrowRigth} className='arrow' alt='arrow rigth'/>
				</div>

				<div className='step-third'>
					<div className='step__text'>
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
	)
}

export default Steps;
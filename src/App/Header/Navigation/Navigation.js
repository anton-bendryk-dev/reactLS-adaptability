import React from 'react';
import './navigation.css';
import ArrowDown from '../../../pictures/arrow-down.png';
const Navigation = () => {
	return (
		<div className="menu-container">
			<div className="col-width-25">
				<div className="menu-buttons"><a href="#Main">Главная</a></div>
			</div>
			<div className="col-width-25">
				<div className="menu-buttons"><a href="#Main">Компания<img src={ArrowDown} alt="" /></a>
					<div className="drop-menu">
						<div className="menu-buttons"><a href="#about-company">О Нас</a></div>
						<div className="menu-buttons"><a href="#partners">Наши Партнеры</a></div>
						<div className="menu-buttons"><a href="#Main">Наша Команда</a></div>
						<div className="menu-buttons"><a href="https://www.facebook.com/companylogisticssolutions/">Мы в Facebook</a></div>
						<div className="menu-buttons"><a href='https://www.work.ua/ru/jobs/by-company/1202656/'>Вакансии</a></div>
					</div>
				</div>
			</div>
			<div className="col-width-25">
				<div className="menu-buttons transport">
					<a href="#Main">Транспорт<img src={ArrowDown} alt="" /></a>
					<div className="drop-menu">
						<div className="menu-buttons"><a href="#Geography">География</a></div>
						<div className="menu-buttons"><a href="#Transport">Автомобильные</a></div>
						<div className="menu-buttons"><a href="#GroupageCargo">Сборные</a></div>
						<div className="menu-buttons"><a href="#Main">Страхование</a></div>
						<div className="menu-buttons"><a href="#Main">Таможеные услуги</a></div>
					</div>
				</div>
			</div>
			<div className="col-width-25" id="calculation-button">
				<div className="menu-buttons"><a href="#CostCalculation">Расчет Стоимости</a></div>
			</div>
		</div>
	)
}
export default Navigation
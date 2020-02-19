import React from 'react';
import './OurAdvantages.css';
import benefits1 from '../../pictures/benefits/benefits1.png';
import benefits2 from '../../pictures/benefits/benefits2.png';
import benefits3 from '../../pictures/benefits/benefits3.png';
import benefits4 from '../../pictures/benefits/benefits4.png';
import benefits5 from '../../pictures/benefits/benefits5.png';
import benefits6 from '../../pictures/benefits/benefits6.png';
import AboutCompany from '../About Company/AboutCompany'

const OurAdvantages = () => {
    return (
        <div>
            <AboutCompany/>
        <h2 className="OurAdvantages">НАШИ ПРЕИМУЩЕСТВА</h2>
        <div className="container-for-boxes">
            <div className="info-container">
                <div className="box-img"><img src={benefits1} alt=""/></div>
                <div className="box-text"><p>Получите груз вовремя, в установленные сроки</p></div>
            </div>
            <div className="info-container">
                <div className="box-img"><img src={benefits2} alt=""/></div>
                <div className="box-text"><p>Оперативно отправляем все закрывающие документы</p></div>
            </div>
            <div className="info-container">
                <div className="box-img"><img src={benefits3} alt=""/></div>
                <div className="box-text"><p>Вы всегда можете узнать местонахождение Вашего груза</p></div>
            </div>
            <div className="info-container">
                <div className="box-img"><img src={benefits4} alt=""/></div>
                <div className="box-text"><p>Наши цены одни из самых конкурентных на рынке</p></div>
            </div>
            <div className="info-container">
                <div className="box-img"><img src={benefits5} alt=""/></div>
                <div className="box-text"><p>Каждому клиенту мы выделяем личного менеджера, для связи</p></div>
            </div>
            <div className="info-container">
                <div className="box-img"><img src={benefits6} alt=""/></div>
                <div className="box-text"><p id="CostCalculation">Гарантии сохранности груза от момента получения до сдачи</p></div>
            </div>
        </div>
        </div>            
    )
}
export default OurAdvantages
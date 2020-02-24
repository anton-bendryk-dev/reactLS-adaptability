import React from 'react';
import './OurAdvantages.css';
import AboutCompany from '../About Company/AboutCompany';

const OurAdvantages = () => {
    return (
        <div>
            <AboutCompany/>
        <h2 className="OurAdvantages">НАШИ ПРЕИМУЩЕСТВА</h2>
        <div className="container-for-boxes">
            <div className="info-container advantages">
                <div className="box-img"><div className="benefits1"></div></div>
                <div className="box-text"><p>Получите груз вовремя, в установленные сроки</p></div>
            </div>
            <div className="info-container advantages">
                <div className="box-img"><div className="benefits2"></div></div>
                <div className="box-text"><p>Оперативно отправляем все закрывающие документы</p></div>
            </div>
            <div className="info-container advantages">
                <div className="box-img"><div className="benefits3"></div></div>
                <div className="box-text"><p>Вы всегда можете узнать местонахождение Вашего груза</p></div>
            </div>
            <div className="info-container advantages">
                <div className="box-img"><div className="benefits4"></div></div>
                <div className="box-text"><p>Наши цены одни из самых конкурентных на рынке</p></div>
            </div>
            <div className="info-container advantages">
                <div className="box-img"><div className="benefits5"></div></div>
                <div className="box-text"><p>Каждому клиенту мы выделяем личного менеджера, для связи</p></div>
            </div>
            <div className="info-container advantages">
                <div className="box-img"><div className="benefits6"></div></div>
                <div className="box-text"><p>Гарантии сохранности груза от момента получения до сдачи</p><div id="CostCalculation"></div></div>
                
            </div>
        </div>
        </div>            
    )
}
export default OurAdvantages
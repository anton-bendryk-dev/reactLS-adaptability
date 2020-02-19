import React from 'react';
import './geography.css';
import Flags from './Flags/Flags.js';
import ThreeArrows from '../../pictures/three-arrows.png';
import mezhdunarodnyye from '../../pictures/mezhdunarodnyye.jpg';
const Geography = () => {
    return (
        <div className="inline-main geography">
            <div className="side-bar side-bar-left">
                <Flags />
            </div>
            <div className="geography-content-container">
                <div className="geography-content">
                    <h2>География Грузоперевозок</h2>
                    <div className="delivery-map"></div>
                    <div className="three-arrows"><img src={ThreeArrows} alt="" /></div>
                    <div className="geography-container">
                        <div className="info-box">
                            <div className="front europe">
                                <div className="inner">
                                    <h3>Европа</h3>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>Квалифицированные сотрудники нашей компании сделают быстрый просчет доставки Вашего груза из любой точки Европы. Основные направления с которыми мы работаем: Эстония, Латвия, Литва, Германия, Италия, Франция, Испания, Чехия, Голландия, Бельгия, Польша. Наш опыт гарантирует доставку Вашего груза в место назначение быстро и качественно.</p>
                                </div>
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="front asia">
                                <div className="inner">
                                    <h3>Азия</h3>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>Наша география перевозок, также осуществляется в странах Азии. Наши специалисты сделают точный расчет маршрута и доставят Ваш груз в такие города как: Астана, Ташкент, Душанбе, Самарканд, Шыкмент, Караганда. Мы доставим Ваш груз максимально комфортно и качественно, с предоставлением всей необходимой документациии.</p>
                                </div>
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="front sng">
                                <div className="inner">
                                    <h3>СНГ</h3>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>Компания «LOGISTICS SOLUTIONS» предоставляет услуги по перевозке грузов в страны СНГ и города России, такие как: Москва, Санкт-Петербург, Воронеж, Новосибирск, Челябинск, Минск. Благодаря высокой квалификации наших сотрудников, мы доставим Ваш груз качественно и без непредвиденных обстоятельств.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="geography-info">
                        <div>
                            <p>Международные перевозки в европейские страны, государств СНГ и Азии – это пересечение нескольких границ и множество возможных осложнений в международных грузоперевозках.</p>
                            <p id="Transport">Вам не придется подбирать транспорт, заниматься оформлением документации и решать десятки сопутствующих вопросов – все это команда «LOGISTICS SOLUTIONS» выполнит с минимальными временными затратами и на безупречном уровне. Международные грузоперевозки с нами становятся не только быстрее и выгоднее – Вы можете не сомневаться в том, что груз прибудет на место в сохранности и без задержек.</p>
                        </div>
                        <div><img src={mezhdunarodnyye} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="side-bar side-bar-right">
                <Flags />
            </div>
        </div>
    )
}
export default Geography
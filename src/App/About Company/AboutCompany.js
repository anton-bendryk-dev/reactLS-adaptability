import React from 'react';
import './AboutCompany.css';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';

const AboutCompany = () => {
    return (
        <div className="about-company">
            <ScrollAnimation animateIn="fadeInLeft">
                <div className="info-container about-us">
                    <h2>О Нас:</h2>
                    <p>Компания Logistics Solutions, является одной из лучшей в предоставлении услуг грузоперевозок в Украине и за её пределами. Мы предоставляем услуги нашим клиентов, соблюдая все мировые стандарты качества. У нас работают только высококвалифицированные специалисты, которые курируют перевозки в отдаленные уголки мира.Выбирая нашу компанию, вы получаете гарантию надежности и качества оказываемых услуг. Мы строим Партнерские отношения в бизнесе, потому что для нас самое главное – ваше доверие. </p> 
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight">
            <div className="info-container services">
                <h3>Мы предоставляем такие услуги:</h3>	
                <ul>
                    <li>автоперевозки (экспорт, импорт) Европа и СНГ;</li>
                    <li>автоперевозки опасных грузов ADR всех классов;</li>
                    <li>автоперевозки по всей территории Украины;</li>
                    <li>консолидированные перевозки по всем направлениям;</li> 
                    <li>помощь в брокерских услугах;</li>
                    <li>автомобильная перевозка грузов от 1 тонны до 20 тонн;</li>
                    <li>предоставление полного пакета бухгалтерских документов;</li>
                    <li>удобная форма расчета;</li>
                    <li>перевозки грузов с особым температурным режимом;</li>
                    <li>перевозка негабаритных и тяжеловесных грузов;</li>
                </ul>	
            </div>
            </ScrollAnimation>
        </div>
    )
}
export default AboutCompany
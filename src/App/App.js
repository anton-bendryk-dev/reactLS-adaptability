import React from 'react';
import '../style/resetLs.css';
import '../style/ls.css';
import Header from './Header/Header.js';
import Slide from './Slide/Slide.js';
import OurAdvantages from './Our Advantages/OurAdvantages.js';
import Geography from './Geography/Geography.js';
import Transport from './Transport/Transport.js';
import GroupageCargo from './GroupageCargo/GroupageCargo.js';
import Partners from "./Partners/Partners";
import CostCalculation from "./CostCalculation/CostCalculation.js";
import '../style/IPud.css';
import '../style/phone.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="wrapper" id="Main">
      <Header />
      <div>
        <Slide />
      </div>
      <div className="container first row" id="about-company">
        <div className="inline-wrapper">
          <div className="main row">
            <OurAdvantages />
          </div>
        </div>
      </div>
      <div className="container five row">
        <div className="inline-wrapper">
          <div className="main row">
            <CostCalculation />
          </div>
        </div>
      </div>
      <div></div>
      <div className="inline-wrapper">
        <div className="main row">
          <Geography />
        </div>
      </div>
      <div className="insert-img row">
        <ScrollAnimation animateIn="fadeInLeft">
            <h3 className='deepshadow wow'>Автомобильные грузоперевозки</h3>
        </ScrollAnimation>
      </div>
      <div className="inline-wrapper">
        <div className="main row">
          <Transport />
        </div>
      </div>
      <div className="container third row">
        <div className="inline-wrapper">
          <div className="main row">
            <GroupageCargo />
          </div>
        </div>
      </div>
      <div className="container four row">
        <div className="inline-wrapper">
          <div className="partners" id="partners">
            <h3>Нам доверяют</h3>
            <Partners />
          </div>
        </div>
      </div>
      <div className="inline-wrapper">
        <div className="footer row">
          <div><p>ФЛП «ЛИСТОПАД СЕРГЕЙ ОЛЕКСАНДРОВИЧ»</p>
            <p>Код ЕГРПОУ 3202202237</p>
            <p>Сертификат № 0387173306</p>
          </div>
          <div><p>Украина, Киев, ул. Пшеничная, 9, 03134</p></div>
          <div><p>Website developed by Bendryk Anton</p></div>
        </div>
      </div>
    </div>
  );
}
export default App

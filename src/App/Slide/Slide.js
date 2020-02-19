import React from 'react';
import slide2 from '../../pictures/slide2.jpg';
import slide01 from '../../pictures/slide01.jpg';
import slide4 from '../../pictures/slide4.jpg';
import './slide.css';
const Slide = () => {
    return (
        <div class="slide row">
            <div class="slide-container">
                <div class="fadein">
                    <div><img src={slide2} alt="" />
                        <h1 className="inline-wrapper">Logistics Solutions - профи в сфере грузоперевозок</h1>
                    </div>
                    <div><img src={slide01} alt="" />
                        <h2 className="inline-wrapper slideText2"> Мы знаем как в кратчайшие сроки качественно и надежно доставить ваш груз.</h2>
                    </div>
                    <div><img src={slide4} alt="" />
                        <h2 className="inline-wrapper slideText3">Вы можете заказать грузоперевозки с широкой географией и быть уверенным в качестве и скорости доставки.</h2>
                    </div>
				</div>	
			</div>
		</div>
    )
}
export default Slide
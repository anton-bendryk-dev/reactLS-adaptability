import React from 'react';
import './costCalculation.css';
import ScrollAnimation from 'react-animate-on-scroll';

const CostCalculation = () => {
    return (
        <div className="CostCalculation-container">
            <div className="howItWork">
            <ScrollAnimation animateIn="fadeInUp">
                <h3>КАК ЭТО РАБОТАЕТ?</h3>
            </ScrollAnimation>
                <ul>Для начала нашего сотрудничества, необходимо выполнить следующие шаги:</ul>
                <li>Оставить заявку на доставку груза;</li>
                <li>Мы рассчитываем стоимость доставки, маршрут, сроки доставки;</li>
                <li>Заключаем с Вами договор и оформляем все необходимые документы;</li>
                <li>Осуществляем перевозку груза в указанное место и сроки согласно договора;</li>
                <li>После того, как вы получили груз , Вы совершаете оплату удобным для Вас способом и подписываете все закрывающие документы.</li>
            </div>
            <div className="Forma-container">
                    <div class="calculation-container-small">
                        <form action="" method="post">
                                <h2>Заполните форму заявки, и мы рассчитаем стоимость грузоперевозки:</h2>
                                <input class="input-style" type="text" name="name" placeholder="Имя" required />
                                <input class="input-style" type="text" name="email" placeholder="Email" />
                                <input class="input-style" type="text" name="phone" placeholder="Номер телефона" />
                                <input class="input-style" type="text" name="destinatiom from" placeholder="Адрес погрузки" />
                                <input class="input-style" type="text" name="lastname" placeholder="Дата погрузки" required />
                                <input class="input-style" type="text" name="destinatiom to" placeholder="Адрес доставки" />
                                <input class="input-style" type="text" name="lastname" placeholder="Дата доставки" required/>
                                    <textarea placeholder="Для дополнительной информации" required></textarea>
                                    <div class="check-box">
                                        <label><input type="checkbox" name="" value="yes" />&#8195;Температурный режим</label>
                                    </div>
                                    <div class="check-box">
                                        <label><input type="checkbox" name="" value="yes" />&#8195;Сборный груз</label>
                                    </div>
                                    <div class="check-box">
                                        <label id="Geography"><input type="checkbox" name="" value="yes" />&#8195;АДР</label>
                                    </div>
                                    <div class="send-button-container">
                                        <div class="send-button"><a href="#Main">Отправить</a></div>
                                    </div>
                        </form>
                    </div>
                </div> 
            </div>
    )
}
export default CostCalculation
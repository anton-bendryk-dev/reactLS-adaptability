import React from 'react';
import './GroupageCargo.css';
import GroupageCargoImg from '../../pictures/groupage-cargo.jpg';
const GroupageCargo = () => {
    return (
        <div className="groupage-cargo">
            <div className="groupage-cargo-container">
                <h2>СБОРНЫЕ ГРУЗЫ</h2>
                <p>&#8195;Компания Logistics Solutions также занимается перевозкой сборных грузов и это составляет большую долю наших транспортировок. Доставка сборных грузов востребована среди представителей многих отраслей и бизнесов разного размера, от индивидуальных предпринимателей до крупных корпораций. Такой вид транспортировки представляет собой перевозку небольших товаров разных поставщиков в одном направлении.</p>
            </div>
            <div className="groupage-cargo-img">
                <img src={GroupageCargoImg} alt="" /> 
            </div>
            <p>&#8195;Разумное использование грузового места снижает издержки при доставке и гарантирует безопасность товаров.Мы изучаем нужды заказчика и характеристики груза, составляем подходящую схему транспортировки и рассчитываем стоимость. Наша компания доставляет товары в срок независимо от конечного пункта назначения. Надёжные логистические компании и другие партнёры позволяют нам сохранять небольшие цены и швейцарское качество обслуживания при экспорте и импорте сборных грузов. Мы придерживаемся высоких стандартов во всех мелочах.</p>
            <p>&#8195;Догруз – это партия груза, которая может быть помещена в автомобиль, идущий нужным маршрутом, при наличии свободного места в кузове. При такой перевозке В одной машине может быть до 5-ти догрузов, что дает возможность сэкономить, но при этом увеличивает время доставки груза.Догруз невозможен если на предыдущей загрузке поставили пломбу!!!</p>
        </div>
    )
}
export default GroupageCargo
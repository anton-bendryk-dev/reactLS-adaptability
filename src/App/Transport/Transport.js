import React from 'react';
import './transport.css';
import TransportBox from './Transport-box/TransportBox.js';
import TransportBoxItem from './Transport-box/TransportBoxItem';

const Transport = () => {
    return (
        <div>
            <h3 className="h3">Типы кузовов грузовых автомобилей</h3>
          <div className="transport-container">
              {
                TransportBox.map(({
                  id,
                  image,
                  name,
                  CarryingCapacity,
                  UsefulVolume,
                  size,
                  spaciousness,
                  cargo,
                  NotSuitableFor
                }) => (
                  <TransportBoxItem
                  id = {id}
                  image = {image}
                  name = {name}
                  CarryingCapacity = {CarryingCapacity}
                  UsefulVolume = {UsefulVolume}
                  size = {size}
                  spaciousness = {spaciousness}
                  cargo = {cargo}
                  NotSuitableFor = {NotSuitableFor}
                  />
                ))
              }
            <p id="GroupageCargo">Грузоперевозки автомобильным транспортом осуществляют с применением особого транспорта. Мы выбираем автомобиль учитывая нужды Клиента и характеристики груза, весом от 1т до 23т.Все эти виды автомобилей могут быть тентоваными, рефрежераторными, изотермичными и цельнометалическими.</p>
          </div>
        </div>
    )
}
export default Transport
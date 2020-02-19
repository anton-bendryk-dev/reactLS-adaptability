import React from 'react';
import Slider from "react-slick";
import './partners.css';
import client1 from '../../pictures/client-001.jpg';
import client2 from '../../pictures/client-002.jpg';
import client3 from '../../pictures/client-003.jpg';
import client4 from '../../pictures/client-004.jpg';
import client5 from '../../pictures/client-005.jpg';
import client6 from '../../pictures/client-006.jpg';
import client7 from '../../pictures/client-007.jpg';
import client8 from '../../pictures/client-008.jpg';
class Partners extends React.Component {
    render() {
        var settings = {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        };
        return (
            <Slider {...settings}>
                <div>
                    <img src={client1} alt="" />
                </div>
                <div>
                    <img src={client2} alt="" />
                </div>
                <div>
                    <img src={client3} alt="" />
                </div>
                <div>
                    <img src={client4} alt="" />
                </div>
                <div>
                    <img src={client5} alt="" />
                </div>
                <div>
                    <img src={client6} alt="" />
                </div>
                <div>
                    <img src={client7} alt="" />
                </div>
                <div>
                    <img src={client8} alt="" />
                </div>
            </Slider>
        );
    }
}
export default Partners
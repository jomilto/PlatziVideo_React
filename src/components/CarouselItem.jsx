import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = () => (
    <div class="carrousel-item">
        <img class="carrousel-item__img" src="https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="gato" />
        <div class="carrousel-item__details">
            <div class="carrousel-item__details--content">
                <img src={playIcon} alt="Play" />
                <img src={plusIcon} alt="See more" />
                <p class="carrousel_item__details--title">Título Descriptivo</p>
                <p class="carrousel-item__details--subtitle">2019 16+ 114 minutos</p>
            </div>
        </div>
    </div>
);

export default CarouselItem;
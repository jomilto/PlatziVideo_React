import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({ children }) => (
    <div class="carrousel-item">
        <img class="carrousel-item__img" src="https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="gato" />
        <div class="carrousel-item__details">
            <div class="carrousel-item__details--content">
                <img src="./assets/img/play-icon.png" alt="Play" />
                <img src="./assets/img/plus-icon.png" alt="See more" />
                <p class="carrousel_item__details--title">Título Descriptivo</p>
                <p class="carrousel-item__details--subtitle">2019 16+ 114 minutos</p>
            </div>
        </div>
    </div>
);

export default CarouselItem;
import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ( { cover, title, year, contentRating, duration }) => (
    <div class="carrousel-item">
        <img class="carrousel-item__img" src={cover} alt={title} />
        <div class="carrousel-item__details">
            <div class="carrousel-item__details--content">
                <img src={playIcon} alt="Play" />
                <img src={plusIcon} alt="See more" />
                <p class="carrousel_item__details--title">{title}</p>
                <p class="carrousel-item__details--subtitle">
                    {`${year} ${contentRating} ${duration} minutes`}
                </p>
            </div>
        </div>
    </div>
);

export default CarouselItem;
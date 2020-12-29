import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ( { cover, title, year, contentRating, duration }) => (
    <div className="carrousel-item">
        <img className="carrousel-item__img" src={cover} alt={title} />
        <div className="carrousel-item__details">
            <div className="carrousel-item__details--content">
                <img src={playIcon} alt="Play" />
                <img src={plusIcon} alt="See more" />
                <p className="carrousel_item__details--title">{title}</p>
                <p className="carrousel-item__details--subtitle">
                    {`${year} ${contentRating} ${duration} minutes`}
                </p>
            </div>
        </div>
    </div>
);

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
}

export default CarouselItem;
import React from 'react';
import { connect } from 'react-redux';
import { setFavorite } from '../actions';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = (props) => {
    const { id, cover, title, year, contentRating, duration } = props;

    const handleSetFavorite = () => {
        props.setFavorite({
            id, cover, title, year, contentRating, duration
        });
    }

    return (
        <div className="carrousel-item">
            <img className="carrousel-item__img" src={cover} alt={title} />
            <div className="carrousel-item__details">
                <div className="carrousel-item__details--content">
                    <img src={playIcon} alt="Play" />
                    <img src={plusIcon} alt="Add to Favorites" onClick={handleSetFavorite}/>
                    <p className="carrousel_item__details--title">{title}</p>
                    <p className="carrousel-item__details--subtitle">
                        {`${year} ${contentRating} ${duration} minutes`}
                    </p>
                </div>
            </div>
        </div>
    );
}

CarouselItem.propTypes = {
    id: PropTypes.number,
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
}

const mapDispatchToProps = {
    setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
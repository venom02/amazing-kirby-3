import React from 'react';
import Flickity from 'react-flickity-component';
import MyCard from '../Card';

// import './styles.css';
import './flickity.min.css';
import { Jumbotron } from 'react-bootstrap';

const flickityOptions = {
  // initialIndex: 2,
  cellAlign: 'left',
};

export const CardCarousel = ({ title, cards }) => {
  return (
    <Jumbotron>
      <h3>{title}</h3>
      <Flickity
        // className={'carousel'} // default ''
        // elementType={'MyCard'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        // disableImagesLoaded={false} // default false
        // reloadOnUpdate // default false
        static // default false
      >
        {cards.map(card => (
          <MyCard card={card} />
        ))}
      </Flickity>
    </Jumbotron>
  );
};

export default CardCarousel;

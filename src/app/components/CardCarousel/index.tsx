import React from 'react';
import Flickity from 'react-flickity-component';
import MyCard, { CardData } from '../Card';
import { Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';

const flickityOptions = {
  // initialIndex: 2,
  cellAlign: 'left',
  contain: true,
};

interface CardCarouselProps {
  title: string;
  cards: CardData[];
  isStatic?: boolean;
  isThumbs?: boolean;
}

export const CardCarousel: React.FC<CardCarouselProps> = ({
  title,
  cards,
  isStatic = false,
  isThumbs = false,
}) => {
  return (
    <FlickityStyle>
      <Jumbotron>
        <h3>{title}</h3>
        <Flickity
          // className={'carousel'} // default ''
          // elementType={'MyCard'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          // disableImagesLoaded={false} // default false
          reloadOnUpdate={!isStatic}
          static={isStatic} // default false
        >
          {cards.map(card => (
            <MyCard card={card} thumb={isThumbs} />
          ))}
        </Flickity>
      </Jumbotron>
    </FlickityStyle>
  );
};

const FlickityStyle = styled.div`
  /*! Flickity v2.2.1
https://flickity.metafizzy.co
---------------------------------------------- */

  .flickity-enabled {
    position: relative;
  }

  .flickity-enabled:focus {
    outline: 0;
  }

  .flickity-viewport {
    overflow: hidden;
    position: relative;
    height: 100%;
  }

  .flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .flickity-enabled.is-draggable {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .flickity-enabled.is-draggable .flickity-viewport {
    cursor: move;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  .flickity-button {
    position: absolute;
    background: hsla(0, 0%, 100%, 0.75);
    border: none;
    color: #333;
  }

  .flickity-button:hover {
    background: #fff;
    cursor: pointer;
  }

  .flickity-button:focus {
    outline: 0;
    box-shadow: 0 0 0 5px #19f;
  }

  .flickity-button:active {
    opacity: 0.6;
  }

  .flickity-button:disabled {
    opacity: 0.3;
    cursor: auto;
    pointer-events: none;
  }

  .flickity-button-icon {
    fill: currentColor;
  }

  .flickity-prev-next-button {
    top: 50%;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  .flickity-prev-next-button.previous {
    left: 10px;
  }

  .flickity-prev-next-button.next {
    right: 10px;
  }

  .flickity-rtl .flickity-prev-next-button.previous {
    left: auto;
    right: 10px;
  }

  .flickity-rtl .flickity-prev-next-button.next {
    right: auto;
    left: 10px;
  }

  .flickity-prev-next-button .flickity-button-icon {
    position: absolute;
    left: 20%;
    top: 20%;
    width: 60%;
    height: 60%;
  }

  .flickity-rtl .flickity-page-dots {
    direction: rtl;
  }

  .flickity-page-dots {
    position: absolute;
    width: 100%;
    bottom: -22px;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    line-height: 1;
  }

  .flickity-page-dots .dot {
    display: inline-block;
    width: 40px;
    height: 4px;
    margin: 0;
    background: #333;
    border-radius: 0;
    opacity: 0.25;
    cursor: pointer;
  }

  .flickity-page-dots .dot.is-selected {
    opacity: 1;
  }

  .flickity-viewport {
    transition: height 0.2s;
  }
`;

export default CardCarousel;

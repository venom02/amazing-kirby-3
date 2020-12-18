import React, { useState } from 'react';
import 'react-bootstrap';
import styled from 'styled-components';
import { CardData } from '../Card';

const card: CardData = {
  img:
    'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/m/mmmin200isbnb_0_wm3yqw1lyhd1uarx.jpg',
};
export const Flip = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <Flipper>
      <div className="container">
        <div className="card">
          <div className="front">Click to flip</div>
          <div className="back">Yo, what up?</div>
        </div>
      </div>
    </Flipper>
  );
};

const Flipper = styled.div`
  html,
  body {
    height: 100%;
    margin: 0;
  }
  //
  //body {
  //  background: #00a5f7;
  //  display: -webkit-box;
  //  display: -ms-flexbox;
  //  display: flex;
  //  -webkit-box-orient: vertical;
  //  -o-box-orient: vertical;
  //  flex-direction: column;
  //  -webkit-box-pack: center;
  //  -o-box-pack: center;
  //  justify-content: center;
  //  -webkit-box-align: center;
  //  -o-box-align: center;
  //  align-items: center;
  //}
  //
  //.container {
  //  width: 300px;
  //  height: 200px;
  //  position: relative;
  //  -webkit-perspective: 800px;
  //  -ms-perspective: 800px;
  //  perspective: 800px;
  //  border-radius: 4px;
  //}

  .card {
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: -webkit-transform 0.8s
      cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: -webkit-transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      -webkit-transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 6px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }

  .card div {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 6px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;
    display: flex;
    -webkit-box-pack: center;
    -o-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -o-box-align: center;
    align-items: center;
    font: 16px/1.5 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #47525d;
  }

  .card .back {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }

  .card.flipped {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
`;

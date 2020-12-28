import React, { useState } from 'react';
import 'react-bootstrap';
import styled from 'styled-components';
import { CardData } from '../Card';
import './flip.scss';

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
      <div className="mycontainer">
        <div className="mycard">
          <img
            src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg"
            alt="Sora"
            className="mycard-img-top"
          />
          <div className="mycard-body">
            <h5 className="mycard-title">Sora</h5>
            <p className="mycard-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="btn">
              More
            </a>
          </div>
        </div>
        <div className="mycard">
          <img
            src="https://i.loli.net/2019/10/18/Ujf6n75o8TtIsWX.jpg"
            alt="Umi"
            className="mycard-img-top"
          />
          <div className="mycard-body">
            <h5 className="mycard-title">Umi</h5>
            <p className="mycard-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="btn">
              More
            </a>
          </div>
        </div>
        <div className="mycard">
          <img
            src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg"
            alt="Mori"
            className="mycard-img-top"
          />
          <div className="mycard-body">
            <h5 className="mycard-title">Mori</h5>
            <p className="mycard-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="btn">
              More
            </a>
          </div>
        </div>
      </div>
    </Flipper>
  );
};

const Flipper = styled.div``;

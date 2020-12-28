import React from 'react';
import { Card } from 'react-bootstrap';
import Flippy, { BackSide, FrontSide } from 'react-flippy';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faThumbtack } from '@fortawesome/free-solid-svg-icons';

export type CardData = {
  title?: string;
  date?: string;
  img: string;
  thumb?: string;
  price?: string;
};

type CardProps = {
  card: CardData;
  thumb?: boolean;
};

export const MyCard: React.FC<CardProps> = ({ card, thumb = false }) => {
  const myFigure = (
    <MyStyle card={card} thumb={thumb}>
      <div className="item">
        <span className="pin-badge">
          <FontAwesomeIcon icon={faThumbtack} />
        </span>
        <span className="got-badge">
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <img
          style={{
            height: thumb ? '200px' : '450px',
            width: 'auto',
            // borderRadius: thumb ? '5px' : '10px',
            // overflow: 'hidden',
          }}
          src={thumb && card.thumb ? card.thumb : card.img}
          alt="Tea cup with steam and pen on bed"
        />
      </div>
    </MyStyle>
  );

  const cardBackBody = (
    <Card.Body>
      <Card.Title>
        {thumb ? <h6>{card.title}</h6> : <h3>{card.title} </h3>}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{card.date}</Card.Subtitle>
      {thumb ? (
        <div />
      ) : (
        <>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </>
      )}
    </Card.Body>
  );
  const cardBack = (
    <Card
      style={{
        height: thumb ? '200px' : '450px',
        width: 'auto',
      }}
    >
      {cardBackBody}
    </Card>
  );

  return (
    <Flippy
      // flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      style={{
        padding: thumb ? '0.25em' : '0.5em',
      }}
    >
      <FrontSide
        style={{
          padding: '0em',
          borderRadius: thumb ? '5px' : '10px',
          overflow: 'hidden',
        }}
      >
        {myFigure}
      </FrontSide>

      <BackSide
        style={{
          padding: '0em',
          borderRadius: thumb ? '5px' : '10px',
          overflow: 'hidden',
        }}
      >
        {cardBack}
      </BackSide>
    </Flippy>
  );
};

const MyStyle = styled.div<CardProps>`
  .item {
    position: relative;
    //padding-top: 20px;
    display: inline-block;
  }

  .pin-badge {
    position: absolute;
    right: ${({ thumb }) => (thumb ? '5px' : '10px')};
    bottom: ${({ thumb }) => (thumb ? '5px' : '10px')};
    background: #ffc107 !important;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    color: #232323;
    padding: 5px 10px;
    font-size: ${({ thumb }) => (thumb ? '10px' : '15px')};
  }

  .got-badge {
    position: absolute;
    right: ${({ thumb }) => (thumb ? '35px' : '45px')};
    bottom: ${({ thumb }) => (thumb ? '5px' : '10px')};
    background: #28a745 !important;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    color: #ffffff;
    padding: 5px 10px;
    font-size: ${({ thumb }) => (thumb ? '10px' : '15px')};
  }
`;

export default MyCard;

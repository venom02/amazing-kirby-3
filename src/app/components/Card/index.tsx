import React from 'react';
import { Card } from 'react-bootstrap';
import Flippy, { BackSide, FrontSide } from 'react-flippy';

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
  );

  const cardBackBody = (
    <Card.Body>
      <Card.Title>
        {thumb ? <h6>{card.title}</h6> : <h3>{card.title}</h3>}
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

export default MyCard;

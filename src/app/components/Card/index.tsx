import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Flippy, { BackSide, FrontSide } from 'react-flippy';
import CardBadge, { BadgeStates } from '../CardBadge';
import { faBan, faCheck, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Simulate } from 'react-dom/test-utils';

export type CardData = {
  id: string;
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
  const [badge, setBadge] = useState<BadgeStates>(BadgeStates.DEL);

  useEffect(() => {
    return () => {};
  });

  const cardFront = (
    <CardBadge thumb={thumb} stateProp={badge}>
      <img
        style={{
          height: thumb ? '200px' : '450px',
          width: 'auto',
        }}
        src={thumb && card.thumb ? card.thumb : card.img}
        alt={card.title}
      />
    </CardBadge>
  );

  const cardBack = (
    <Card
      style={{
        height: thumb ? '200px' : '450px',
        width: 'auto',
      }}
    >
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
          </>
        )}
      </Card.Body>
      <Card.Footer className="text-center">
        <button
          className="btn btn-theme float-left"
          type="button"
          onClick={() => setBadge(BadgeStates.DEL)}
        >
          {thumb ? <div /> : <>Del </>}
          <FontAwesomeIcon icon={faBan} />
        </button>
        <button
          className="btn btn-theme "
          type="button"
          onClick={() => setBadge(BadgeStates.PIN)}
        >
          {thumb ? <div /> : <>Pin </>}
          <FontAwesomeIcon icon={faThumbtack} />
        </button>
        <button
          className="btn btn-theme float-right"
          type="button"
          onClick={() => setBadge(BadgeStates.GOT)}
        >
          {thumb ? <div /> : <>Got </>}
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </Card.Footer>
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
        {cardFront}
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

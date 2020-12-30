import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Flippy, { BackSide, FrontSide } from 'react-flippy';
import CardBadge, { BadgeStates } from '../CardBadge';
import { faBan, faCheck, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export type CardData = {
  id: string;
  title?: string;
  date?: string;
  img: string;
  thumb?: string;
  price?: string;
};

export type CardProps = {
  card: CardData;
  thumb?: boolean;
};

export const MyCard: React.FC<CardProps> = ({ card, thumb = false }) => {
  const [badge, setBadge] = useState<BadgeStates>(BadgeStates.DEL);
  const height = thumb ? '200px' : '450px';
  const width = 'auto';

  const CardFront: React.FC<CardProps> = ({ card, thumb = false }) => (
    <CardBadge thumb={thumb} stateProp={badge}>
      <img
        style={{
          height: height,
          width: width,
        }}
        src={thumb && card.thumb ? card.thumb : card.img}
        alt={card.title}
      />
    </CardBadge>
  );

  interface FooterButtons {
    badgeState: BadgeStates;
    title: string;
    icon: IconDefinition;
  }

  const footerButtons: FooterButtons[] = [
    {
      badgeState: BadgeStates.DEL,
      title: 'Del',
      icon: faBan,
    },
    {
      badgeState: BadgeStates.PIN,
      title: 'Pin',
      icon: faThumbtack,
    },
    {
      badgeState: BadgeStates.GOT,
      title: 'Got',
      icon: faCheck,
    },
  ];

  const CardBack: React.FC<CardProps> = ({ card, thumb = false }) => (
    <Card
      style={{
        height: height,
        width: width,
      }}
    >
      <Card.Body>
        <Card.Title>
          {!thumb ? <h3>{card.title} </h3> : <h6>{card.title}</h6>}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{card.date}</Card.Subtitle>
        {!thumb ? (
          <>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </>
        ) : (
          <div />
        )}
      </Card.Body>
      <Card.Footer>
        <Row noGutters={true}>
          {footerButtons.map(button => (
            <Col>
              <button
                className="btn btn-theme"
                type="button"
                onClick={() => setBadge(button.badgeState)}
              >
                {!thumb ? <>{button.title}</> : <div />}
                <FontAwesomeIcon
                  icon={button.icon}
                  size={!thumb ? '1x' : 'xs'}
                />
              </button>
            </Col>
          ))}
        </Row>
      </Card.Footer>
    </Card>
  );

  const flippyStyle = {
    padding: '0em',
    borderRadius: thumb ? '5px' : '10px',
    overflow: 'hidden',
  };
  return (
    <Flippy
      // flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      style={{
        padding: thumb ? '0.25em' : '0.5em',
      }}
    >
      <FrontSide style={flippyStyle}>
        <CardFront card={card} thumb={thumb} />
      </FrontSide>

      <BackSide style={flippyStyle}>
        <CardBack card={card} thumb={thumb} />
      </BackSide>
    </Flippy>
  );
};

export default MyCard;

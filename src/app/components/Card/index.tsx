import React from 'react';
import { Card } from 'react-bootstrap';

export type CardData = {
  img: string;
  thumb?: string;
};

type CardProps = {
  card: CardData;
};

export const MyCard: React.FC<CardProps> = ({ card }) => (
  <a href={card.img}>
    <Card
      style={{
        width: '9rem',
        boxShadow:
          '0 0.46875rem 2.1875rem rgba(90,97,105,.1), 0 0.9375rem 1.40625rem rgba(90,97,105,.1), 0 0.25rem 0.53125rem rgba(90,97,105,.12), 0 0.125rem 0.1875rem rgba(90,97,105,.1)',
        margin: '5px',
        borderRadius: '7px',
        overflow: 'hidden',
      }}
    >
      <Card.Img
        variant="top"
        src={card.thumb != null ? card.thumb : card.img}
      />
      <Card.ImgOverlay />
    </Card>
  </a>
);

export default MyCard;

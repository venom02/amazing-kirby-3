import React from 'react';
import { Card } from 'react-bootstrap';

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
  const color = '#009688';
  let shadow = thumb
    ? '0 1px 2px rgba(' + color + ',0.3)'
    : '0 2px 5px rgba(' + color + ',0.3)';

  return (
    <Card
      style={{
        width: thumb ? '6rem' : '12rem',
        WebkitBoxShadow: shadow,
        MozBoxShadow: shadow,
        boxShadow: shadow,
        margin: thumb ? '2px' : '5px',
        borderRadius: thumb ? '3px' : '7px',
        overflow: 'hidden',
      }}
    >
      <Card.Img
        variant="top"
        src={thumb && card.thumb ? card.thumb : card.img}
      />
    </Card>
  );
};

export default MyCard;

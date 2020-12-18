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
        // padding: '5px',
        WebkitBoxShadow: shadow,
        MozBoxShadow: shadow,
        boxShadow: shadow,
        margin: '0 auto',
        borderRadius: thumb ? '6px' : '10px',
        overflow: 'hidden',
      }}
    >
      <Card.Img
        style={{
          height: thumb ? '200px' : '450px',
          width: 'auto',
        }}
        variant="top"
        src={thumb && card.thumb ? card.thumb : card.img}
      />
    </Card>
  );
};

export default MyCard;

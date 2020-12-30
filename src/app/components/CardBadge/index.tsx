import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import styled from 'styled-components';

export enum BadgeStates {
  DEL,
  PIN,
  GOT,
}

interface CardBadgeProps {
  thumb: boolean;
  stateProp: BadgeStates;
}

interface MyStyleProps {
  thumb: boolean;
}

const CardBadge: React.FC<CardBadgeProps> = ({
  children,
  stateProp,
  thumb,
}) => {
  // const [state, setState] = useState<BadgeStates>();
  let badge;
  switch (stateProp) {
    case BadgeStates.DEL:
      badge = <React.Fragment />;
      break;
    case BadgeStates.PIN:
      badge = (
        <span className="pin-badge">
          <FontAwesomeIcon icon={faThumbtack} />
        </span>
      );
      break;
    case BadgeStates.GOT:
      badge = (
        <span className="got-badge">
          <FontAwesomeIcon icon={faCheck} />
        </span>
      );
      break;
  }

  return (
    <MyStyle thumb={thumb}>
      <div className="item">
        {badge}
        {children}
      </div>
    </MyStyle>
  );
};

const MyStyle = styled.div<MyStyleProps>`
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
    font-size: ${({ thumb }) => (thumb ? '13px' : '15px')};
  }

  .got-badge {
    position: absolute;
    right: ${({ thumb }) => (thumb ? '5px' : '10px')};
    bottom: ${({ thumb }) => (thumb ? '5px' : '10px')};
    background: #28a745 !important;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    color: #ffffff;
    padding: 5px 10px;
    font-size: ${({ thumb }) => (thumb ? '13px' : '15px')};
  }
`;

export default CardBadge;

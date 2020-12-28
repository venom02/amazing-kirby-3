import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';

interface CardBadgePprops {
  thumb: boolean;
}

const CardBadge: React.FC<CardBadgePprops> = props => (
  <MyStyle thumb={props.thumb}>
    <div className="item">
      <span className="pin-badge">
        <FontAwesomeIcon icon={faThumbtack} />
      </span>
      <span className="got-badge">
        <FontAwesomeIcon icon={faCheck} />
      </span>
      {props.children}
    </div>
  </MyStyle>
);

const MyStyle = styled.div<CardBadgePprops>`
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

export default CardBadge;

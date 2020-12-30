import * as React from 'react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import CardCarousel from '../../components/CardCarousel';
import { CardData } from '../../components/Card';
import axios from 'axios';

interface serie {
  title: string;
  id: number;
}

const series: serie[] = [
  { title: 'Wolverine', id: 1 },
  { title: 'Iron Man', id: 2 },
  { title: 'Spider Man', id: 3 },
];

export function HomePage() {
  const [cardStack, setCardStack] = useState<CardData[]>([]);

  useEffect(() => {
    axios
      .get<CardData[]>(' http://localhost:3001/issues', {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 5000,
      })
      .then(response => {
        setCardStack(response.data);
      })
      .catch(ex => {
        const err = axios.isCancel(ex)
          ? 'Request cancelled'
          : ex.code === 'ECONNABORTED'
          ? 'A timeout has occurred'
          : ex.response.status === 404
          ? 'Resource not found'
          : 'An unexpected error has occurred';
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container fluid>
        <Row>
          <Col>
            <CardCarousel
              title="Uscite della settimana"
              cards={cardStack}
              isThumbs={true}
            />
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <CardCarousel title="Le mie uscite" cards={cardStack} />
            </Jumbotron>
          </Col>
        </Row>
        <h3>Uscite per Serie</h3>
        <Jumbotron>
          {series.map(serie => (
            <React.Fragment key={'carousel' + serie.id}>
              <Row>
                <Col>
                  <CardCarousel
                    title={serie.title}
                    cards={cardStack}
                    isThumbs={true}
                  />
                </Col>
              </Row>
              <br />
            </React.Fragment>
          ))}
        </Jumbotron>
      </Container>
    </>
  );
}

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Alert, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import CardCarousel from '../../components/CardCarousel';
import { CardData } from '../../components/Card';
import axios from 'axios';
import { MyNavBar } from '../../components/MyNavBar';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import styled from 'styled-components/macro';

interface serie {
  title: string;
  id: number;
}

const series: serie[] = [
  { title: 'Wolverine', id: 1 },
  { title: 'Iron Man', id: 2 },
  { title: 'Spider Man', id: 3 },
];

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function HomePage() {
  const [cardStack, setCardStack] = useState<CardData[]>([]);
  const [error, setError]: [string, (error: string) => void] = React.useState(
    '',
  );
  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void,
  ] = React.useState<boolean>(true);

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
        setLoading(false);
      })
      .catch(ex => {
        const err = axios.isCancel(ex)
          ? 'Request cancelled'
          : ex.code === 'ECONNABORTED'
          ? 'A timeout has occurred'
          : ex.response.status === 404
          ? 'Resource not found'
          : 'An unexpected error has occurred';
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <MyNavBar />
      <br />
      {error && <Alert variant={'danger'}>{error}</Alert>}
      <Container fluid>
        <Row>
          <Col>
            {loading && (
              <LoadingWrapper>
                <LoadingIndicator />
              </LoadingWrapper>
            )}
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
              {loading && (
                <LoadingWrapper>
                  <LoadingIndicator />
                </LoadingWrapper>
              )}
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
                  {loading && (
                    <LoadingWrapper>
                      <LoadingIndicator />
                    </LoadingWrapper>
                  )}
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

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Row } from 'react-bootstrap';
import CardCarousel from '../../components/CardCarousel';
import { CardData } from '../../components/Card';

const cardStack: CardData[] = [
  {
    img:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/i/mirna089_0_mefx4jiost3we1wb.jpg',
  },
  {
    img:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/i/mirna050isbn_0_839fo0rn6pvoq5dc.jpg',
  },
  {
    img:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/i/mirna058_0_m2ekijdoqv9xs29c.jpg',
  },
  {
    thumb:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/i/minxm024_0_bpqtyznfuvjw7ykj.jpg',
    img:
      'https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/m/i/minxm024_0_bpqtyznfuvjw7ykj.jpg',
  },
  {
    img:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/i/mirna050isbn_0_839fo0rn6pvoq5dc.jpg',
  },
  {
    img:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/i/mirna058_0_m2ekijdoqv9xs29c.jpg',
  },
  {
    img:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/i/minxm024_0_bpqtyznfuvjw7ykj.jpg',
  },
  {
    img:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/m/mmmin200isbnb_0_wm3yqw1lyhd1uarx.jpg',
  },
];

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Container>
        <Row>
          <Col>
            <CardCarousel title="Iron Man" cards={cardStack} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CardCarousel title="Spider Man" cards={cardStack} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CardCarousel title="tomadar " cards={cardStack} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import CardCarousel from '../../components/CardCarousel';
import { CardData } from '../../components/Card';

const cardStack: CardData[] = [
  {
    title: 'Iron Man 1',
    date: '31/12/2020',
    price: '23€',
    thumb:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/i/mirna089_0_mefx4jiost3we1wb.jpg',
    img:
      'https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/m/i/mirna089_0_mefx4jiost3we1wb.jpg',
  },
  {
    title: 'Iron Man 2',
    date: '31/12/2020',
    price: '23€',
    thumb:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/i/mirna050isbn_0_839fo0rn6pvoq5dc.jpg',
    img:
      'https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/m/i/mirna050isbn_0_839fo0rn6pvoq5dc.jpg',
  },
  {
    title: 'Iron Man 3',
    date: '31/12/2020',
    price: '23€',
    thumb:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/i/mirna058_0_m2ekijdoqv9xs29c.jpg',
    img:
      'https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/m/i/mirna058_0_m2ekijdoqv9xs29c.jpg',
  },
  {
    title: 'Iron Man 4',
    date: '31/12/2020',
    price: '23€',
    thumb:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/i/minxm024_0_bpqtyznfuvjw7ykj.jpg',
    img:
      'https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/m/i/minxm024_0_bpqtyznfuvjw7ykj.jpg',
  },
  {
    title: 'Iron Man 5',
    date: '31/12/2020',
    price: '23€',
    thumb:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/i/mirna050isbn_0_839fo0rn6pvoq5dc.jpg',
    img:
      'https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/m/i/mirna050isbn_0_839fo0rn6pvoq5dc.jpg',
  },
  {
    title: 'Iron Man 6',
    date: '31/12/2020',
    price: '23€',
    thumb:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/i/mirna058_0_m2ekijdoqv9xs29c.jpg',
    img:
      'https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/m/i/mirna058_0_m2ekijdoqv9xs29c.jpg',
  },
  {
    title: 'Iron Man 7',
    date: '31/12/2020',
    price: '23€',
    thumb:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/i/minxm024_0_bpqtyznfuvjw7ykj.jpg',
    img:
      'https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/m/i/minxm024_0_bpqtyznfuvjw7ykj.jpg',
  },
  {
    img:
      'https://www.panini.it/media/catalog/product/cache/dcdcea88706ab1684584701c5b27598d/m/m/mmmin200isbnb_0_wm3yqw1lyhd1uarx.jpg',
  },
];

const series: string[] = ['Wolverine', 'Iron Man', 'Spider Man'];

function shuffleConcatArray(array) {
  return array.concat(array, array);
  // for (let i = array.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [array[i], array[j]] = [array[j], array[i]];
  // }
  // return array;
}

export function HomePage() {
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
              cards={shuffleConcatArray(cardStack)}
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
          {series.map(title => (
            <>
              <Row>
                <Col>
                  <CardCarousel
                    title={title}
                    cards={shuffleConcatArray(cardStack)}
                    isThumbs={true}
                  />
                </Col>
              </Row>
              <br />
            </>
          ))}
        </Jumbotron>
      </Container>
    </>
  );
}

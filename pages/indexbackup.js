import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import '../src/style.css';
import { Image } from 'react-bootstrap';

import EditorChoicePost from '../components/EditorChoicePost';
import PopularPosts from '../components/PopularPosts';
import TrendingPost from '../components/TrendingPost';
import SuggestionPosts from '../components/SuggestionPosts';
import RecentPosts from '../components/RecentPosts';

import { Container, Col, Row, Button } from 'react-bootstrap';

const trendingBackground = {
  background: '#f7f7f7'
};

const Index = props => (
  <Layout>
    <Container>
      <Row className="mb-5">
        <Col xs={12} md={7}>
          <EditorChoicePost />
        </Col>
        <Col xs={12} md={{ span: 4, offset: 1 }}>
          <PopularPosts />
        </Col>
      </Row>
    </Container>

    <Container fluid style={trendingBackground}>
      <Row>
        <Col xs={12} md={12}>
          <Container>
            <Row className="mt-5 mb-5">
              <Col xs={12} md={12}>
                <TrendingPost />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>

    <Container>
      <Row className="mt-5 mb-5">
        <Col xs={12} md={7}>
          <RecentPosts />
        </Col>
        <Col xs={12} md={{ span: 4, offset: 1 }}>
          <SuggestionPosts />
        </Col>
      </Row>
    </Container>

    <h1 className="example">Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
          <p>Type: {show.type}</p>
          <Image src={`${show.image.original}`} />
        </li>
      ))}
    </ul>
    <Button>Invite</Button>
    <style jsx>{``}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('http://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);
  console.log(data);

  return {
    shows: data
  };
};

export default Index;

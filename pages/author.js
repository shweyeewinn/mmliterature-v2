import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';

import AuthorInfo from '../components/Styles/AuthorInfo';
import AuthorRelatedPosts from '../components/RecentPosts/AuthorRelatedPosts';

const trendingBackground = {
  background: 'linear-gradient(to bottom, #f7f7f7 51%, #ffffff 50%)',
};
const transparentBackground = {
  background: 'transparent',
};
const Author = () => (
  <Layout>
    <AuthorInfo>
      <Container fluid style={trendingBackground}>
        <Row>
          <Col xs={12} md={12}>
            <Container>
              <Row className="mt-8 mb-8">
                <Col
                  xs={2}
                  md={2}
                  style={{ alignItems: 'center', display: 'flex' }}
                >
                  <div class="authors-avatars">
                    <Link href="/">
                      <a>
                        <img
                          alt="Shayna Hodkin"
                          src="https://2.gravatar.com/avatar/8361269491002f5d75359c4f9ab53343?s=96&amp;d=mm&amp;r=g"
                          class="rounded-circle"
                        />
                      </a>
                    </Link>
                  </div>
                </Col>

                <Col xs={10} md={10}>
                  <div className="article-content">
                    <div className="article-musthead">
                      <Link as={`/`} href={`/`}>
                        <a>
                          <h5 className="aut-title">Author</h5>
                        </a>
                      </Link>
                      <Link as={`/`} href={`/`}>
                        <a>
                          <h1 className="hero-title">
                            <span>Kate Harvey</span>
                          </h1>
                        </a>
                      </Link>
                      <p className="author-quote">
                        Kicking SaaS one blog at a time. Kate is an experienced
                        content marketer. Passionate about: diversity in tech,
                        travel, and tacos.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid style={transparentBackground}>
        <Row>
          <Col xs={12} md={12}>
            <Container>
              <Row className="mt-8 mb-8">
                <div id="author-relatedpost-section">
                  <AuthorRelatedPosts />
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </AuthorInfo>
  </Layout>
);
export default Author;

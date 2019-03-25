import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';

import PostDetailStyle from '../components/Styles/PostDetailStyle';
import RelatedPosts from '../components/SideBarPosts/RelatedPosts';

const trendingBackground = {
  background: '#f7f7f7'
};
const transparentBackground = {
  background: 'transparent'
};
const Post = props => (
  <Layout>
    <PostDetailStyle>
      <Container fluid style={trendingBackground}>
        <Row>
          <Col xs={12} md={12}>
            <Container>
              <Row className="mt-8 mb-8">
                <div id="post-detail-section">
                  <Col xs={12} md={12}>
                    <div className="article-content">
                      <div className="article-musthead">
                        <Link as={`/`} href={`/`}>
                          <a>
                            <h5 className="category-title">Interviews</h5>
                          </a>
                        </Link>
                        <Link as={`/`} href={`/`}>
                          <a>
                            <h1 className="hero-title">
                              <span>{props.show.name}</span>
                            </h1>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fulid style={transparentBackground} className="post-content">
        <Row>
          <Col xs={12} md={12}>
            <Container>
              <Row>
                <Col xs={12} md={12}>
                  <div className="article-content">
                    <div className="author-info">
                      <div className="authors-avatars">
                        <Link as={`/author`} href={`/author`}>
                          <a>
                            <Image
                              alt="Shayna Hodkin"
                              src="https://2.gravatar.com/avatar/8361269491002f5d75359c4f9ab53343?s=96&amp;d=mm&amp;r=g"
                              roundedCircle
                            />
                          </a>
                        </Link>
                      </div>
                      <h6 className="article-author">
                        By&nbsp;
                        <Link as={`/author`} href={`/author`}>
                          <a>Shwe Yee</a>
                        </Link>
                        <span className="article-date"> • 26 Feb 2018</span>
                      </h6>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={7}>
                  <div className="article-details mt-3 mb-5">
                    <div className="article-img">
                      <Link as={`/`} href={`/`}>
                        <a>
                          <div className="ps-image-wrapper">
                            <Image src={props.show.image.medium} fluid />
                            {/* <Image src="/static/trending-posts/p2.jpg" fluid /> */}
                          </div>
                        </a>
                      </Link>
                    </div>
                    <div className="article-desc">
                      <p>{props.show.summary.replace(/<[\/]?p>/g, '')}</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas vestibulum lacus a odio luctus varius. Vivamus
                        vel scelerisque mi. Suspendisse viverra tristique
                        blandit. In sodales dui risus, sed eleifend quam
                        hendrerit nec. Ut viverra enim vel erat tincidunt, sit
                        amet vehicula elit malesuada. Aliquam erat volutpat. In
                        orci velit, aliquam vel fermentum sed, tincidunt vel
                        velit. Ut eu auctor tellus. Sed vestibulum, magna ac
                        dapibus sollicitudin, velit erat porta orci, a sodales
                        turpis magna sed est.
                      </p>
                      <h2>Mauris a varius purus, sit amet blandit urna.</h2>
                      <p>
                        Nullam vulputate tempor egestas. Mauris ut arcu tortor.
                        Nam odio elit, efficitur scelerisque neque vitae,
                        sodales placerat est. Proin vel lacus eu arcu accumsan
                        consequat eget eu lectus. Maecenas feugiat lacinia
                        pulvinar. Vivamus sagittis venenatis lacus nec
                        porttitor. Nulla orci felis, mollis in bibendum ut,
                        faucibus eu turpis. Nullam maximus arcu quis dolor
                        gravida, sit amet porttitor arcu blandit. Maecenas
                        vulputate mattis rutrum. Donec et venenatis dui.
                      </p>
                      <p>
                        In sollicitudin mollis massa pharetra ornare. Cras vitae
                        ultricies lorem. Phasellus sed iaculis lorem. Maecenas
                        fringilla nec ligula ut fringilla. Pellentesque habitant
                        morbi tristique senectus et netus et malesuada fames ac
                        turpis egestas. Nulla lorem ex, mollis vel lacus vel,
                        malesuada ornare augue. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed quis porttitor nibh.
                        Donec gravida tincidunt volutpat. Donec eu aliquet diam.
                      </p>
                    </div>
                  </div>
                  <span className="article-end" />
                </Col>
                <Col xs={12} md={{ span: 4, offset: 1 }}>
                  <RelatedPosts />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </PostDetailStyle>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;

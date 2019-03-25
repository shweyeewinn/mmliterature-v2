import { Image } from 'react-bootstrap';
import Link from 'next/link';
import { Container, Col, Row, Button } from 'react-bootstrap';

const styles = {
  background: '#40333'
};
// import SectionTitleCap from '../styles/SectionTitleCap';
import RecentPostsStyle from './RecentPostsStyle';

const AuthorRelatedPosts = () => (
  <RecentPostsStyle>
    <div id="trending-post-section" className={`styles`}>
      <h2 className="section-title">
        <span>Articles By Author</span>
      </h2>
      <h4 className="section-cap">Our best stuff for product designers</h4>
      <Container className="block-wrapper pl-0 pr-0" fluid>
        <Row>
          <Col className="article-block" xs={12} md={3}>
            <div className="hover">
              <div className="article-img">
                <Link as={`/`} href={`/`}>
                  <a>
                    <div className="image-wrapper">
                      <Image
                        src="/static/trending-posts/p1.jpg"
                        alt=""
                        className="bg-img"
                        fluid
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="article-content">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h5 className="category-title">Interviews</h5>
                  </a>
                </Link>
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>
                        Talking mentors, freelancing, and community with product
                        designer Laura Galbraith
                      </span>
                    </h3>
                    {/* <p className="article-desc">
                    လူမျိုးအသီးသီး၊ ဘာသာစကား အသီးသီးတို့တွင် အများအားဖြင့်
                    စာနှင့်စာပေရှိကြ၏။
                  </p> */}
                  </a>
                </Link>

                <h6 className="article-author">
                  By&nbsp;
                  <Link as={`/`} href={`/`}>
                    <a>Shwe Yee</a>
                  </Link>
                </h6>
              </div>
            </div>
          </Col>
          <Col className="article-block" xs={12} md={3}>
            <div className="hover">
              <div className="article-img">
                <Link as={`/`} href={`/`}>
                  <a>
                    <div className="image-wrapper">
                      <Image
                        src="/static/trending-posts/p2.jpg"
                        alt=""
                        className="bg-img"
                        fluid
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="article-content">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h5 className="category-title">Interviews</h5>
                  </a>
                </Link>
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>
                        Talking mentors, freelancing, and community with product
                        designer Laura Galbraith
                      </span>
                    </h3>
                    {/* <p className="article-desc">
                    လူမျိုးအသီးသီး၊ ဘာသာစကား အသီးသီးတို့တွင် အများအားဖြင့်
                    စာနှင့်စာပေရှိကြ၏။
                  </p> */}
                  </a>
                </Link>

                <h6 className="article-author">
                  By&nbsp;
                  <Link as={`/`} href={`/`}>
                    <a>Shwe Yee</a>
                  </Link>
                </h6>
              </div>
            </div>
          </Col>
          <Col className="article-block" xs={12} md={3}>
            <div className="hover">
              <div className="article-img">
                <Link as={`/`} href={`/`}>
                  <a>
                    <div className="image-wrapper">
                      <Image
                        src="/static/trending-posts/p3.jpg"
                        alt=""
                        className="bg-img"
                        fluid
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="article-content">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h5 className="category-title">Interviews</h5>
                  </a>
                </Link>
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>
                        Talking mentors, freelancing, and community with product
                        designer Laura Galbraith
                      </span>
                    </h3>
                    {/* <p className="article-desc">
                    လူမျိုးအသီးသီး၊ ဘာသာစကား အသီးသီးတို့တွင် အများအားဖြင့်
                    စာနှင့်စာပေရှိကြ၏။
                  </p> */}
                  </a>
                </Link>

                <h6 className="article-author">
                  By&nbsp;
                  <Link as={`/`} href={`/`}>
                    <a>Shwe Yee</a>
                  </Link>
                </h6>
              </div>
            </div>
          </Col>
          <Col className="article-block" xs={12} md={3}>
            <div className="hover">
              <div className="article-img">
                <Link as={`/`} href={`/`}>
                  <a>
                    <div className="image-wrapper">
                      <Image
                        src="/static/trending-posts/p3.jpg"
                        alt=""
                        className="bg-img"
                        fluid
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="article-content">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h5 className="category-title">Interviews</h5>
                  </a>
                </Link>
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>
                        Talking mentors, freelancing, and community with product
                        designer Laura Galbraith
                      </span>
                    </h3>
                    {/* <p className="article-desc">
                    လူမျိုးအသီးသီး၊ ဘာသာစကား အသီးသီးတို့တွင် အများအားဖြင့်
                    စာနှင့်စာပေရှိကြ၏။
                  </p> */}
                  </a>
                </Link>

                <h6 className="article-author">
                  By&nbsp;
                  <Link as={`/`} href={`/`}>
                    <a>Shwe Yee</a>
                  </Link>
                </h6>
              </div>
            </div>
          </Col>
          <Col className="article-block" xs={12} md={3}>
            <div className="hover">
              <div className="article-img">
                <Link as={`/`} href={`/`}>
                  <a>
                    <div className="image-wrapper">
                      <Image
                        src="/static/trending-posts/p1.jpg"
                        alt=""
                        className="bg-img"
                        fluid
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="article-content">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h5 className="category-title">Interviews</h5>
                  </a>
                </Link>
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>
                        Talking mentors, freelancing, and community with product
                        designer Laura Galbraith
                      </span>
                    </h3>
                    {/* <p className="article-desc">
                    လူမျိုးအသီးသီး၊ ဘာသာစကား အသီးသီးတို့တွင် အများအားဖြင့်
                    စာနှင့်စာပေရှိကြ၏။
                  </p> */}
                  </a>
                </Link>

                <h6 className="article-author">
                  By&nbsp;
                  <Link as={`/`} href={`/`}>
                    <a>Shwe Yee</a>
                  </Link>
                </h6>
              </div>
            </div>
          </Col>
          <Col className="article-block" xs={12} md={3}>
            <div className="hover">
              <div className="article-img">
                <Link as={`/`} href={`/`}>
                  <a>
                    <div className="image-wrapper">
                      <Image
                        src="/static/trending-posts/p2.jpg"
                        alt=""
                        className="bg-img"
                        fluid
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="article-content">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h5 className="category-title">Interviews</h5>
                  </a>
                </Link>
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>
                        Talking mentors, freelancing, and community with product
                        designer Laura Galbraith
                      </span>
                    </h3>
                    {/* <p className="article-desc">
                    လူမျိုးအသီးသီး၊ ဘာသာစကား အသီးသီးတို့တွင် အများအားဖြင့်
                    စာနှင့်စာပေရှိကြ၏။
                  </p> */}
                  </a>
                </Link>

                <h6 className="article-author">
                  By&nbsp;
                  <Link as={`/`} href={`/`}>
                    <a>Shwe Yee</a>
                  </Link>
                </h6>
              </div>
            </div>
          </Col>
          <Col className="article-block" xs={12} md={3}>
            <div className="hover">
              <div className="article-img">
                <Link as={`/`} href={`/`}>
                  <a>
                    <div className="image-wrapper">
                      <Image
                        src="/static/trending-posts/p3.jpg"
                        alt=""
                        className="bg-img"
                        fluid
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="article-content">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h5 className="category-title">Interviews</h5>
                  </a>
                </Link>
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>
                        Talking mentors, freelancing, and community with product
                        designer Laura Galbraith
                      </span>
                    </h3>
                    {/* <p className="article-desc">
                    လူမျိုးအသီးသီး၊ ဘာသာစကား အသီးသီးတို့တွင် အများအားဖြင့်
                    စာနှင့်စာပေရှိကြ၏။
                  </p> */}
                  </a>
                </Link>

                <h6 className="article-author">
                  By&nbsp;
                  <Link as={`/`} href={`/`}>
                    <a>Shwe Yee</a>
                  </Link>
                </h6>
              </div>
            </div>
          </Col>
          <Col className="article-block" xs={12} md={3}>
            <div className="hover">
              <div className="article-img">
                <Link as={`/`} href={`/`}>
                  <a>
                    <div className="image-wrapper">
                      <Image
                        src="/static/trending-posts/p3.jpg"
                        alt=""
                        className="bg-img"
                        fluid
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="article-content">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h5 className="category-title">Interviews</h5>
                  </a>
                </Link>
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>
                        Talking mentors, freelancing, and community with product
                        designer Laura Galbraith
                      </span>
                    </h3>
                    {/* <p className="article-desc">
                    လူမျိုးအသီးသီး၊ ဘာသာစကား အသီးသီးတို့တွင် အများအားဖြင့်
                    စာနှင့်စာပေရှိကြ၏။
                  </p> */}
                  </a>
                </Link>

                <h6 className="article-author">
                  By&nbsp;
                  <Link as={`/`} href={`/`}>
                    <a>Shwe Yee</a>
                  </Link>
                </h6>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md="auto">
            <Button size="md" className="btn">
              See More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  </RecentPostsStyle>
);
export default AuthorRelatedPosts;

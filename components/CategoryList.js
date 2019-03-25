import { Image } from 'react-bootstrap';
import Link from 'next/link';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoryList = () => (
  <div>
    <Container className="block-wrapper pl-0 pr-0" fluid>
      <Row>
        <Col className="article-block pb-4" xs={12} md={3}>
          <div className="hover">
            <div className="article-img">
              <Link as={`/`} href={`/`}>
                <a>
                  <div className="image-wrapper">
                    <Image
                      src="/static/categories/comedy.jpg"
                      alt=""
                      className="bg-img"
                      fluid
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="article-content">
              <div className="cat-title">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>Comedy</span>
                    </h3>
                  </a>
                </Link>
              </div>
              <div className="bm-icon text-right">
                <Link as={`/`} href={`/`}>
                  <a className="fa-circle ht">
                    <FontAwesomeIcon icon={['fas', 'heart']} size="sm" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col className="article-block pb-4" xs={12} md={3}>
          <div className="hover">
            <div className="article-img">
              <Link as={`/`} href={`/`}>
                <a>
                  <div className="image-wrapper">
                    <Image
                      src="/static/categories/novel.jpg"
                      alt=""
                      className="bg-img"
                      fluid
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="article-content">
              <div className="cat-title">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>Novel</span>
                    </h3>
                  </a>
                </Link>
              </div>
              <div className="bm-icon text-right">
                <Link as={`/`} href={`/`}>
                  <a className="fa-circle pl">
                    <FontAwesomeIcon icon={['fas', 'plus']} size="sm" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col className="article-block pb-4" xs={12} md={3}>
          <div className="hover">
            <div className="article-img">
              <Link as={`/`} href={`/`}>
                <a>
                  <div className="image-wrapper">
                    <Image
                      src="/static/categories/poetry.jpg"
                      alt=""
                      className="bg-img"
                      fluid
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="article-content">
              <div className="cat-title">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>Poetry</span>
                    </h3>
                  </a>
                </Link>
              </div>
              <div className="bm-icon text-right">
                <Link as={`/`} href={`/`}>
                  <a className="fa-circle pl">
                    <FontAwesomeIcon icon={['fas', 'plus']} size="sm" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col className="article-block pb-4" xs={12} md={3}>
          <div className="hover">
            <div className="article-img">
              <Link as={`/`} href={`/`}>
                <a>
                  <div className="image-wrapper">
                    <Image
                      src="/static/categories/short_story.jpg"
                      alt=""
                      className="bg-img"
                      fluid
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="article-content">
              <div className="cat-title">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>Short Story</span>
                    </h3>
                  </a>
                </Link>
              </div>
              <div className="bm-icon text-right">
                <Link as={`/`} href={`/`}>
                  <a className="fa-circle ht">
                    <FontAwesomeIcon icon={['fas', 'heart']} size="sm" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col className="article-block pb-4" xs={12} md={3}>
          <div className="hover">
            <div className="article-img">
              <Link as={`/`} href={`/`}>
                <a>
                  <div className="image-wrapper">
                    <Image
                      src="/static/categories/frame.jpg"
                      alt=""
                      className="bg-img"
                      fluid
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="article-content">
              <div className="cat-title">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>Frame Narrative</span>
                    </h3>
                  </a>
                </Link>
              </div>
              <div className="bm-icon text-right">
                <Link as={`/`} href={`/`}>
                  <a className="fa-circle ht">
                    <FontAwesomeIcon icon={['fas', 'heart']} size="sm" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col className="article-block pb-4" xs={12} md={3}>
          <div className="hover">
            <div className="article-img">
              <Link as={`/`} href={`/`}>
                <a>
                  <div className="image-wrapper">
                    <Image
                      src="/static/categories/non-fiction.jpg"
                      alt=""
                      className="bg-img"
                      fluid
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="article-content">
              <div className="cat-title">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>Non-fiction</span>
                    </h3>
                  </a>
                </Link>
              </div>
              <div className="bm-icon text-right">
                <Link as={`/`} href={`/`}>
                  <a className="fa-circle ht">
                    <FontAwesomeIcon icon={['fas', 'heart']} size="sm" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col className="article-block pb-4" xs={12} md={3}>
          <div className="hover">
            <div className="article-img">
              <Link as={`/`} href={`/`}>
                <a>
                  <div className="image-wrapper">
                    <Image
                      src="/static/categories/bio.jpg"
                      alt=""
                      className="bg-img"
                      fluid
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="article-content">
              <div className="cat-title">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>Biography</span>
                    </h3>
                  </a>
                </Link>
              </div>
              <div className="bm-icon text-right">
                <Link as={`/`} href={`/`}>
                  <a className="fa-circle ht">
                    <FontAwesomeIcon icon={['fas', 'heart']} size="sm" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col className="article-block pb-4" xs={12} md={3}>
          <div className="hover">
            <div className="article-img">
              <Link as={`/`} href={`/`}>
                <a>
                  <div className="image-wrapper">
                    <Image
                      src="/static/categories/journal.jpg"
                      alt=""
                      className="bg-img"
                      fluid
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="article-content">
              <div className="cat-title">
                <Link as={`/`} href={`/`}>
                  <a>
                    <h3 className="article-title">
                      <span>Journal</span>
                    </h3>
                  </a>
                </Link>
              </div>
              <div className="bm-icon text-right">
                <Link as={`/`} href={`/`}>
                  <a className="fa-circle ht">
                    <FontAwesomeIcon icon={['fas', 'heart']} size="sm" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <Button size="md" className="btn">
            See More
          </Button>
        </Col>
      </Row>
    </Container>
    <style jsx>{`
      .cat-title {
        width: 80%;
        display: inline-block;
        padding-right: 10px;
        box-sizing: border-box;
      }
      .bm-icon {
        width: 20%;
        display: inline-block;
      }
    `}</style>
  </div>
);

export default CategoryList;

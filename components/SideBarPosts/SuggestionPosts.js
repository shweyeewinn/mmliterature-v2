import { Image } from 'react-bootstrap';
import Link from 'next/link';

import SideBarPostsStyle from './SideBarPostsStyle';

const SuggestionPosts = () => (
  <SideBarPostsStyle>
    <div id="suggestion-posts-section">
      <h3 className="section-title-sm">Suggestion Posts</h3>
      <div id="articles-wrapper">
        <div className="article-block">
          <div className="hover">
            <div className="article-img">
              <Link as={`/`} href={`/`}>
                <a>
                  <div className="image-wrapper">
                    <Image
                      src="/static/popular-posts/p3.jpg"
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
        </div>

        <div className="article-block">
          <div className="hover">
            <div className="article-img">
              <Link as={`/`} href={`/`}>
                <a>
                  <div className="image-wrapper">
                    <Image
                      src="/static/popular-posts/p2.jpg"
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
        </div>

        <div className="article-block">
          <div className="hover">
            <div className="article-img">
              <Link as={`/`} href={`/`}>
                <a>
                  <div className="image-wrapper">
                    <Image
                      src="/static/popular-posts/p1.jpg"
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
                    </span>
                  </h3>
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
        </div>
      </div>
    </div>
  </SideBarPostsStyle>
);
export default SuggestionPosts;

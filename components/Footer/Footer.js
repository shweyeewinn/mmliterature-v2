import Link from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Col, Row, Image } from 'react-bootstrap';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

import {
  faEnvelope,
  faKey,
  faIgloo,
  faUserCircle,
  faHeart,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faKey, faIgloo, faUserCircle, faHeart, faPlus);

import {
  faFacebook,
  faGoogle,
  faGithub,
  faFacebookF,
  faTwitter,
  faGooglePlusG
} from '@fortawesome/free-brands-svg-icons';
library.add(
  faFacebook,
  faGoogle,
  faGithub,
  faFacebookF,
  faTwitter,
  faGooglePlusG
);

import { faCircle as fasFaCircle } from '@fortawesome/free-solid-svg-icons'; // ES Module "as" syntax
import { faCircle as farFaCircle } from '@fortawesome/free-regular-svg-icons';
library.add(fasFaCircle, farFaCircle);

import FooterStyle from './FooterStyle';

const Footer = () => (
  <FooterStyle>
    <div id="footer" className="pt-4 pb-4">
      <Container>
        <Row>
          <Col xs={12} md={2}>
            <div className="footer-logo">
              <Image
                src="/static/logo/footer_logo.png"
                width="120px"
                height="auto"
                className="d-inline-block align-top"
                alt="Myanmar Literature"
              />
            </div>
          </Col>

          <Col xs={12} md={6}>
            <ul className="footer-menu">
              <li className="ftmenu-item">
                <Link as={`/`} href={`/`}>
                  <a>Home</a>
                </Link>
              </li>
              <li className="ftmenu-item">
                <Link as={`/`} href={`/`}>
                  <a>About</a>
                </Link>
              </li>
              <li className="ftmenu-item">
                <Link as={`/`} href={`/`}>
                  <a>Categories</a>
                </Link>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={4} className="text-right">
            <ul className="social-list">
              <li className="social-item">
                <Link as={`/`} href={`/`}>
                  <a className="fa-circle fb">
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} size="sm" />
                  </a>
                </Link>
              </li>
              <li className="social-item">
                <Link as={`/`} href={`/`}>
                  <a className="fa-circle tw">
                    <FontAwesomeIcon icon={['fab', 'twitter']} size="sm" />
                  </a>
                </Link>
              </li>
              <li className="social-item">
                <Link as={`/`} href={`/`}>
                  <a className="fa-circle gp">
                    <FontAwesomeIcon
                      icon={['fab', 'google-plus-g']}
                      size="sm"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
    <style jsx>{``}</style>
  </FooterStyle>
);

export default Footer;

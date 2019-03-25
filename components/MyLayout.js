import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';

import Meta from './Meta';
import Header from '../components/Header/Header';

import Footer from '../components/Footer/Footer';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyles from './Styles/GlobalStyles';

const theme = {
  red: '#FF0000',
  black: '#000000',
  grey: '#999999',
  lightgrey: '#f7f7f7',
  white: '#ffffff',
  maxWidth: '1740px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  fontFamily: 'Roboto'
};

const StyledPage = styled.div`
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const Layout = props => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <GlobalStyles />
      <Meta />
      <Header />
      {props.children}
      <Footer />
    </StyledPage>
  </ThemeProvider>
);

export default Layout;

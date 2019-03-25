import { Image } from 'react-bootstrap';
import Link from 'next/link';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  red: '#ff0000',
  black: '#393939',
  grey: '#3a3a3a',
  lightgrey: '#e1e1e1',
  offWhite: '#ededed',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const MyButton = styled.button`
  background: red;
  font-size: ${props => (props.huge ? '100px' : '50px')};
  span {
    font-size: 100px;
  }
  .txt {
    color: pink;
  }
`;

const StyledPage = styled.div`
  background: green;
  color: black;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  background-color: ${props => props.theme.lightgrey};
`;

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem;
    background: ${props => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: auto 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr;
    border-bottom: 1px soild ${props => props.theme.lightgrey};
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    color: green;
    font-family: "Roboto", sans-serif;
  }
`;

const CategoryList = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Title>Hello World!</Title>
      <MyButton huge>
        Click Me<span>000</span> <span className="txt">111</span>
      </MyButton>
      <br />
      <MyButton>
        Click Me<span>000</span> <span className="txt">111</span>
      </MyButton>
      <StyledPage>
        <Inner>
          <StyledHeader>
            <div className="bar">
              <Logo>
                <Link href="/">
                  <a>Sick Fits</a>
                </Link>
              </Logo>
            </div>
            <div className="sub-bar">
              <p>Search</p>
            </div>
          </StyledHeader>
        </Inner>
      </StyledPage>
    </Wrapper>
  </ThemeProvider>
);

export default CategoryList;

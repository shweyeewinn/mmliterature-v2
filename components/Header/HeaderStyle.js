import styled from 'styled-components';

const HeaderStyle = styled.section`
  margin: 0px auto;
  padding: 0;
  border: 0;
  width: calc(100% - 60px);
  height: 100%;
  max-width: 1740px;
  position: relative;
  display: block;
  .scrolling-navbar {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .menu-link {
    color: #17191d !important;
    font: bold 14px/14px 'Roboto', sans-serif;
    text-decoration: none;
    margin-right: 20px;
  }
  .navbar-brand {
    margin-right: 3rem;
  }
`;

export default HeaderStyle;

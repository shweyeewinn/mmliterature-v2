import styled from 'styled-components';

const FooterStyle = styled.section`
  #footer {
    background-color: #000000;
  }
  .footer-logo {
    text-transform: uppercase;
    z-index: 10;
    position: relative;
    cursor: pointer;
    display: inline-block;
    font: bold 16px/32px 'Roboto', sans-serif;
    padding: 0px 0px 12px 0px;
    color: #ffffff;
  }
  .ftmenu-item {
    display: inline-block;
    margin: 6px;
  }
  .ftmenu-item a {
    display: inline-block;
    color: #ffffff;
    text-transform: capitalize;
    padding: 6px 5px;
    font: bold 14px/14px 'Roboto', sans-serif;
    transition: color 0.25s ease-out 0s;
    text-decoration: none;
  }
  .social-item {
    list-style: none;
    display: inline-block;
    margin-right: 12px;
    font-size: 24px;
  }
  .social-item a {
    color: #ffffff;
    text-decoration: none;
  }
`;

export default FooterStyle;

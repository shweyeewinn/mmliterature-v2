import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${props => props.theme.white};
  }
  .mainContainer {
    padding: 0px;
    border: 0px;
    width: calc(100% - 60px);
    height: 100%;
    max-width: ${props => props.theme.maxWidth};
    position: relative;
    display: block;
    margin: 0px auto;
  }
  
  button, 
  .btn {
    cursor: pointer;
    color: rgb(255, 255, 255);
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 14px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    max-width: 100%;
    background: #ff3366;
    border-width: 2px;
    border-style: solid;
    border-color: #ff3366;
    border-image: initial;
    border-radius: 100em;
    outline: 0px;
    overflow: hidden;
    padding: 13px 32px 11px;
    text-decoration: none;
    transition: all 0.2s ease 0s;
  }
  button:hover,
  .btn:hover {
    color: #e81e61;
    background: #ffffff;
    border-color: #e81e61;
  }
  button.btn-white {
    color: #ff3366 !important;
    background: #ffffff !important;
    border-color: #ff3366 !important;
  }
  button.btn-white:hover {
    color: #ffffff !important;
    background: #ff3366 !important;
    border-color: #ff3366 !important;
  }
  button.btn-white svg {
    font-size: 1.5em;
    margin-right: 5px;
}
  .image-wrapper {
    margin-bottom: 20px;
  }
  .article-title {
    letter-spacing: 0.2px;
    color: rgb(0, 0, 0);
    cursor: pointer;
    font: 500 16px/22px 'Roboto', sans-serif;
    margin: 0px;
  }
  .category-title {
    color: #ff3366;
    text-transform: uppercase;
    z-index: 10;
    position: relative;
    cursor: pointer;
    display: inline-block;
    font: bold 11px/18px 'Roboto', sans-serif;
  }
  .aut-title {
    color: #000000;
    text-transform: uppercase;
    z-index: 10;
    position: relative;
    cursor: pointer;
    display: inline-block;
    font: bold 11px/18px 'Roboto', sans-serif;
  }
  .section-title {
    color: rgb(0, 0, 0);
    font: 700 45px/55px 'Roboto', sans-serif;
    margin: 0px 0px 0px;
  }
  .section-cap {
    text-transform: uppercase;
    z-index: 10;
    position: relative;
    cursor: pointer;
    display: inline-block;
    font: bold 11px/16px 'Roboto', sans-serif;
    padding: 0px 0px 12px 0px;
    color: #000000;
  }
  .article-author {
    color: #999999;
    text-transform: uppercase;
    z-index: 10;
    position: relative;
    cursor: pointer;
    display: inline-block;
    font: bold 11px/18px 'Roboto', sans-serif;
    padding: 12px 0px;
  }
  .article-author a {
    color: #999999;
  }
  .fa-circle {
    background-color: #e81e61;
    border-radius: 50%;
    color: #ffffff;
  }
  .fa-circle.fb {
    padding: 3px 13px;
  }
  .fa-circle.tw {
    padding: 3px 8px;
  }
  .fa-circle.gp {
    padding: 3px 6px;
  }
  .fa-circle.ht {
    padding: 3px 6px;
  }
  .fa-circle.pl {
    padding: 3px 7px;
  }
  .hero-title {
    color: #000000;
    cursor: pointer;
    -webkit-letter-spacing: -0.1px;
    -moz-letter-spacing: -0.1px;
    -ms-letter-spacing: -0.1px;
    letter-spacing: -0.1px;
    font: 700 45px/65px 'Roboto', sans-serif;
    margin: 12px 0px 16px;
  }
  .article-desc {
    color: #000000;
    font: 300 16px/22px 'Padauk', sans-serif;
    margin: 0px 0px 16px 0px;
    font-size: 16px !important;
  }
  .mt-8 {
    margin-top: 4rem;
  }
  .mb-8 {
    margin-bottom: 4rem;
  }
  .article-block {
    margin: 0px 0px 28px;
  }

  /* Modal CSS */
  .modal-header {
    border-bottom: 0px;
    padding: 2rem 2rem 1rem 2rem;
  }
  .modal-body {
    padding: 0rem 2rem 1rem 2rem;
  }
  .modal-body p {
    color: #000000;
    font: 300 16px/22px 'Padauk',sans-serif;
    margin: 0px 0px 16px 0px;
    font-size: 16px !important;
  }
  .modal-body p a {
    color: #ff3366;
  }
  
  .modal-footer {
    border-top: 0px;
    padding: 0rem 2rem 2rem 2rem;
  }
  .modal-title {
    margin: 0 auto;
    width: 100%;
  }
  .modal-header-title {
    -webkit-letter-spacing: -0.1px;
    -moz-letter-spacing: -0.1px;
    -ms-letter-spacing: -0.1px;
    letter-spacing: -0.1px;
    font: 700 34px/44px 'Roboto',sans-serif;
    margin: 1rem 0rem 0.3rem 0rem;
  }
  .modal-backdrop {
    background-color: #fff;
  }
  .modal-backdrop.show {
    opacity: 0.8;
  }
  @media only screen and (min-width: 1755px) {
    .mainContainer {
      margin: 0px auto;
    }
  }

`;

export default GlobalStyles;

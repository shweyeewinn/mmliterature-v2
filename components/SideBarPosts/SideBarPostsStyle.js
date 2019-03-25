import styled from 'styled-components';

const SideBarPostsStyle = styled.section`
  background-color: #ffffff;

  .article-img {
    position: relative;
    display: inline-block;
    width: 28%;
    vertical-align: top;
    overflow: hidden;
  }
  .image-wrapper {
    position: relative;
    background-color: #f7f7f7;
    overflow: hidden;
  }
  .article-content {
    display: inline-block;
    width: 67%;
    margin: 0px 0px 0px 5%;
  }
  .bg-img {
    position: relative;
    width: 100%;
    height: auto;
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
  .section-title-sm {
    color: rgb(0, 0, 0);
    font: bold 24px/28px 'Roboto', sans-serif;
    margin: 0px 0px 28px;
  }
`;
export default SideBarPostsStyle;

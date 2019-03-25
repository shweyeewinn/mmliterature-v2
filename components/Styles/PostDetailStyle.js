import styled from 'styled-components';

const PostDetailStyle = styled.section`
  .post-content {
    margin-top: -32px;
  }
  .authors-avatars a {
    display: block;
    width: 64px;
    height: 64px;
    cursor: pointer;
  }
  .authors-avatars a img {
    width: 100%;
    height: auto;
  }
  .article-date {
    margin-left: 5px;
  }
  .ps-image-wrapper {
    margin: 0 auto;
    max-width: 100%;
    margin-bottom: 3rem;
  }
  .ps-image-wrapper img {
    width: 100%;
  }
  .article-desc p {
    color: #000000;
    font: 300 16px/22px 'Padauk', sans-serif;
    margin: 0px 0px 16px 0px;
  }
  .article-desc h2 {
    color: #000000;
    font: 700 24px/34px 'Roboto', sans-serif;
    margin: 0px 0px 16px 0px;
  }
  .article-end {
    display: block;
    width: 14px;
    height: 14px;
    background-color: rgb(255, 51, 102);
    margin: 50px auto 50px;
  }
`;

export default PostDetailStyle;

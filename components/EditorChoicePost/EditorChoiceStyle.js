import styled from 'styled-components';

const EditorChoiceStyle = styled.section`
  background-color: #ffffff;
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 45.2vw;
    max-height: 60vh;
    margin: 0px 0px 5vh;
    overflow: hidden;
  }
  .article-title {
    color: #000000;
    cursor: pointer;
    letter-spacing: -0.1px;
    font: 700 34px/44px 'Roboto', sans-serif;
    margin: 12px 0px 16px;
  }
  .article-desc {
    color: #000000;
    // font: 300 16px/22px "Source Sans Pro",sans-serif;
    font: 300 16px/22px 'Padauk', sans-serif;
    margin: 0px 0px 16px 0px;
  }

  @media (max-height: 1000px) and (min-width: 900px) {
    .image-wrapper {
      max-height: 50vh;
    }
  }
`;

export default EditorChoiceStyle;

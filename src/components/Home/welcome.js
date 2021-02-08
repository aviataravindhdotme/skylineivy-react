/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import React from 'react';

import Shoe from '../../../public/shoe1.jpg';
// import Images from '../../../public';

class Welcome extends React.Component {
  render() {
    return (
      <div css={welcomeContainer}>
        <div css={textArea1}>Men Shoes</div>
        <div css={textArea2}>Collection</div>
        <div css={textArea3}>Street Style New fashion</div>

        <img css={imageContainer} src={Shoe} />
      </div>
    );
  }
}

const welcomeContainer = css`
  width: 100vw;
  justify-content: center;
  display: grid;

  grid-template-rows: 50px 50px 100px 20px 1fr;
  font-family: 'PT Serif', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
`;

const imageContainer = css`
  grid-area: 1/3/6/4;
  max-width: 950px;
`;

const textArea1 = css`
  grid-area: 2/2/3/4;
  font-size: 3rem;
  color: #d96528;
  z-index: 5;
`;

const textArea2 = css`
  grid-area: 3/3/4/4;
  font-size: 3rem;
  color: black;
  z-index: 5;
`;

const textArea3 = css`
  grid-area: 4/2/5/5;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
  text-transform: uppercase;
  color: black;
  z-index: 5;
  font-size: 0.75rem;
`;

export default Welcome;

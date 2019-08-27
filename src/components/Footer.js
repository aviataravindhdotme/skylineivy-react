/** @jsx jsx */
import React from 'react';
import {css,jsx} from '@emotion/core';


const footerContainer = css`
width:80vw;
margin-left:10vw;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 2fr;
`

const footerList1=css`
grid-column:1/1;
height:100px;
margin-bottom:30px;
`;

const footerList2=css`
grid-column:3/3;
height:100px;
margin-bottom:30px;
`;

const footerNewsLetter=css`
grid-column:5/5;
height:100px;
margin-bottom:30px;
`;

const footerListItems=css`
list-style-type:none;

`;

const footerNewsLetterHeader=css`
font-size:1.25rem;
font-weight:bold;
margin-bottom:5px;
`;

 const footerInput= css`
 width:25vw;
 `

class Footer extends React.Component{

    render(){
        return(
          <div css={footerContainer}>
              <div css={footerList1}>
                    <ul css={footerListItems}>
                        <li>About</li>
                        <li>Company</li>
                        <li>Locations</li>
                        <li>Contact</li>
                        <li>Hours</li>
                    </ul>
              </div>
              <div css={footerList2}>
                  <ul css={footerListItems}>
                      <li>Twitter</li>
                      <li>Facebook</li>
                      <li>Instagram</li>
                      <li>LinkedIn</li>

                  </ul>
              </div>
              <div css={footerNewsLetter}>
                  <div css={footerNewsLetterHeader}>Newsletter:</div>
                  <input type="text" css={footerInput}/>
              </div>

          </div>
        );
    }
}

export default Footer;
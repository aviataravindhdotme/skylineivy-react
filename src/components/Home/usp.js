/** @jsx jsx */
import React from 'react';
import {jsx, css} from '@emotion/core';
import {Container, Row, Col} from "react-bootstrap";
import Calendar from '../../../images/calendar.svg';
const uspContainer=css`
margin-top:30px;
width:80vw;
margin-left:10vw;
padding:0;

display:flex;
justify-content:center;
`;

const uspRow=css`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;

const uspItems=css`
min-height:200px;
border:1px solid #ccc;
width:30%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) {
   {
    width:90%;
    
  }
}

`

const uspItemContent=css`
width:80%;
display:flex;
flex-direction:row;
justify-content:center;
margin-bottom:10px;
`;

const uspItemHeader=css`
width:50%;
text-transform:uppercase;
letter-spacing:.15rem;
font-weight:bold;
font-size:1rem;
text-align:center;
`;

const uspItemSubHeader=css`
line-height:1.4;
word-spacing:1px;
font-size:.75rem;
`;


class Usp extends React.Component{
    render(){
        return(
            <div css={uspContainer}>
                <div css={uspRow}>

                <div css={uspItems}>
                    <div css={uspItemContent}>
                        <img src={Calendar} />
                    </div>
                    <div css={[uspItemContent,uspItemHeader]}>
                        24/7 Customer Service
                    </div>
                    <div css={[uspItemContent,uspItemSubHeader]}>
                        Call us any time
                    </div>
                </div>
                <div css={uspItems}>
                    <div css={uspItemContent}>
                        <img src={Calendar} />
                    </div>
                    <div css={[uspItemContent,uspItemHeader]}>
                        Easy Online Returns
                    </div>
                    <div css={[uspItemContent,uspItemSubHeader]}>
                        Send within 30 Days
                    </div>
                </div>

                <div  css={uspItems}>
                    <div css={uspItemContent}>
                        <img src={Calendar} />
                    </div>
                    <div css={[uspItemContent,uspItemHeader]}>
                        Free Shipping Globally
                    </div>
                    <div css={[uspItemContent,uspItemSubHeader]}>
                        Delivery in 4 Days
                    </div>
                </div>
                </div>

        </div>


        );
    }
}

export default Usp;
/** @jsx jsx */
import React from 'react';
import {css, jsx} from "@emotion/core";
import Watch1 from "../../../images/products/watch1.jpg";
import Watch2 from "../../../images/products/watch2.jpg";
import Watch3 from "../../../images/products/watch3.jpg";
import Calendar from "../../../images/calendar.svg";

const featuredContainer=css`
margin-top:30px;
width:80vw;
margin-left:10vw;
text-align:center;
overflow:hidden;

`;


const featuredTitle=css`
width:100%;
span{
display:inline-block;
position:relative;
}
span:before, span:after{
content: "";
position:absolute;
height:2px;
top:50%;
width:1000px;
border:1px solid #d96528;
}
span:before{
right:100%;
margin-right:15px;
}
span:after{
left:100%;
margin-left:15px;
}
`;

const featuredItemsRow=css`
margin-top:50px;

width:100%;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
`;

const featuredItems=css`
min-height:300px;
width:25%;
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
`;

const featuredItemContent=css`
width:80%;
display:flex;
flex-direction:row;
justify-content:center;
margin-bottom:5px;
`;

const featuredItemHeader=css`
width:50%;
text-transform:uppercase;
letter-spacing:.15rem;
font-weight:400;
text-align:center;
`;

const featuredItemPrice=css`
line-height:1.4;
word-spacing:1px;
color:#d96528;
`;
const featuredItemLink=css`

cursor:pointer;
font-weight:bold;
font-size:0.75rem;
padding:10px 20px;
border:1px solid;
:hover{
background:black;
text-decoration:none;
color:white;
`;

class Featured extends React.Component{
render() {
    return(
        <div css={featuredContainer}>
            <div css={featuredTitle}>
                <h4><span>Featured Products</span></h4>
            </div>

            <div css={featuredItemsRow}>
                <div css={featuredItems}>
                    <div css={featuredItemContent}>
                        <img src={Watch1} />
                    </div>
                    <div css={[featuredItemContent,featuredItemHeader]}>
                        <h4>Desi Avramovitz</h4>
                    </div>
                    <div css={[featuredItemContent,featuredItemPrice]}>
                        <h5>$50.40</h5>
                    </div>
                    <div css={featuredItemContent}>
                        <a href="#" css={featuredItemLink}>View Item ></a>
                    </div>

                </div>
                <div css={featuredItems}>
                    <div css={featuredItemContent}>
                        <img src={Watch2} />
                    </div>
                    <div css={[featuredItemContent,featuredItemHeader]}>
                        <h4>Addy Alldre</h4>
                    </div>
                    <div css={[featuredItemContent,featuredItemPrice]}>
                        <h5>$33.99</h5>
                    </div>
                    <div css={featuredItemContent}>
                        <a href="#" css={featuredItemLink}>View Item ></a>
                    </div>
                </div>

                <div css={featuredItems}><div css={featuredItemContent}>
                    <img src={Watch3} />
                </div>
                    <div css={[featuredItemContent,featuredItemHeader]}>
                        <h4>Bernie Gledhill</h4>
                    </div>
                    <div css={[featuredItemContent,featuredItemPrice]}>
                        <h5>$102.99</h5>
                    </div>
                    <div css={featuredItemContent}>
                        <a href="#" css={featuredItemLink}>View Item ></a>
                    </div></div>

            </div>
        </div>
    );
}

}


export default Featured
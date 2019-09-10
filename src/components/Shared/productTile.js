/** @jsx jsx*/

import React from 'react';
import {css, jsx} from '@emotion/core';
import StarRating from "react-svg-star-rating";
import {Link} from "@reach/router";

const imgApi = "https://res.cloudinary.com/du7a4xfua/image/upload/v1567100881/"

const productTileContainer = css`
min-height:300px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border: 1px solid #eee2dc;
box-shadow: 0 3px 10px 0 #eee;
border-radius:40px;
padding:10px 20px 30px;
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) {
   {
    width:90%;
 
  }
}`;

const productTileContent = css`
width:80%;
display:flex;
flex-direction:row;
justify-content:center;
margin-bottom:5px;
`;

const productTileHeader = css`
width:50%;
text-transform:uppercase;
letter-spacing:.15rem;
font-weight:400;
text-align:center;
`;


const productTilePrice = css`
line-height:1.4;
word-spacing:1px;
color:#d96528;
`;
const productTileLink = css`

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


const ProductTile = (props) => {

    const {id, name, price, starrating, img, gender} = props.product;
    const productLink = "/view/" + id;

    return (
        <div css={productTileContainer}>
            <div css={productTileContent}>
                <img height="244px" width="244px" src={imgApi + img}/>

            </div>
            <div css={productTileContent}>
                <StarRating size={15} count={5} innerRadius={20}
                            activeColor={"#000"}
                            isReadOnly
                            initialRating={starrating}/>


            </div>
            <div css={[productTileContent, productTileHeader]}>
                <h4>{gender}</h4>
            </div>
            <div css={[productTileContent, productTilePrice]}>
                <h5>${price}</h5>
            </div>
            <div css={productTileContent}>
                <Link to="/view" state={props.product} css={productTileLink}>View Item ></Link>
            </div>

        </div>
    );

}

export default ProductTile;

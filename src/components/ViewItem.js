/** @jsx jsx */
import React, {useEffect, useState} from 'react';
import {css, jsx} from '@emotion/core';
import StarRating from "react-svg-star-rating";
import Featured from "./Shared/Featured";
import NumericInput from 'react-numeric-input';

const ViewItem = (props) =>{

    const imgApi = "https://res.cloudinary.com/du7a4xfua/image/upload/v1567100881/";
    const {img, name, description, color, starrating, price, review} = props.location.state;
    const [productCartCount, setProductCartCount] = useState(0);

    useEffect(()=>{
        window.scroll(0,0);
    },[props.location.state]);

    const viewItemContainer=css`
    width:80vw;
    margin-left:7vw;
    margin-top:75px;
    display:grid;
    grid-template-columns:20% 50%;
    grid-column-gap:5%;
    justify-content:center;
    `;

    const imageContainer=css`

    `;

    const detailsContainer=css`
     *{
     margin-bottom:20px;
     
     }
    `;
    const productPrice=css`
    line-height:1.4;
    word-spacing:1px;
    color:#d96528;
    `;

    const productButton = css`
    background-color:#d96528;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border:none;
    height:40px;
    width:120px;
    :hover{
    background-color:#c14103;
    `;

    const reviewContainer = css `
    width:80vw;
    margin-left:10vw;
    *{
    margin-bottom:20px;
    }
    `;

    const counterContainer=css`
    display:flex;
    `;


    const counterButton=css`
    width:45px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-weight:700;
    background-color:#000;
    border:none;
    `

    const counterInput=css`
    width:65px;
    height:45px;
    margin:0px 10px;
    text-align:center;
    font-size:1.5rem;
    `;

function decreaseCartCount () {
    setProductCartCount(productCartCount>0? productCartCount-1:0);
}

function increaseCartCount(){
    setProductCartCount(productCartCount+1);
}
    return(
        <div>
       <div css={viewItemContainer}>
           <div css={imageContainer}>
               <img src={imgApi+img} />
           </div>
           <div css={detailsContainer}>
               <h1>{name}</h1>
               <StarRating size={15} count={5} innerRadius={20}
                           activeColor={"#000"}
                           isReadOnly
                           initialRating={starrating}  />
               <h5 css={productPrice}>${price}</h5>
                <p>{description}</p>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto velit dolores repudiandae animi quidem, eveniet quod dolor facilis dicta eligendi ullam error. Assumenda in fugiat natus enim similique nam itaque.</p>

               <div css={counterContainer}>
                   <button css={counterButton} onClick={decreaseCartCount}>-</button>
                    <input type="text" value={productCartCount} css={counterInput}
                           onChange={e=> setProductCartCount(Number(e.target.value))}/>
                    <button css={counterButton} onClick={increaseCartCount}>+</button>
               </div>
               <p>Available in additional colors:<strong> {color}</strong></p>

               <button css={productButton}>Add to cart</button>
           </div>
       </div>
        <div css={reviewContainer}>
        <h2>Reviews</h2>
            <StarRating size={15} count={5} innerRadius={20}
                        activeColor={"#000"}
                        isReadOnly
                        initialRating={starrating}  />
                        <p>{review}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto placeat consequatur voluptas sit mollitia ratione autem, atque sequi odio laborum, recusandae quia distinctio voluptatibus sint, quae aliquid possimus exercitationem.</p>

        </div>
            <Featured />
        </div>

    );
}

export default ViewItem

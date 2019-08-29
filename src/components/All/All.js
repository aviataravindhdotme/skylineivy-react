/** @jsx jsx*/

import React, {useState, useEffect} from 'react';
import {css,jsx} from '@emotion/core';
import StoreData from '../../../storedata';
import ProductTile from "../Shared/productTile";

const allContainer=css`
width:80vw;
margin-left:10vw;
margin-top:50px;
display:grid;
grid-template-columns:75% 25%;
grid-column-gap:25px;
`;

const productsContainer=css`
display:grid;
width:100%;
grid-template-columns:30% 30% 30%;
justify-content:center;
grid-column-gap:10px;
grid-row-gap:20px;
`;

const filterContainer=css`
border:1px solid red;
height:200px`

const All = (props) =>{
    console.log(props.gender);
    // const [storeData, storeDataUpdate] = useState(props.gender !=='All'? StoreData.filter((p)=>p.gender == props.gender) : StoreData);
    const [storeData, storeDataUpdate] = useState(StoreData);


    useEffect(()=>{
        if(props.gender==="Male"){
            storeDataUpdate(storeData.filter(p=>p.gender === props.gender))
        }
    },[]);

    console.log("All "+props.gender + StoreData.length);
    console.log("All "+props.gender + storeData.length);

    return(
        <div css={allContainer}>
            <div css={productsContainer}>
                {storeData.map((p)=>{
                    return(
                        <ProductTile product={p} key={p.id} />
                    )
                })}
            </div>

            <div css={filterContainer}>
            </div>

        </div>
    )
}

export default All;
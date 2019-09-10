/** @jsx jsx*/

import React, {useState, useEffect} from 'react';
import {css, jsx} from '@emotion/core';
import StoreData from '../../../storedata';
import ProductTile from "../Shared/productTile";
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

const allContainer = css`
width:80vw;
margin-left:5vw;
margin-top:50px;
display:grid;
grid-template-columns:75% 25%;
grid-column-gap:15px;
`;

const productsContainer = css`
display:grid;
width:100%;
grid-template-columns:30% 30% 30%;
justify-content:center;
grid-column-gap:10px;
grid-row-gap:20px;
`;

const filterContainer = css`
`

const filterContentSlider = css`
border:1px solid green;
`;

const All = (props) => {

    const [storeData, setStoreData] = useState(StoreData);

    const [priceRange, setPriceRange] = useState(Math.max(...StoreData.map(s => s.price)));


    function onSliderChange(value) {
        setPriceRange(value)
    }

    function formatPriceRange(value) {
        return ("$" + value);
    }

    useEffect(() => {
        onSliderChange(Math.max(...StoreData.map(s => s.price)));
    }, [props.gender])

    return (
        <div css={allContainer}>
            <div css={productsContainer}>
                {storeData.map((p) => {
                    if ((props.gender === "All") && (p.price <= priceRange)) {
                        return (
                            <ProductTile product={p} key={p.id}/>
                        )
                    } else if ((p.gender === props.gender) && (p.price <= priceRange)) {
                        return (
                            <ProductTile product={p} key={p.id}/>
                        )
                    }
                })}
            </div>

            <div css={filterContainer}>
                <h3>Special Sale</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero iusto nemo laboriosam
                    perferendis voluptas ullam officiis, quibusdam quas quam eveniet est fugit delectus corporis
                    incidunt nam esse suscipit itaque?</p>
                <h3>Filter by Price:</h3>
                <p>Max Price: <strong>${priceRange}</strong></p>
                <Slider css={filterContentSlider} min={0} max={200} step={0.25} value={priceRange}
                        onChange={onSliderChange} format={formatPriceRange}
                        labels={{0: `$0`, 100: `$100`, 200: `$200`}}/>

            </div>

        </div>
    )
}

export default All;

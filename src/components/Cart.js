/** @jsx jsx */
import React, {useContext, useState} from 'react';
import {css, jsx} from "@emotion/core";
import {CartContext} from "../Context";
import StoreData from '../../storedata';


const Cart = () => {
    const [storeData, setStoreData] = useState(StoreData);
    let tempItem;
    console.log(storeData);
    const {state, dispatch} = useContext(CartContext);
    console.log(JSON.stringify(state));
    return (
        <div>
            <div css={cartContainer}>
                {state.cartTotal === 0 &&
                <h3>No Items to display</h3>
                }
                {state.cartTotal>0 &&
                    state.cartItems.map((item)=>{
                        [tempItem] = storeData.filter(i=>i.id === item.id);

                       return(

                        <div key={item.id}>
                            <h3>{item.id}</h3>
                            <h3>{tempItem.id}</h3>
                            <h3>{tempItem.description}</h3>
                            <h3>{item.count}</h3>
                        </div>
                        )
                    })

                }
            </div>

        </div>

    )
}

const cartContainer = css`
width:80vw;
margin-left:10vw;
margin-top:75px;

`

export default Cart;

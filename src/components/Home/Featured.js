/** @jsx jsx */
import React from 'react';
import {css, jsx} from "@emotion/core";
import Watch1 from "../../../images/products/watch1.jpg";
import Watch2 from "../../../images/products/watch2.jpg";
import Watch3 from "../../../images/products/watch3.jpg";
import Calendar from "../../../images/calendar.svg";
import ProductTile from "../Shared/productTile";
import StoreData from "../../../storedata";

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

class Featured extends React.Component{
    constructor(props){
        super(props);
        this.state={
            storeData: StoreData
        }
    }
render() {
        console.log(this.state.storeData);
    return(
        <div css={featuredContainer}>
            <div css={featuredTitle}>
                <h4><span>Featured Products</span></h4>
            </div>

            <div css={featuredItemsRow}>
                {this.state.storeData.map((p)=>{
                    if(p.fav){
                    return(
                       <ProductTile product={p} key={p.id}/>
                    )}
                })}

            </div>
        </div>
    );
}

}

export default Featured
/**@jsx jsx */

import React from 'react';
import {css , jsx} from '@emotion/core';
import BannerImage from '../../images/banner.jpg';

const bannerContainer=css`
margin-top:75px;
margin-bottom:30px;
width:100vw;
height:280px;
background-image:url(${BannerImage});
display:flex;
justify-content:center;
align-items:center;
`

const bannerText=css`
width:60%;
display:flex;
flex-wrap:wrap;
justify-content:center;
color:white;
h4{
width:100%;
text-align:center;
}
`;

class Banner extends React.Component{
    render(){
        return(
        <div css={bannerContainer}>
            <div css={bannerText}>
                <h4>"The surprising styles of Skyline Ivy are advanced for all seasons."</h4>
                <p>Hansel Andersen</p>
            </div>
        </div>
        );
    }
}

export default Banner;

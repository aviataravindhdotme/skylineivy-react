/** @jsx jsx */
import React from 'react';
import { css, jsx} from '@emotion/core';
import {Router } from '@reach/router';
import Home from "./Home/home";
import All from "./All/All";
import ViewItem from "./ViewItem";

const mainContainer=css`
width:100vw;
`;

class Main extends React.Component{
    render(){
        let cartCount = this.context;
        return(
            <div css={mainContainer}>

                <Router primary={false}>
                    <Home path="/" />
                    <All path="All" gender="All"/>
                    <All path="Men" gender="Male" priceRange="100"/>
                    <All path="Women" gender="Female" />
                    <ViewItem path="view" />
                </Router>
            </div>
        );
    }
}
export default Main;
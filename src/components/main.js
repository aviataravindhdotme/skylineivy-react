/** @jsx jsx */
import React from 'react';
import { css, jsx} from '@emotion/core';
import {Router } from '@reach/router';
import Home from "./Home/home";
import All from "./All/All";

const mainContainer=css`
width:100vw;
`;


class Main extends React.Component{
    render(){
        let cartCount = this.context;
        return(
            <div css={mainContainer}>

                <Router>
                    <Home path="/" />
                    <All path="/All" gender="All"/>
                    <All path="/Men" gender="Male" />
                    <All path="/Women" gender="Female" />


                </Router>
            </div>
        );
    }
}
export default Main;
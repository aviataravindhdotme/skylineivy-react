/** @jsx jsx */
import React from 'react';
import { css, jsx} from '@emotion/core';
import {Router } from '@reach/router';
import Home from "./Home/home";


const mainContainer=css`
width:100vw;
`;


class Main extends React.Component{
    render(){
        return(
            <div css={mainContainer}>
                <Router>
                    <Home path="/" />
                </Router>
            </div>
        );
    }
}

export default Main;
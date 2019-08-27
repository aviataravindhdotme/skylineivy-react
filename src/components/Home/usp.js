/** @jsx jsx */
import React from 'react';

import {jsx, css} from '@emotion/core';
import {Container, Row, Col} from "react-bootstrap";

const uspRow = css`
margin-top:30px;
margin-bottom:30px;
width:80vw;
margin-left:10vw;
`;
const uspItems=css`
height:200px;
border:1px solid red;
`

class Usp extends React.Component{
    render(){
        return(
        <Container >
            <Row>
                <Col xs={12} md={3} lg={3} css={uspItems}>Test</Col>
                <Col xs={12} md={3} lg={3} css={uspItems}>Test</Col>
                <Col xs={12} md={3} lg={3} css={uspItems}>Test</Col>
            </Row>
        </Container>

        );
    }
}

export default Usp;
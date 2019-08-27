/** @jsx jsx */
import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import { css, jsx} from '@emotion/core';
import { Link } from '@reach/router';

const navBar=css`
margin-top:30px;
margin-bottom:20px;
display:flex;
justify-content:center;
border-top:1px solid #ccc;
border-bottom:1px solid #ccc;
padding:10px 0;
width:80vw;
margin-left:10vw;
`;

const navGroup=css`
width:30%;
display:flex;
justify-content:space-around;

`;

const navItem=css`
transition:all .3s ease;
text-transform:uppercase;
border-left:1px solid #ddd;
list-style-type:none;
padding:0 20px;
cursor:pointer;
font-size:0.75rem;
:hover{
color:#d96528
}
`;

const isCurrent = ({isCurrent}) => {
    return isCurrent?{className:"navItemActive"}: {className: "navItem"}
}

const NavLink = props => (
    <Link getProps={isCurrent}{...props} />

);

class NavBar extends React.Component{

    render()
    {
        return(
            <Container>
                <Row>
            <Col>
                <div css={navBar}>
                    <div css={navGroup}>
                        <NavLink css={navItem} to="/">Home</NavLink>
                        <NavLink css={navItem} to="/All">All</NavLink>
                        <NavLink css={navItem} to="/Men">Men</NavLink>
                        <NavLink css={navItem} to="/Women">Women</NavLink>
                        <NavLink css={navItem} to="/Cart">Cart</NavLink>

                    </div>
                </div>
            </Col>
                </Row>
            </Container>
        )
    }
}

export default NavBar;
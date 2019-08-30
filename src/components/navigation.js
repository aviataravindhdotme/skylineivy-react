/** @jsx jsx */
import React, {useState, useEffect} from 'react';
import {Badge} from "react-bootstrap";
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
&:hover{
color:#d96528
}
&:last-child{
position:relative;
}
`;

const cartCountCSS=css`

top:50%;
left:35px;
`;
const isCurrent = ({isCurrent}) => {
    return isCurrent?{className:"navItemActive"}: {className: "navItem"}
}

const NavLink = props => (
    <Link getProps={isCurrent}{...props} />

);

const NavBar= () => {
    const [cartCount, setCartCount] = useState(0);
    const [showCartCount, setShowCartCount] =useState(false);

 useEffect(()=> {
     setShowCartCount(cartCount > 0)
 },[cartCount])

    return(

                <div css={navBar}>
                    <div css={navGroup}>
                        <NavLink css={navItem} to="/">Home</NavLink>
                        <NavLink css={navItem} to="/All">All</NavLink>
                        <NavLink css={navItem} to="/Men">Men</NavLink>
                        <NavLink css={navItem} to="/Women">Women</NavLink>
                        <NavLink css={navItem} to="/Cart">Cart {(showCartCount)&&<Badge css={cartCountCSS} variant="light">{cartCount}</Badge>}</NavLink>
                    </div>
                </div>

        )

}

export default NavBar;
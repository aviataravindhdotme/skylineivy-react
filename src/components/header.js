import React from 'react';
import {Container, Row, Col} from "react-bootstrap";


class Header extends React.Component{

    render(){
        return(
            <Container>
                <Row>
                    <Col className="center-align">
                        <h1> Skyline Ivy</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;
import React from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarMobile, NavBarComputer } from '../NavBar';

export default function BarGeneric() {
    const param = useParams()
    const barName = param.barName

    return (
        <Container fluid className="Bar Content">
            <Col xs={12}>
                <h2>Bar {barName}</h2>


            </Col>
            {/* <NavBar></NavBar> */}
        </Container>
    )
}
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarMobile, NavBarComputer } from '../NavBar';

export default function BarBarasBacke() {
    const barLinkStyle = ( {isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
        }
    }

    return (
        <Container fluid className="Bar Content">
            <Col xs={12}>
                <h2>Baras Backe</h2>


            </Col>
            {/* <NavBar></NavBar> */}
        </Container>
    )
}
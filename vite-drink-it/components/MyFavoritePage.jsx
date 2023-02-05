import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBar } from './NavBar';

export default function MyFavoriteBars() {

    const barLinkStyle = ( {isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
        }
    }

    return (
        <Container fluid className="List Bar Content">
            <Col xs={12}>
                <h2>My Favorite Bars</h2>

                {/* <NavLink style={barLinkStyle} to='/ListBars/BarasBacke'> */}
                <NavLink style={barLinkStyle} to='BarasBacke'> 
                    Baras
                </NavLink>

                <NavLink style={barLinkStyle} to='/ListBars/Carmen'>
                    Carmen
                </NavLink>

                <Link to='BlackElk'>Black Elk</Link>
                <NavLink to='BlackElk'>Black Elk</NavLink>


            </Col>
            <Outlet></Outlet>

            <NavBar></NavBar>
        </Container>
    )
}
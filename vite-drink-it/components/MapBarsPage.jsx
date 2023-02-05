import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBar } from './NavBar';

export default function MapBarsPage() {
    return (
        <Container fluid className="List Bar Content">
            <Col xs={12}>
                <h2>Map</h2>
                <form action="/home">
                    <p>
                        <label>Email address</label><br/>
                        <input type="text" name="first_name" required />
                    </p>
                    <p>
                        <label>Password</label><br/>
                        <input type="password" name="password" required />
                    </p>
                    <p>
                        <button id="sign_btn" type="submit">SignIn</button>
                        {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
                    </p>
                </form>
                <NavBar></NavBar>
            </Col>
        </Container>
    )
}
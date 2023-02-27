import React, { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SignInPage() {

    const navigate = useNavigate();
    const handleOnClick = useCallback( () => navigate('/ListBars'));

    return (

        <Container fluid className="SignIn Content">

            <Row className="justify-content-center">
                <Col lg={3} md={5} sm={8} xs={12}>
                    <img src="/Logo-without-bg.svg" className="logo" alt="Drink'it logo" />
                </Col>
            </Row>

            <Row>
                <h1 className="app-name">Drink'it</h1>
            </Row>

            <Col xs={12}>
                <h2>New?</h2>
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
                        <button id="sign_btn" onClick={handleOnClick}>
                            SignIn
                        </button>
                    </p>
                </form>
            </Col>
        </Container>
    )
}
import React, { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAuth } from '../utils/authentification';



export default function SignInPage() {
    const AuthContext = useAuth()
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => {
        AuthContext.login(username, 1)
        navigate('/ListBars')
    });
    const [username, ChangeUserName] = useState('')
    const [password, ChangePassword] = useState('')


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
                <form action="/home" onSubmit={handleOnClick}>
                    <p>
                        <label>Email address</label><br />
                        <input type="text" name="first_name" onChange={(e) => ChangeUserName(e.target.value)} required />
                    </p>
                    <p>
                        <label>Password</label><br />
                        <input type="password" name="password" onChange={(e) => ChangePassword(e.target.value)} required />
                    </p>
                    <p>
                        <button id="sign_btn" type="submit">
                            SignIn
                        </button>
                    </p>
                </form>
            </Col>
        </Container>
    )
}
import React, { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAuth } from '../utils/authentification';

// import { View, Image, StyleSheet, Dimensions, Alert } from 'react-native';
// import { Block, Button, Input, NavBar, Text } from 'galio-framework';


// const User = require('./user')
// const Note = require("./notes")


export default function LoginPage() {

    const navigate = useNavigate();
    const handleOnClick = useCallback( () => navigate('/SignIn'));
    const handleLogin = () => {
        auth.login(user)
        navigate('/ListBars')
    }
    //const handleOnClick = useCallback( () => navigate('/SignIn'), [navigate]);

    const [user, setUser] = useState('')
    const auth = useAuth()

    return (

        <Container fluid className="Login Content">

            <Row className="justify-content-center">
                <Col lg={3} md={5} sm={8} xs={12}>
                    <img src="/Logo-without-bg.svg" className="logo" alt="Drink'it logo" />
                </Col>
            </Row>

            <Row>
                <h1 className="app-name">Drink'it</h1>
            </Row>

            <Col xs={12}>
            <h2>Who are you?</h2>
            <form action="/home" id="signup">
                <p>
                    <label>
                        Email address{' '}<br/>
                        <input type="text" name="first_name" onChange={(e) => setUser(e.target.value)}/>
                    </label>
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password"/>
                </p>
                <p>
                    <button id="sign_btn" onClick={handleOnClick}>
                        SignIn
                    </button>

                    <button id="sub_btn" type="submit" onClick={handleLogin}>
                        Login
                        {/* <Link to='/ListBars'>Login</Link> */}
                    </button>
                    {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
                </p>
                <p>
                    <label className="right-label">Forget password?</label>
                </p>
            </form>
            {/* <footer>
            <p>First time? <Link to="/register">Create an account</Link>.</p>
            <p><Link to="/">Back to Homepage</Link>.</p>
            </footer> */}
            </Col>
        </Container>
    )
}
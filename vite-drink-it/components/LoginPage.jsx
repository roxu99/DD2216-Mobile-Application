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
    
    const [username, ChangeUserName] = useState('')
    const [password, ChangePassword] = useState('')
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/SignIn'));
    const handleLogin = (event) => {
        event.preventDefault();
        if ((username == "admin") & (password == "admin")) {
            auth.login(username, 2)
            navigate('/ListBars')
        }
        else {
            if ((username == "user") & (password == "password")) {
                auth.login(username, 1)
                navigate('/ListBars')
            } else {
                alert("Unknown user or password")
            }
        }
    }
    //const handleOnClick = useCallback( () => navigate('/SignIn'), [navigate]);

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
                <form action="/home" id="signup" onSubmit={handleLogin}>
                    <p>
                        <label>
                            Email address{' '}<br />
                            <input type="text" name="first_name" onChange={(e) => ChangeUserName(e.target.value)} required />
                        </label>
                    </p>
                    <p>
                        <label>Password</label><br />
                        <input type="password" name="password" onChange={(e) => ChangePassword(e.target.value)} required />
                    </p>
                    <p>

                        <button id="sub_btn" type="submit">
                            Login
                            {/* <Link to='/ListBars'>Login</Link> */}
                        </button>
                        <button id="sign_btn" onClick={handleOnClick}>
                            SignIn
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
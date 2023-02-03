import React from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';

// import { View, Image, StyleSheet, Dimensions, Alert } from 'react-native';
// import { Block, Button, Input, NavBar, Text } from 'galio-framework';


// const User = require('./user')
// const Note = require("./notes")


export default function LoginPage() {
return (
    <Col xs={12}>
    <h2>Who are you?</h2>
    <form action="/home" id="signup">
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
            <button id="sub_btn" type="submit">Login</button>
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
        )
        }
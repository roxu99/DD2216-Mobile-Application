import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios'

import LoginPage from '../components/LoginPage'

        function App() {
                    const [count, setCount] = useState(0)
                    const [quote, setQuote] = useState('')

                            return (
                                    <Container fluid className="App content">
    <Row className="justify-content-center">
        <Col lg=
                            {3} md={5} sm={8} xs={12}>
        <img src="/Logo-without-bg.svg" className="logo" alt="Drink'it logo" />
        </Col>
    </Row>
    <Row>
        <h1 className="app-name">Drink'it</h1>

        
                            {/* <h1> {quote} </h1> */}
                            

    </Row>                           
    <LoginPage></LoginPage>




    
                            {/*     <button onClick={() => axios.get('https:/api.kanye.rest').then(
                             result => setQuote(result.data.quote)
                             )}>
                             Click me
                             </button> */}
                            
</Container>
                            )
        }

export default App

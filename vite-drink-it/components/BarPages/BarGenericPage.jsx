import React from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarMobile, NavBarComputer } from '../NavBar';
import '../css/BarGenericPage.css';
import { HandThumbsUp, HandThumbsUpFill, HandThumbsDown, HandThumbsDownFill } from 'react-bootstrap-icons'
import barImage0 from './img/bar0.jpg'
//import BARIMAGES from './images';

export default function BarGeneric() {
    const param = useParams()
    const barId = param.barId
    // const barInfo = get_Info_Bar(barId)
    const barNames = ["Carmen", "Baras Backe", "Lion Bar","BlackElk"];
    const barCheapestPrice = [39, 42, 49, 49]
    const correspondVolume = [40, 40, 50, 50]
    const barAddress = [    "Tjärhovsgatan 14, 116 21 Stockholm", 
                            "Götgatan 33, 116 21 Stockholm", 
                            "Sveavägen 74, 113 59 Stockholm",
                            "Sveavägen 61, 113 59 Stockholm" ]
    const suggestion = [42, 40]

    return (
        <div className='Page'>
            <Container className="Bar Content">
                <Row>
                    <Col md={2} className="d-md-block d-none">
                        <NavBarComputer></NavBarComputer>
                    </Col>
                    <Col md={10} sm={12} xs={12} className='Bar information'>
                        <h2 class="title">{barNames.at(barId)}</h2>
                        {/* <img src={require('../../src/img/bar0.jpg').default} ></img> */}
                        <img alt="Bar's image" src={barImage0} style={{height:'20vh', width:'80%'}}></img>

                        <p>Address: {barAddress[barId]}</p>
                        <p>Cheapest price: {barCheapestPrice[barId]} kr</p>
                        <p>Price per liter: {barCheapestPrice[barId]/correspondVolume[barId]*100} kr/L</p>
                        <p>Distance: 100m</p>
                        <p>Travel Time: 2min walk</p>

                        <button>Suggest new price</button>

                        <p>Validate the suggestion <HandThumbsUp></HandThumbsUp></p>


                        <p>Other suggestion</p>
                        <p><HandThumbsUp></HandThumbsUp> {suggestion[0]}kr/{suggestion[1]}cL <HandThumbsDown></HandThumbsDown></p>

                        <button>Go There</button>

                    </Col>
                </Row>
            </Container>
            <NavBarMobile></NavBarMobile>
        </div>
    )
}


function changeIcon(){
    return {

    }
}
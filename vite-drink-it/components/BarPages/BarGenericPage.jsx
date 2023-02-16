import React from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarMobile, NavBarComputer } from '../NavBar';
import '../css/BarGenericPage.css';
import { HandThumbsUp, HandThumbsUpFill, HandThumbsDown, HandThumbsDownFill } from 'react-bootstrap-icons'
import barImage0 from './img/bar0.jpg'
import { Table } from 'react-bootstrap';
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
    const suggestion = [[42, 40], [], [], []]
    const suggBool = true ? suggestion[barId]!=[] : false

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
                        <img alt="Bar's image" src={barImage0} style={{height:'20vh'}}></img>
                        

                        <Table id="table-generic" class="table">
                            <tbody class="borderless">
                                {/* <tr>
                                    <th scope="row"> Address</th>
                                    <td>{barAddress[barId]}</td>
                                </tr> */}
                                <tr>
                                    <th scope="row">Cheapest Price</th>
                                    <td class="red-price">{barCheapestPrice[barId]} kr/ {correspondVolume[barId]}cl</td>
                                </tr>
                                <tr>
                                    <th scope="row">Price per liter</th>
                                    <td>{barCheapestPrice[barId]/correspondVolume[barId]*100} kr/L</td>
                                </tr>
                                <tr>
                                    <th scope="row">Distance</th>
                                    <td>100m</td>
                                </tr>
                                <tr>
                                    <th scope="row">Travel Time</th>
                                    <td>2min walk</td>
                                </tr>
                            </tbody>
                        </Table>

                        <button id="btn-suggestion">Suggest new price</button>
                        <br></br><br></br>

                        
                        <h3>Validate the suggestion <HandThumbsUp id="val-thumb"></HandThumbsUp></h3>
                        <br></br>

                        {function () {
                            if({suggBool}) {
                                return {
                                    
                                }

                            }
                        }}


                        {/* <h4>Other suggestion</h4>
                            <Col><h3 id="oth-thumb-left"><HandThumbsUp></HandThumbsUp></h3></Col>
                            
                            <Col><h3 class="red-price">{suggestion[0][0]} kr/ {suggestion[0][1]} cL</h3></Col>
                            <Col><h3 id="oth-thumb-right"><HandThumbsDown></HandThumbsDown></h3></Col>

                        <br></br><br></br> */}

                        <div class="boxed">
                            <br></br>
                            <h4>Other suggestion</h4>     
                                <h3><HandThumbsUp id="oth-thumb-left"></HandThumbsUp>
                                    <mark class="red-price">{suggestion[0][0]} kr/ {suggestion[0][1]} cL</mark><HandThumbsDown id="oth-thumb-right"></HandThumbsDown></h3>
                            <br></br>
                        </div>
                        <br></br><br></br>


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

// function displayOtherSuggestion(suggBool, suggestion) {
//     if(suggBool==true) {
//         return {
//             <HandThumbsUp></HandThumbsUp> {suggestion[0]}kr/{suggestion[1]}cL <HandThumbsDown></HandThumbsDown>
//         }
//     }

// }
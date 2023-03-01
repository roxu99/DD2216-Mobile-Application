import React, { useCallback, useState}from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarMobile, NavBarComputer } from '../NavBar';
import '../css/BarGenericPage.css';
import { HandThumbsUp, HandThumbsUpFill, HandThumbsDown, HandThumbsDownFill } from 'react-bootstrap-icons'
import barImage0 from './img/bar0.jpg'
import { Modal, Table } from 'react-bootstrap';
import { popup } from 'leaflet';
//import BARIMAGES from './images';

import { Heart, HeartFill } from 'react-bootstrap-icons';
import { barCheapestPrice,barLiked, barNames, suggestion, correspondVolume } from '../Data';
import { useAuth } from '../../utils/authentification';

export default function BarGeneric() {
    const param = useParams()
    const barId = param.barId
    const context = useAuth()

    if (context.autorisation < 1) {
        const navigate = useNavigate()
        navigate("/login")
    }
     // const barInfo = get_Info_Bar(barId)
    // const barNames = ["Carmen", "Baras Backe", "Lion Bar","BlackElk"];
    // const barCheapestPrice = [39, 42, 49, 49]
    // const correspondVolume = [40, 40, 50, 50]
    // const barAddress = [    "Tjärhovsgatan 14, 116 21 Stockholm", 
    //                         "Götgatan 33, 116 21 Stockholm", 
    //                         "Sveavägen 74, 113 59 Stockholm",
    //                         "Sveavägen 61, 113 59 Stockholm" ]
    const suggBool = true ? suggestion[barId]!='' : false

    const [liked,ChangeLike] = useState(barLiked[barId])
    function LikeBar(){
        barLiked[barId] = 1- barLiked[barId]
        ChangeLike(barLiked[barId])
    }

    // const [show, setShow] = useState(false)
    // const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)

    function ShowOtherSuggestion(bool) {
        if(bool==true) {
            return (
                <div id="suggestion-box" className="boxed">
                <br></br>
                <h4>Other suggestion</h4>     
                    <h3><HandThumbsUp id="oth-thumb-left"></HandThumbsUp>
                        <mark className="red-price">{suggestion[barId][0]} kr/ {suggestion[barId][1]} cL</mark><HandThumbsDown id="oth-thumb-right"></HandThumbsDown></h3>
                <br></br>
                </div>
            )
        }
    }

    function SuggestionForm2() {
        // pop = window.open('/');
        var elem = document.getElementById("suggestion-form")
        // var form = document.createTextNode("zqdefsrdg")
        // var form = document.createElement("form")
        // elem.appendChild(form)
    }

    function SuggestionFormPopUp() {
        pop = window.open('/NewSuggestionForm');
    }


    return (
        <div className='Page'>
            <NavBarComputer></NavBarComputer>
            <Container className="Bar Content">
                <Row>
                    <Col md={8} sm={12} xs={12} className='Bar information offset-md-3'>
                        <h2 className="title">{barNames.at(barId)}                   
                            {
                                liked == 1 ? <HeartFill id="fav" onClick={LikeBar}></HeartFill> : <Heart id="fav" onClick={LikeBar}></Heart>
                            }
                        </h2>

                        {/* <img src={require('../../src/img/bar0.jpg').default} ></img> */}
                        <img alt="Bar's image" src={barImage0} style={{height:'20vh'}}></img>
                        

                        <Table id="table-generic" className="table">
                            <tbody className="borderless">
                                {/* <tr>
                                    <th scope="row"> Address</th>
                                    <td>{barAddress[barId]}</td>
                                </tr> */}
                                <tr>
                                    <th scope="row">Cheapest Price</th>
                                    <td className="red-price">{barCheapestPrice[barId]} kr/ {correspondVolume[barId]}cl</td>
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

                        <button id="btn-suggestion" onClick={SuggestionFormPopUp} type="submit">Suggest new price</button>
                        {/* <Modal>

                        </Modal> */}

                        <br></br><br></br>
                        
                        <h3>Validate the suggestion <HandThumbsUp id="val-thumb"></HandThumbsUp></h3>
                        <br></br>
                        
                        <div id="suggestion-form"></div>
                        {ShowOtherSuggestion(suggBool)}

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
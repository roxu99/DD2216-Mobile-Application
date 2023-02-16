import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarMobile, NavBarComputer } from '../NavBar';
import {barNames,barLiked} from '../Data'
import { Heart, HeartFill } from 'react-bootstrap-icons';

export default function BarGeneric() {
    const param = useParams()
    const barId = param.barId
    const [liked,ChangeLike] = useState(barLiked[barId])


    function LikeBar(){
        barLiked[barId] = 1- barLiked[barId]
        ChangeLike(barLiked[barId])
    }

    // const barInfo = get_Info_Bar(barId)

    return (
        <div className='Page'>
            <Container fluid className="Bar Content">
                <Row>
                    <Col md={2} className="d-md-block d-none">
                        <NavBarComputer></NavBarComputer>
                    </Col>
                    <Col md={10} sm={12} className='Map'>
                        <h2>Bar {barNames.at(barId)}</h2>
                    </Col>
                </Row>
                <Row>
                    {
                        liked == 1 ? <HeartFill onClick={LikeBar}></HeartFill> : <Heart onClick={LikeBar}></Heart>
                    }
                </Row>
            </Container>
            <NavBarMobile></NavBarMobile>
        </div>
    )
}
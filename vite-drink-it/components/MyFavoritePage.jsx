import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarComputer, NavBarMobile } from './NavBar';
import { barNames, barLiked, correspondVolume, barCheapestPrice } from './Data'
import printBar from './printBarfunction';


export default function MyFavoriteBars() {

    const barLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
        }
    }
    const list_like = []

    for (let id = 0; id < barLiked.length; id++) {
        if (barLiked.at(id) == 1) {
            list_like.push(<Row key={id}>
                {printBar(id)}
            </Row>)
        }
    }


    return (
        <div className='Page'>
            <NavBarComputer></NavBarComputer>
            <Container fluid className="List Bar Content">
                <Row>
                    <Col md={8} sm={12} xs={12} className="offset-md-3">
                        <h2>My Favorite Bars</h2>
                        {list_like}
                    </Col>
                    <Outlet></Outlet>
                </Row>

            </Container>
            <NavBarMobile></NavBarMobile>
        </div>
    )
}
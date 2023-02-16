import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarComputer, NavBarMobile } from './NavBar';
import { barNames, barLiked, barIds } from './Data'


export default function MyFavoriteBars() {
    function printBar(id) {
        const name = barNames.at(id)
        return (
            <Link to={'../Bar/' + id}>
                {name}
            </Link>
        )
    }

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
            <Container fluid className="List Bar Content">
                <Row>
                    <Col md={2} className="d-md-block d-none">
                        <NavBarComputer></NavBarComputer>
                    </Col>
                    <Col md={10} sm={12} xs={12}>
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
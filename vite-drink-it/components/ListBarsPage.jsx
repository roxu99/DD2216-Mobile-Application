import React, { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarComputer, NavBarMobile } from './NavBar';
import { Table } from 'react-bootstrap';
import './css/ListBarPage.css'
import { barNames, barIds, barLiked, barCheapestPrice, correspondVolume, barAddress } from './Data'
import printBar from './printBarfunction';
import { useAuth } from '../utils/authentification';

export default function ListBarsPage() {
    const context = useAuth()

    if (context.autorisation < 1) {
        const navigate = useNavigate()
        navigate("/login")
    }
    const barLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
        }
    }

    function GetListBar() {
        return (
            <div>
                {barIds.map(id => (
                    <Row key={id}>
                        {printBar(id)}
                    </Row>
                ))
                }
            </div>
        )
    }
    const [searchParams, setSearchParams] = useSearchParams()
    const showOpenBars = searchParams.get('filter') == 'open'

    return (
        <div className='Page'>
            <NavBarComputer></NavBarComputer>
            <Container fluid className="List Bar Content">
                <Row>
                    <Col xs={12} md={8} className="offset-md-3">
                        <h2>List of Bars</h2>
                        <button id="open" onClick={() => setSearchParams({ filter: 'open' })}>
                            Currently Open
                        </button>
                        <button id="reset" onClick={() => setSearchParams({})}>
                            Reset Filter
                        </button>

                        <div>
                            {showOpenBars ? (
                                <h2>Currently open bars</h2>
                            ) : (
                                <h2>All bars</h2>
                            )}
                        </div>
                        <br></br>

                        <GetListBar></GetListBar>


                    </Col>
                    <Outlet></Outlet>
                </Row>
            </Container>
            <NavBarMobile></NavBarMobile>
        </div>

    )
}
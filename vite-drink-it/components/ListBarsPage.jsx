import React from 'react'
import { Link, NavLink, Outlet, useSearchParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarComputer, NavBarMobile } from './NavBar';
import { Table } from 'react-bootstrap';
import './css/ListBarPage.css'
import {barNames,barIds, barLiked, barCheapestPrice, correspondVolume, barAddress} from './Data'


export default function ListBarsPage() {
    const barLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
        }
    }

    function printBar(id) {
        // const barNames = ["Carmen", "Baras Backe", "Lion's", "BlackElk"];
        const name = barNames.at(id)
        return (
            <div class="indiv-bar-box">
                <Link to={'../Bar/'+id}>
                    <h2>{name}</h2>
                </Link>
            

                <Table id="table-generic" class="table">
                    <tbody class="borderless">
                        <tr>
                            <th scope="row">Cheapest Price</th>
                            <td class="red-price">{barCheapestPrice[id]} kr/ {correspondVolume[id]}cl</td>
                        </tr>
                        <tr>
                            <th scope="row">Price per liter</th>
                            <td>{barCheapestPrice[id]/correspondVolume[id]*100} kr/L</td>
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
            </div>
        )
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
            <Container fluid className="List Bar Content">
                <Row>
                    <Col md={2} className="d-md-block d-none">
                        <NavBarComputer></NavBarComputer>
                    </Col>
                    <Col xs={12} md={10}>
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
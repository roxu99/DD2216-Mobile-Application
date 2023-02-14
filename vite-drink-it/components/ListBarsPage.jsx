import React from 'react'
import { Link, NavLink, Outlet, useSearchParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarComputer, NavBarMobile } from './NavBar';






export default function ListBarsPage() {
    const barLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
        }
    }

    function printBar(id) {
        const barNames = ["Carmen", "Baras Backe", "Lion's", "BlackElk"];
        const name = barNames.at(id)
        return (
            <Link to={'../Bar/'+id}>
                {name}
            </Link>
        )
    }


    function GetListBar() {
        const barIds = Array.from(Array(4).keys());
        return (
            <div>
                {barIds.map(id => (
                    <Row>
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
                        <Col><button id="reset" onClick={() => setSearchParams({})}>
                            Reset Filter
                        </button></Col>

                        <div>
                            {showOpenBars ? (
                                <h2>Currently open bars</h2>
                            ) : (
                                <h2>All bars</h2>
                            )}
                        </div>
                        <GetListBar></GetListBar>

                        {/* <NavLink style={barLinkStyle} to='/ListBars/BarasBacke'> */}
                        <NavLink style={barLinkStyle} to='../Bar/BarasBacke'>
                            Baras
                        </NavLink>

                        <NavLink style={barLinkStyle} to='/Bar/Carmen'>
                            Carmen
                        </NavLink>

                        <Link to='/Bar/BlackElk'>Black Elk</Link>
                        <NavLink to='/Bar/BlackElk'>Black Elk</NavLink>


                    </Col>
                    <Outlet></Outlet>
                </Row>
            </Container>
            <NavBarMobile></NavBarMobile>
        </div>

    )
}
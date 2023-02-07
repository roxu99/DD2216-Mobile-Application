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

                        {/* <NavLink style={barLinkStyle} to='/ListBars/BarasBacke'> */}
                        <NavLink style={barLinkStyle} to='BarasBacke'>
                            Baras
                        </NavLink>

                        <NavLink style={barLinkStyle} to='/ListBars/Carmen'>
                            Carmen
                        </NavLink>

                        <Link to='BlackElk'>Black Elk</Link>
                        <NavLink to='BlackElk'>Black Elk</NavLink>


                    </Col>
                    <Outlet></Outlet>
                </Row>


            </Container>
            <NavBarMobile></NavBarMobile>
        </div>

    )
}
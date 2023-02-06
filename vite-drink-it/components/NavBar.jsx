import { MapFill } from 'react-bootstrap-icons'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Link, NavLink } from 'react-router-dom'
import { AuthProvider } from '../utils/authentification'

export const NavBar = () => {
    return (
        <Container fluid id="NavBar" className='d-md-none'>
            <Row>
                <Col >
                    <Link to='/MapBars'><MapFill /></Link>
                </Col>
                <Col >
                    <Link to='/ListBars'>ListBars</Link>
                </Col>
                <Col >
                    <NavLink to='/MyFavorites'>MyFavotiteBars</NavLink>
                </Col>
                {/* {!auth.user && (<Link to='/login'>MyFavotiteBars</Link>)} */}
            </Row>
        </Container>
    )
}
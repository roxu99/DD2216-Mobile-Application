import { MapFill, PinMapFill, ListUl, BookmarkHeartFill, SuitHeartFill } from 'react-bootstrap-icons'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Link, NavLink } from 'react-router-dom'
import { AuthProvider } from '../utils/authentification'

export const NavBarMobile = () => {
    return (
        <div id="NavBarMobile" className='d-md-none'>
            <div className='ColBar'>
                <Link to='/MapBars' className='ItemBar'><MapFill /></Link>
                {/* <Link to='/MapBars' className='ItemBar'><PinMapFill></PinMapFill></Link> */}
            </div>
            <div className='ColBar'>
                <Link to='/ListBars' className='ItemBar'><ListUl /></Link>
            </div>
            <div className='ColBar'>
                {/* <NavLink to='/MyFavorites' className='ItemBar'><BookmarkHeartFill /></NavLink> */}
                <NavLink to='/MyFavorites' className='ItemBar'><SuitHeartFill /></NavLink>
            </div>
            {/* {!auth.user && (<Link to='/login'>MyFavotiteBars</Link>)} */}
        </div>
    )
}
export const NavBarComputer = () => {

    return (
        <Container fluid id="NavBarComputer" className='d-md-block d-none'>
            <Row>
                <NavLink to='/MapBars'> <PinMapFill /> Map </NavLink>
            </Row>
            <Row>
                <NavLink to='/ListBars'> <ListUl /> List </NavLink>
            </Row>
        </Container>
    )
}
import { MapFill, PinMapFill, ListUl, BookmarkHeartFill, SuitHeartFill, Gear } from 'react-bootstrap-icons'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Link, NavLink } from 'react-router-dom'
import { AuthProvider, useAuth } from '../utils/authentification'

export const NavBarMobile = () => {
    const context = useAuth()
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
            {context.autorisation === 2 &&
                <div className='ColBar'>
                    {/* <NavLink to='/MyFavorites' className='ItemBar'><BookmarkHeartFill /></NavLink> */}
                    <NavLink to='/Admin' className='ItemBar'><Gear /></NavLink>
                </div>
            }
        </div>
    )
}
export const NavBarComputer = () => {
    const context = useAuth()

    return (
        <div id="NavBarComputer" className='d-md-block d-none'>
            <Row>
                <NavLink to='/MapBars'> <PinMapFill /> Map </NavLink>
            </Row>
            <Row>
                <NavLink to='/ListBars'> <ListUl /> List </NavLink>
            </Row>
            <Row>
                <NavLink to='/MyFavorites'> <SuitHeartFill /> Favorites </NavLink>
            </Row>
            {context.autorisation === 2 &&
                <Row>
                    <NavLink to='/Admin'> <Gear /> Admin </NavLink>
                </Row>
            }
        </div>
    )
}
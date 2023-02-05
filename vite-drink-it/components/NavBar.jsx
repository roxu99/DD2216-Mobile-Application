import { Link, NavLink } from 'react-router-dom'
import { AuthProvider } from '../utils/authentification'

export const NavBar = () => {
    return (
        <nav>
            <Link to='/MapBars'>MapBars</Link>
            <Link to='/ListBars'>ListBars</Link>
            <NavLink to='/MyFavorites'>MyFavotiteBars</NavLink>

            {/* {!auth.user && (<Link to='/login'>MyFavotiteBars</Link>)} */}
        </nav>
    )
}
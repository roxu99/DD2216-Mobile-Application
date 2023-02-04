import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav>
            <Link to='/MapBars'>MapBar</Link>
            <Link to='/ListBars'>ListBar</Link>
        </nav>
    )
}
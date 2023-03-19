import { Logo, NavLink } from '../Components/Components';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({})=>{

    return (
        <nav className='navbar app-nav align-items-center'>
            <Logo />
            <ul className="navbar nav">
                <li className="nav-item">
                    {/* <NavLink text={'Home'} /> */}
                </li>
            </ul>
        </nav>
    );
}

export {Header};
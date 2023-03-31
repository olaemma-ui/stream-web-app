import { NavLink } from 'react-router-dom';
import { BarsIcon, SearchIcon } from '../../Icons';
import { Logo } from '../Components';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar bg-glass app-container app-nav pb-">
            <div className="logo">
                <Logo className=''/>
            </div>
            <ul className="navbar nav navigation align-items-center p-0">
                <li className="nav-item active">
                    <NavLink to={'/'} className={'nav-link'}>
                        <span> Home </span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to={'/'} className={'nav-link'}>
                        <span> Movies </span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to={'/'} className={'nav-link'}>
                        <span> Tv Show </span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to={'/'} className={'nav-link'}>
                        <span> Series </span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to={'/'} className={'nav-link'}>
                        <span> Tv Show </span>
                    </NavLink>
                </li>
            </ul>
            <div className="d-flex gap-2">
                <input type="text" className='search' placeholder='Search' name="" id="search" />
                <div className="btn-group others align-items-center">
                    <button className="btn pt-0 pl-2 pr-2">
                        <SearchIcon className='icon' />
                    </button>

                    <button className="btn pt-0 pl-2 pr-2">
                        <BarsIcon className='icon' />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export {Navbar};
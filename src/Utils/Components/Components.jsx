import './Components.css';

import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';

const Logo = ({className})=>{
    return(
        <img src={logo} alt="Stream Logo" className={'logo '+className} />
    );
}

const NavLink = ({path, text})=>{
    return (
        <Link to={path ?? '/'} className='app-link'>{text}</Link>
    );
}

export{
    Logo,
    NavLink
}
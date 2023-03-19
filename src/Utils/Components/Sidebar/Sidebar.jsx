import { NavLink } from 'react-router-dom';
import { Logo } from '../Components';
import './Sidebar.css';
import { FilmIcon, VideoCameraIcon, XMarkIcon } from '../../Icons';

const SideNav = ()=>{

    return (
        <aside className={'side-bar-parent'}>
            
            <div className="side-bar bg-app-primary">
                
                <div className="nav-logo">
                    
                    <button className="btn close-btn">
                        <XMarkIcon className={'close'} />
                    </button>
                </div>
                
                <h5 className='side-nav-heading w-100 p-5 pt-3 pb-2'>Video</h5>
                
                <u className="navbar nav flex-column w-100 pb-4 pt-3 nav-border border-bottom-0 video">
                    
                    <li className="nav-item side-nav-item mt-3 active">
                        <NavLink to={'/'} className={'nav-link side-nav-link'}>
                            <FilmIcon className={'icon'} />
                            <span> Home </span>
                        </NavLink>
                    </li>

                    <li className="nav-item side-nav-item mt-3">
                        <NavLink to={'/'} className={'nav-link side-nav-link'}>
                            <VideoCameraIcon className={'icon'} />
                            <span> Watch Now </span>
                        </NavLink>
                    </li>

                    {/* <li className="nav-item side-nav-item mt-3">
                        <NavLink to={'/'} className={'nav-link side-nav-link'}>
                            <VideoCameraIcon className={'icon'} />
                            <span> Home </span>
                        </NavLink>
                    </li>

                    <li className="nav-item side-nav-item mt-3">
                        <NavLink to={'/'} className={'nav-link side-nav-link'}>
                            <VideoCameraIcon className={'icon'} />
                            <span> Home </span>
                        </NavLink>
                    </li> */}
                </u>

                <h5 className='side-nav-heading w-100 p-5 pt-3 pb-2'>Audio</h5>
                
                <u className="navbar nav flex-column w-100 pb-4 pt-3 nav-border border-bottom-0 audio">
                    
                    <li className="nav-item side-nav-item">
                        <NavLink to={'/'} className={'nav-link side-nav-link'}>
                            <VideoCameraIcon className={'icon'} />
                            <span> Listen Now </span>
                        </NavLink>
                    </li>

                    <li className="nav-item side-nav-item mt-3">
                        <NavLink to={'/'} className={'nav-link side-nav-link'}>
                            <FilmIcon className={'icon'} />
                            <span> New Songs </span>
                        </NavLink>
                    </li>

                    {/* <li className="nav-item side-nav-item mt-3">
                        <NavLink to={'/'} className={'nav-link side-nav-link'}>
                            <VideoCameraIcon className={'icon'} />
                            <span> Top </span>
                        </NavLink>
                    </li>

                    <li className="nav-item side-nav-item mt-3">
                        <NavLink to={'/'} className={'nav-link side-nav-link'}>
                            <VideoCameraIcon className={'icon'} />
                            <span> Home </span>
                        </NavLink>
                    </li> */}
                </u>
            </div>
            
        </aside>
    );
}

export {SideNav};
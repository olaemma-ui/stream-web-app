import './Components.css';

import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import { ChartBarIcon, PlayIcon, StarIcon } from '../Icons';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Logo = ({className})=>{
    return(
        <img src={logo} alt="Stream Logo" className={'logo '+className} />
    );
}

const NavLink = ({path, text})=>{
    return (
        <Link to={path ?? '/'} 
            className='app-link'>
            {text}
        </Link>
    );
}

const MoviePosterCard = ({img}) => {
    return (
        <>
            <div className="poster-card">
                
                <img src={img} alt="poster" className='poster-img' />
                <div className="poster-body mt-2" >
                    <div className="poster-header">
                        <p className='poster-title'>BLACK PANTHER</p>
                    </div>
                    <div className='poster-rating mt-2'>
                        <p>2018</p>
                        <p>
                            <StarIcon style={{
                                fill: 'var(--app-gold)', 
                                stroke: 'var(--app-gold)', 
                                transform: 'scale(0.5)'
                            }}/>
                                <span>6.8</span> 
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Trending = ({number, img}) =>{
    return (
       <React.Fragment>
            <div className="trending-number">
                <h1 className="number">
                    1
                </h1>
                <img src={img} className='trending-poste' alt="" srcset="" />
            </div>
       </React.Fragment>
    );
}

const SectionNav = ({navs, className, style})=>{
    return(
        <React.Fragment>
           <Container>
                <div className={"section-heading "+className} style={style}>
                    <a href='/#' className="btn text-light section-nav active">
                        Trends
                        <ChartBarIcon className='section-nav-icon m-1 ml-0 mt-0 mb-0' />
                    </a>

                    {/* <a href='/#' className="btn text-light section-nav">
                        Latest
                    <ChartBarIcon className='section-nav-icon m-1 ml-0 mt-0 mb-0' />
                    </a> */}
                </div>
           </Container>
        </React.Fragment>
    );
}

const Genres = ({genres = []})=>{
    return(
        <React.Fragment>
            <div className="genres">
                {
                    genres.map((e) => 
                    <button className='genre-btn' key={e['id']}>
                        {e['name']}
                    </button>
                )}
                <button className='genre-btn'>
                    Action
                </button>

                <button className='genre-btn'>
                    Action
                </button>

                <button className='genre-btn'>
                    Action
                </button>

                <button className='genre-btn'>
                    Action
                </button>
            </div>
        </React.Fragment>
    );
}

const MovieBackDrop = ({img}) =>{
    return (
      <React.Fragment>
        <div className="movieBackDrop" style={{backgroundImage: `url(${img})`}}>
            <div className="movieBackDrop-color">
                <div className="movieBackDrop-content">
                    <p className="movieBackDrop-title">
                        Rise Of the PLANET of APES Rise Of the PLANET of APES Rise Of the PLANET of APES
                    </p>
                    <div className="movieBackDrop-body">
                        <div className="data">
                            <span>Lang :</span> EN
                        </div>

                        <div className="data">
                            <span>Duration :</span> 2h 20m
                        </div>
                    </div>

                    <div className="movieBackDrop-footer">
                        <Link to='/' className='movieBackDrop-play-btn mt-3=4'>
                            <PlayIcon style={{stroke: 'white'}} />
                            Watch Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
}

const MovieLatest = ({banner, poster}) => {
    return(
        <React.Fragment>
            <div className="movieLatest" style={{background: `url(${banner})`}}>
                <div className="movieLatest-color app-container">
                    <Row className='align-items-center'>
                        <Col md={8} lg={8} className='mt-5'>
                            <h3 className="movieLatest-title slide-left">
                                Clash Of The Titans in The Wrath of Men
                            </h3>
                            
                            <div className="rating">
                                <div className="pg">
                                    PG-14
                                </div>
                                <span className='text-white'>2h 40m</span>
                            </div>
                            <p className='movieLatest-about'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo vero, minus nobis, veritatis corrupti atque illum tenetur sint rerum nesciunt asperiores sequi. Quia dolore delectus id debitis in incidunt?
                            </p>
                            <p className="banner-data text-app-primary">
                                Language : &nbsp; <span className='text-white'>EN</span>
                            </p>

                            <p className="banner-data text-app-primary">
                                Release Date : &nbsp; <span className='text-white'>08-09-2022</span>
                            </p>

                            <p className="banner-data text-app-primary">
                                Genres : &nbsp; <span className='text-white'>Drama, Action, Adventure</span>
                            </p>
                            <Link className="btn btn-app-primary play-btn mt-4">
                                <PlayIcon fill={'white'} className='mb-1'/> Watch Now
                            </Link>
                            
                        </Col>
                        <Col md={4} lg={4} className='mt-5'>
                            <img src={poster} className='movieLatest-poster' alt="Movie Title" />
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    );
}

const Section = ({title, icon})=>{
    return(
        <React.Fragment>
           <Container>
                <p className="btn text-light section-title mt-5">
                    {title}
                    {icon}
                    {/* <ClockIcon className='section-nav-icon m-1 ml-0 mt-0 mb-0' /> */}
                </p>
           </Container>
        </React.Fragment>
    );
}

const CircleAvatar = ({img, left, zIndex})=>(
    <React.Fragment>
        <img 
            src={img} 
            className='circle-avatar-img' 
            style={{
                zIndex,
                left
            }} alt="" />
    </React.Fragment>
);

export{
    Logo,
    NavLink,
    MoviePosterCard,
    Trending,
    SectionNav,
    Genres,
    MovieBackDrop,
    MovieLatest,
    Section,
    CircleAvatar,
}
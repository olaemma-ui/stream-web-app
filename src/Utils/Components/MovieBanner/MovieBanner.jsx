import { Col, Row } from 'react-bootstrap';
import img from '../../../assets/images/slider2.jpg';
import imdb from '../../../assets/images/imdb.png';
import './MovieBanner.css';
import {PlayCircleIcon, FilmIcon} from '../../Icons';
import { Link } from 'react-router-dom';

const MovieBanner = () => {
    return (
        <>
            <section className="banner" style={{backgroundImage: `url(${img})`}}>
                <div className="banner-color">
                    <div className="app-container">
                       <Row className='align-items-center banner-content'>
                            <Col lg={8} md={12}>
                                <p className="movie-banner-heading">
                                    BEST OF 2022
                                </p>
                                <h3 className="movie-banner-title">
                                    Clash Of The Titans in The Wrath of Men
                                </h3>
                                <p className="banner-data text-app-primary">
                                    Language : &nbsp; <span className='text-white'>2hrs : 40mins</span>
                                </p>
                                <div className="rating">
                                    <div className="pg">
                                        PG-14
                                    </div>
                                    <div className="imdb">
                                        <img src={imdb} alt="" srcset="" />
                                    </div>
                                    <span>10.5</span>
                                </div>
                                <p className='movie-about'>
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

                                <button className="btn btn-app-primary play-btn mt-4">
                                    <FilmIcon /> Watch Now
                                </button>
                                <Row>
                                    <Col>
                                        <div className="banner-cast">
                                            {/* <img src={img} className='banner-cast-image' alt="" /> */}

                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            {/* <Col lg={4} md={12}>
                                
                            </Col> */}
                       </Row>
                    </div>
                </div>
            </section>
        </>
    );
}

export {MovieBanner};
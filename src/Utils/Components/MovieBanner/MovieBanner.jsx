import { Col, Row } from 'react-bootstrap';
import img from '../../../assets/images/slider2.jpg';
// import imdb from '../../../assets/images/imdb.png';
import './MovieBanner.css';
import { PlayIcon} from '../../Icons';
import { Link } from 'react-router-dom';
import ReactOwlCarousel from 'react-owl-carousel';

const MovieBanner = () => {
    const options = {
        // margin: 30,
        responsiveClass: true,
        autoplay: true,
        smartSpeed: 50,
        rewind: true,
        items: 6,
        stagePadding: 40,
        responsive: {
            0: {
                items: 1,
            },
            300: {
                margin: -10,
                items: 1,
            },
            320: {
                margin: 20,
                stagePadding: 20,
                items: 4,
            },
            340: {
                // margin: 40,
                stagePadding: 30,
                items: 5,
            },
            380: {
                stagePadding: 35,
                margin: 0,
                items: 3,
            },
            400: {
                stagePadding: 30,
                items: 3,
            },
            600: {
                items: 3,
            },
            700: {
                // margin: 20,
                stagePadding: 10,
                items: 4,
            },
            800: {
                // margin: -20,
                items: 4,
            },
            900: {
                // margin: 130,
                items: 6,
            },
            1000: {
                margin: -20,
                items: 4,
            },
            // 1100: {
            //     margin: -160,
            //     items: 2,
            // },
            // 1200: {
            //     margin: 30,
            //     items: 3,
            // },
            // 1300: {
            //     margin: 160,
            //     items: 3,
            // },
            // 1400: {
            //     // margin: 50,
            //     items: 3,
            // },
            // 1500: {
            //     margin: 90,
            //     items: 4,
            // },
            // 1600: {
            //     // margin: 330,
            //     items: 4,
            // },
            // 1700: {
            //     margin: 80,
            //     items: 5,
            // },
            // 1800: {
            //     margin: 150,
            //     items: 9,
            // }
        },
    }
    return (
        <>
            <section className="banner" style={{backgroundImage: `url(${img})`}}>
                <div className="banner-color">
                    <div className="app-container pb-0">
                       <Row className='align-items-center banner-content'>
                            <Col lg={8} md={12}>
                                <p className="movie-banner-heading">
                                    BEST OF 2022
                                </p>
                                <h3 className="movie-banner-title slide-left">
                                    Clash Of The Titans in The Wrath of Men
                                </h3>
                                
                                <div className="rating">
                                    <div className="pg">
                                        PG-14
                                    </div>
                                    {/* <div className="imdb">
                                        <img src={imdb} alt="" srcset="" />
                                    </div> */}
                                    {/* <span>10.5</span> */}

                                    <span className='text-white'>2h 40m</span>
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

                                <Link className="btn btn-app-primary play-btn mt-4">
                                    <PlayIcon fill={'white'} className='mb-1'/> Watch Now
                                </Link>

                                <div className="banner-cast">
                                    
                                    <ReactOwlCarousel {...options}>
                                        <div className="banner-cast-image">
                                            <img src={img} className='e' alt="" />
                                            <span>O. James ksksmm s ij skj</span>
                                        </div>
                                        <div className="banner-cast-image">
                                            <img src={img} className='e' alt="" />
                                            
                                        </div>
                                        <div className="banner-cast-image">
                                            <img src={img} className='e' alt="" />
                                        </div>
                                        <div className="banner-cast-image">
                                            <img src={img} className='e' alt="" />
                                        </div>
                                        <div className="banner-cast-image">
                                            <img src={img} className='e' alt="" />
                                            <span>O. James ksksmm s ij skj</span>
                                        </div>
                                        <div className="banner-cast-image">
                                            <img src={img} className='e' alt="" />
                                            
                                        </div>
                                        <div className="banner-cast-image">
                                            <img src={img} className='e' alt="" />
                                        </div>
                                        <div className="banner-cast-image">
                                            <img src={img} className='e' alt="" />
                                        </div>
                                    </ReactOwlCarousel>
                                    {/* <img src={img} className='banner-cast-image' alt="" />
                                    <img src={img} className='banner-cast-image' alt="" />
                                    <img src={img} className='banner-cast-image' alt="" />
                                    <img src={img} className='banner-cast-image' alt="" /> */}
                                </div>
                            </Col>
                       </Row>
                    </div>
                </div>
            </section>
        </>
    );
}

export {MovieBanner};
import { MovieBanner } from "../../Utils/Components/MovieBanner/MovieBanner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Genres, MovieBackDrop, MovieLatest, MoviePosterCard, SectionNav, Trending } from "../../Utils/Components/Components";
import img from '../../assets/images/poster-1.jpg'
import img1 from '../../assets/images/black-panther.jpg'
import img2 from '../../assets/images/coffee.jpg'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import ReactOwlCarousel from 'react-owl-carousel2';
import { Col, Row } from "react-bootstrap";
import { ClockIcon } from "../../Utils/Icons";

const Home = () =>{
    const carouselOptions ={
        'infiniteLoop': true,
        'autoPlay': false,
        'centerMode':false,
        'useKeyboardArrows': true,
        'showThumbs': false
    }

    const options = {
        // margin: 20,
        responsiveClass: true,
        autoplay: true,
        smartSpeed: 1000,
        rewind: true,
        items: 8,
        stagePadding: 40,
        dots: false,
        responsive: {
            0: {
                items: 2,
            },
            300: {
                margin: 30,
                items: 2,
            },
            400: {
                margin: -30,
                items: 2,
            },
            600: {
                items: 3,
            },
            700: {
                margin: -50,
                items: 3,
            },
            800: {
                items: 3,
            },
            900: {
                margin: 130,
                items: 4,
            },
            1000: {
                items: 4,
            },
            1100: {
                margin: 130,
                items: 5,
            },
            1300: {
                margin: 0,
                items: 5,
            },
            1400: {
                margin: 130,
                items: 6,
            },
            1600: {
                // margin: 120,
                items: 6,
            },
            1700: {
                margin: 30,
                items: 7,
            },
            1800: {
                margin: 150,
                items: 9,
            }
        },
    };    

    const options2 = {
        // margin: 20,
        responsiveClass: true,
        autoplay: true,
        smartSpeed: 50,
        rewind: true,
        items: 8,
        stagePadding: 30,
        // dots: false,
        responsive: {
            0: {
                items: 1,
            },
            300: {
                margin: -10,
                items: 1,
            },
            320: {
                margin: 40,
                stagePadding: 10,
                items: 1,
            },
            340: {
                // margin: 40,
                stagePadding: 30,
                items: 1,
            },
            400: {
                stagePadding: 30,
                margin: 0,
                items: 1,
            },
            380: {
                stagePadding: 35,
                margin: 0,
                items: 1,
            },
            600: {
                items: 3,
            },
            700: {
                margin: 20,
                items: 2,
            },
            800: {
                margin: -20,
                items: 2,
            },
            900: {
                // margin: 130,
                items: 2,
            },
            1000: {
                margin: -20,
                items: 2,
            },
            1100: {
                margin: -160,
                items: 2,
            },
            1200: {
                margin: 30,
                items: 3,
            },
            1300: {
                margin: 160,
                items: 3,
            },
            1400: {
                // margin: 50,
                items: 3,
            },
            1500: {
                margin: 90,
                items: 4,
            },
            1600: {
                // margin: 330,
                items: 4,
            },
            1700: {
                margin: 80,
                items: 5,
            },
            // 1800: {
            //     margin: 150,
            //     items: 9,
            // }
        },
    };    

    return (
        <div className="home">
            <Carousel {...carouselOptions} className="bg-dark">
                <MovieBanner />
                <MovieBanner />
                <MovieBanner />
            </Carousel>
            <SectionNav/>
            <Genres />
            <ReactOwlCarousel {...{options}} >
                <MoviePosterCard img={img}/>
                <MoviePosterCard img={img1}/>
                <MoviePosterCard img={img2}/>
                <MoviePosterCard img={img}/>
                <MoviePosterCard img={img1}/>
                <MoviePosterCard img={img2}/>
                <MoviePosterCard img={img}/>
                <MoviePosterCard img={img1}/>
                <MoviePosterCard img={img2}/>
                <MoviePosterCard img={img}/>
                <MoviePosterCard img={img1}/>
                <MoviePosterCard img={img2}/>
            </ReactOwlCarousel>

            <SectionNav/>
            <Genres />
            <div className="app-container p-p-4 pt-0">
                <Row>
                    <Col lg={3} md={4} xxl={2} xl={3} xs={6}>
                        <MoviePosterCard img={img}/>
                    </Col>

                    <Col lg={3} md={4} xxl={2} xl={3} xs={6}>
                        <MoviePosterCard img={img1}/>
                    </Col>

                    <Col lg={3} md={4} xxl={2} xl={3} xs={6}>
                        <MoviePosterCard img={img2}/>
                    </Col>

                    <Col lg={3} md={4} xxl={2} xl={3} xs={6}>
                        <MoviePosterCard img={img}/>
                    </Col>

                    <Col lg={3} md={4} xxl={2} xl={3} xs={6}>
                        <MoviePosterCard img={img1}/>
                    </Col>

                    <Col lg={3} md={4} xxl={2} xl={3} xs={6}>
                        <MoviePosterCard img={img}/>
                    </Col>

                    <Col lg={3} md={4} xxl={2} xl={3} xs={6}>
                        <MoviePosterCard img={img1}/>
                    </Col>

                    <Col lg={3} md={4} xxl={2} xl={3} xs={6}>
                        <MoviePosterCard img={img}/>
                    </Col>

                    <Col lg={3} md={4} xxl={2} xl={3} xs={6}>
                        <MoviePosterCard img={img1}/>
                    </Col>

                    <Col lg={3} md={4} xxl={2} xl={3} xs={6}>
                        <MoviePosterCard img={img2}/>
                    </Col>

                    <Col lg={3} md={4} xxl={2} xl={3} xs={6}>
                        <MoviePosterCard img={img1}/>
                    </Col>

                    <Col lg={3} md={4} xxl={2} xl={3} xs={6}>
                        <MoviePosterCard img={img1}/>
                    </Col>
                </Row>
            </div>

            <div className="app-container pt-4">
                <p className="btn text-light section-title">
                    Upcoming
                    <ClockIcon className='section-nav-icon m-1 ml-0 mt-0 mb-0' />
                </p>
                <ReactOwlCarousel options = {options2}>
                    <MovieBackDrop img={img2}/>
                    <MovieBackDrop img={img2}/>
                    <MovieBackDrop img={img2}/>
                    <MovieBackDrop img={img2}/>
                    <MovieBackDrop img={img2}/>
                    <MovieBackDrop img={img2}/>
                    <MovieBackDrop img={img2}/>
                    <MovieBackDrop img={img2}/>
                    <MovieBackDrop img={img2}/>
                </ReactOwlCarousel>
            </div>

            <Carousel {...carouselOptions} centerMode={true}>
                <MovieLatest poster={img} banner={img} />
                <MovieLatest poster={img1} banner={img1} />
                <MovieLatest poster={img2}  banner={img2} />
            </Carousel>
    
            <div className="app-container">
            <p className="btn mt-5 text-light section-title">
                Popular
                <ClockIcon className='section-nav-icon m-1 ml-0 mt-0 mb-0' />
            </p>
            <ReactOwlCarousel options = {options2}>
                <MovieBackDrop img={img2}/>
                <MovieBackDrop img={img2}/>
                <MovieBackDrop img={img2}/>
                <MovieBackDrop img={img2}/>
                <MovieBackDrop img={img2}/>
                <MovieBackDrop img={img2}/>
                <MovieBackDrop img={img2}/>
                <MovieBackDrop img={img2}/>
                <MovieBackDrop img={img2}/>
            </ReactOwlCarousel>
            </div>
            
        </div>
    );
}

export {Home}
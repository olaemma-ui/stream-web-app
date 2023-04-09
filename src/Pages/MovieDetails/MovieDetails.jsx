import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import '../MovieDetails/MovieDetails.css';
import React  from "react";
import img from '../../assets/images/black-panther.jpg'
import { Link } from 'react-router-dom';
import { PlayCircleIcon, StarIcon } from '../../Utils/Icons';

const MovieDetails = ()=>(
    <React.Fragment>
        <section className='movie-details'>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="movie-details-parent" style={{background: `url(${img})`}}>
                            <div className="movie-details-parent-color">

                                <p>S2E2: "Track The Goat"</p>
                                <small>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente inventore nisi quae. 
                                    Saepe libero harum molestias deserunt autem sit, similique sint...
                                </small>
                                <Link to='/' className='movie-details-play-btn rounded-play' style={{transform: 'scale(2.5)'}}>
                                    <PlayCircleIcon style={{stroke: 'var(--app-light)'}} />
                                </Link>
                            </div>
                        </div>
                    </Col>
                    
                    <Col lg={8} className='mt-5'>
                        <div className="movie-details-heading">
                            <span><b>STREAM</b> ORIGINAL</span>
                            <h1>
                                Clash Of The TITANS
                            </h1>
                            <small>2018 | 2 Seasons | 16+</small> &nbsp;&nbsp;
                            <span>9.0 <StarIcon style={{fill: 'var(--app-gold)', marginBottom: '.4em'}}/></span>
                        </div>

                        <div className="movie-details-data mt-4">
                            <Tabs defaultActiveKey={1}>
                                <Tab eventKey={1} title={'OVERVIEW'}>

                                </Tab>

                                <Tab eventKey={2} title={'EPISODES'}>

                                </Tab>

                                <Tab eventKey={3} title={'TRAILERS'}>

                                </Tab>

                                <Tab eventKey={4} title={'RELATED'}>

                                </Tab>
                            </Tabs>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    </React.Fragment>
);

const MovieDetailsOverView = ()=>(
    <React.Fragment>
        
    </React.Fragment>
);

const MovieDetailsEpisodes = ()=>(
    <React.Fragment>
        
    </React.Fragment>
);

const MovieDetailsTrailers = ()=>(
    <React.Fragment>
        
    </React.Fragment>
);

const MovieDetailsRelated = ()=>(
    <React.Fragment>
        
    </React.Fragment>
);

export {MovieDetails};
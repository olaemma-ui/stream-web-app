import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Footer/Footer.css';
import { SocialIcon } from '../Components/Components';

const Footer = () => (
    <React.Fragment>
        <footer className='app-footer bg-app-primary bg-glass mt-5 pt-4 pb-1'>
            <Container>
                <Row>
                    <Col lg={7}>
                        <Row>
                            <Col xs={6} md={3}>
                                <NavLink to={'/'} className={'nav-link'}>
                                    <span> Terms Of Use </span>
                                </NavLink>
                            </Col>

                            <Col xs={6} md={3}>
                                <NavLink to={'/'} className={'nav-link'}>
                                    <span> Privacy-Policy </span>
                                </NavLink>
                            </Col>

                            <Col xs={6} md={3}>
                                <NavLink to={'/'} className={'nav-link'}>
                                    <span> FAQ </span>
                                </NavLink>
                            </Col>

                            
                            <Col xs={6} md={3}>
                                <NavLink to={'/'} className={'nav-link'}>
                                    <span> Watch List </span>
                                </NavLink>
                            </Col>
                            
                        </Row>

                        <small className='p-3 d-block'>
                            <span>&copy;</span> 2021 STREAM. <br /> All videos are fetched from TMDB (The Movie Database).
                        </small>
                    </Col>

                    <Col lg={5}>
                        <p className='p-3 pt-0 pb-0 pr-0'> Follow Us : </p>
                        <div className="social-account p-3 pt-0 pb-0 pr-0">
                            <SocialIcon/>
                            <SocialIcon/>
                            <SocialIcon/>
                            <SocialIcon/>
                            <SocialIcon/>
                        </div>
                        <p className='p-3 pb-0 pr-0'> About Developer : </p>
                    </Col>
                </Row>
                <p className='text-center'>@OLA EMMA</p>
            </Container>
        </footer>
    </React.Fragment>
);


export {Footer};
import { Col, Row } from 'react-bootstrap';
import './MovieBannerRounded.css';

const MovieBannerRounded = ({img})=>{
    return(
        <div className="movieRoundedBanner" style={{backgroundImage: `url(${img})`}}>
            <div className="movieBannerRoundedColor app-container">
                <Row>
                    <Col>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export {MovieBannerRounded};
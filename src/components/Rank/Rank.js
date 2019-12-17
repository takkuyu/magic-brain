import React from 'react';
import './Rank.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Rank = ({ celebrity, name, entries }) => {
    const upperName = celebrity.celebrityName.toUpperCase();
    const prob = Number(celebrity.probability) * 100;
    const percent = prob.toFixed(1);

    return (
        <div className="Rank-container">
            <div className='entries-container white f3'>
                {`${name} , your current entries count is...`}
                <div className='white f1 '>
                    {entries}
                </div>
            </div>

            <article className="br3 hidden ">
                <h1 className="br3 br--top bg-black white mv0 pv2 ph3" style={{ height: '50px', opacity: 0.9 }}>Result</h1>
                <Container className="outputForm bt b--black-10 d-flex align-items-center">
                    <Row className='name-section'>
                        <Col xs={2} style={{ paddingRight: 0, paddingLeft: 0, textAlign: 'center' }}>
                            <i className="fas fa-user" />
                        </Col>
                        <Col xs={10} style={{ paddingLeft: 0 }}>
                            <p>{upperName}</p>
                        </Col>
                        <Col xs={2} style={{ paddingRight: 0, paddingLeft: 0, textAlign: 'center' }}>
                            <i className="fas fa-percent" />
                        </Col>
                        <Col xs={10} style={{ paddingLeft: 0 }}>
                            <p style={{ marginBottom: 0 }}>{percent}<span>%</span></p>
                        </Col>
                    </Row>
                </Container>
            </article>
        </div>
    );
}

export default Rank;
import React from 'react'
import { Col, Row } from 'react-bootstrap'

function AcademicsContainer({ img, imgAlt, imgLeft, title, subtitle, p1, p2, isFinished, pdf, repoLink }) {
    return (
        <Row className={imgLeft ? "imgLeft" : "imgRight"}>
            <Col xs={12} md={5} className="image-col">
                <img src={img} alt={imgAlt} />
            </Col>
            <Col xs={12} md={7} className="description-col ps-5 pe-5">
                <h2 className="mb-2">{title}</h2>
                <h4 className="mb-4">{subtitle}</h4>
                <p>{p1}</p>
                <p>{p2}</p>
                {isFinished 
                    ? <Row>
                        <div className="links">
                            {repoLink && <a target="_blank" rel="noopener noreferrer" href={repoLink} className="me-3"><button className="button mt-3">Repository</button></a>}
                            {pdf && <a target="_blank" rel="noopener noreferrer" href={pdf} className="me-3"><button className="button mt-3">Read Thesis</button></a>}
                        </div>
                    </Row>
                    : 
                    <Row>
                        <div className="links">
                            {repoLink && <a target="_blank" rel="noopener noreferrer" href={repoLink} className="me-3"><button className="button">Repository</button></a>}
                            <button className="button mt-0">Finished soon!</button>
                        </div>
                    </Row>
                    
                }

                
            </Col>
        </Row>
    )
}

export default AcademicsContainer
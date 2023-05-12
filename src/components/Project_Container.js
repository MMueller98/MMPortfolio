import React from 'react'
import { Col, Row } from 'react-bootstrap'

function ProjectContainer({img, imgAlt, imgLeft, heading, p1, p2, repoHref, repoName}) {
    return (
        <Row className={imgLeft ? "imgLeft" : "imgRight"}>
            <Col xs={12} md={5} className="image-col">
                <img src={img} alt={imgAlt} />
            </Col>
            <Col xs={12} md={7} className="description-col ps-5 pe-5">
                <h2 className="mb-4">{heading}</h2>
                <p>{p1}</p>
                <p>{p2}</p>
                <a target="_blank" rel="noopener noreferrer" href={repoHref}><button className="button">{repoName}</button></a>
            </Col>
        </Row>
    )
}

export default ProjectContainer
import React from 'react'
import "./sr.css"
import { Container, Row, Col } from 'react-bootstrap'
import { MdOutlineArrowOutward } from "react-icons/md";
import Ic from "../../assets/i1.png"

const Sr = () => {
    return (
        <div id='service'>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="p1">
                            <h2>my services</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Iaculis sit eget sed eget quam auctor sed. Tempor eget consequat congue.
                            </p>
                            <a className='sr-btn' href="#">view all services <MdOutlineArrowOutward /></a>
                        </div>
                    </Col>
                    <Col lg={{ span: 8, offset: 1 }}>
                        <Row>
                            <Col lg={6}>
                                <div className="card">
                                    <img src={Ic} alt="" />
                                    <h4>web design</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum.</p>
                                    <a href="#">learn more <MdOutlineArrowOutward /></a>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="card">
                                    <img src={Ic} alt="" />
                                    <h4>web development</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum.</p>
                                    <a href="#">learn more <MdOutlineArrowOutward /></a>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="card">
                                    <img src={Ic} alt="" />
                                    <h4>web development</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum.</p>
                                    <a href="#">learn more <MdOutlineArrowOutward /></a>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="card">
                                    <img src={Ic} alt="" />
                                    <h4>web design</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum.</p>
                                    <a href="#">learn more <MdOutlineArrowOutward /></a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={12}>
                        <div className="brdr"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Sr

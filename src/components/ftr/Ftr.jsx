import React from 'react'
import "./ftr.css"
import { Container, Row, Col } from 'react-bootstrap'
import Ft from "../../assets/logo.jpeg"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const Ftr = () => {
    return (
        <div id='ftr'>
            <Container className='ft'>
                <Row>
                    <Col lg={5}>
                        <div className="footer-text">
                            <img src={Ft} alt="" />
                            <p>lorem ipsum dolor sit amet consectetur.
                                eget quam proin consectetur.</p>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="footer-icon">
                            <a className='icons' href="#"><FaFacebook /></a>
                            <a className='icons' href="#"><FaInstagram /></a>
                            <a className='icons' href="#"><FaTwitter /></a>
                            <a className='icons' href="#"><FaLinkedinIn /></a>
                        </div>
                    </Col>
                    <Col lg={{span:4,offset:1}}>
                        <div className="ftr-btn">
                            <a className='down' href="#">download cv <FaDownload /></a>
                            <a className='hiree' href="#"> hire me <FaArrowTrendUp /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Ftr

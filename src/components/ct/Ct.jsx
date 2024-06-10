import React from 'react'
import "./ct.css"
import { Container, Row, Col } from 'react-bootstrap'
import { FaStarOfLife } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Ct = () => {
    return (
        <div id='contact'>
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="ct-img">
                            <h3><i>personal info</i></h3>
                            <p><i><span>name:</span> fahim sarker</i></p>
                            <p><i><span>email:</span><a href='mail to:sarkerfahim599@gmail.com'> sarkerfahim599@gmail.com</a></i></p>
                            <p><i><span>address:</span> dhaka,bangladesh</i></p>
                            <p><i><span>phone:</span> <a href='tel:+8801647389997'>01647389997</a></i></p>
                            <p><i><span>religion:</span> muslim</i></p>
                            <p><i><span>gender:</span> male</i></p>
                            <div className="ct-icon">
                                <a href=""><FaFacebook /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <div className="ct-text">
                            <h4><i>Let's Connect</i></h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Iaculis sit eget sed eget quam auctor sed. Tempor eget consequat congue</p>
                        </div>
                        <div className="contact-form">
                            <div className="name">
                                <h3>name <FaStarOfLife /></h3>
                                <input type="text" placeholder='your name' />
                            </div>
                            <div className="email">
                                <h3>email <FaStarOfLife /></h3>
                                <input type="text" placeholder='your email' />
                            </div>
                        </div>
                        <div className="contact-form">
                            <div className="name">
                                <h3>phone <FaStarOfLife /></h3>
                                <input type="text" placeholder='your phone' />
                            </div>
                            <div className="email">
                                <h3>subject <FaStarOfLife /></h3>
                                <input type="text" placeholder='subject' />
                            </div>
                        </div>
                        <div className="contact-msg">
                            <h6>message <FaStarOfLife /></h6>
                            <textarea type="text" placeholder='your message'></textarea>
                            <a href="#">send message</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Ct

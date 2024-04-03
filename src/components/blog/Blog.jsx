import React from 'react'
import "./Blog.css"
import { Container, Col, Row, } from 'react-bootstrap'
import T2 from "../../assets/pt2.png"
import T1 from "../../assets/pt1.png"
import T3 from "../../assets/pt3.png"
import T4 from "../../assets/pt.4.png"
import T5 from "../../assets/pt5.png"
import T6 from "../../assets/pt6.png"
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const Blog = () => {
    return (
        <>
        <div id='tm'>
        <Container className='mt'>
                <Row>
                    <Col lg={12}>
                        <div className="whdr">
                            <h4>my recent works <IoMdArrowDropdownCircle /></h4>
                        </div>
                    </Col>
                    <Col lg={6}>
                            <div className="tm-img">
                                <img src={T2} alt="" />
                                <a href="https://cerulean-seahorse-3730b2.netlify.app">view work <MdOutlineArrowOutward /></a>
                            </div>
                    </Col>
                    <Col lg={6}>
                            <div className="tm-2-img">
                                <img src={T1} alt="" />
                                <a href="https://aquamarine-bublanina-e9df9d.netlify.app">view work<MdOutlineArrowOutward /></a>
                            </div>
                    </Col>
                    <Col lg={6}>
                            <div className="tm-img">
                                <img src={T3} alt="" />
                                <a href="https://eloquent-nougat-0dca25.netlify.app">view work <MdOutlineArrowOutward /></a>
                            </div>
                    </Col>
                    <Col lg={6}>
                            <div className="tm-2-img">
                                <img src={T4} alt="" />
                                <a href="https://phenomenal-twilight-ce72ba.netlify.app">view work <MdOutlineArrowOutward /></a>
                            </div>
                    </Col>
                    <Col lg={6}>
                            <div className="tm-img">
                                <img src={T5} alt="" />
                                <a href="#">view work <MdOutlineArrowOutward /></a>
                            </div>
                    </Col>
                    <Col lg={6}>
                            <div className="tm-img">
                                <img src={T6} alt="" />
                                <a href="#">view work<MdOutlineArrowOutward /></a>
                            </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Blog

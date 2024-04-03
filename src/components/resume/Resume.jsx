import React from 'react'
import "./resume.css"
import { Container, Col, Row, } from 'react-bootstrap'
import { CiMail } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import Rs from "../../assets/img6.jpg"
import T1 from "../../assets/t1.png"
import T2 from "../../assets/t2.png"
import T3 from "../../assets/t3.png"
import T4 from "../../assets/t4.png"
import T5 from "../../assets/t5.png"
import T6 from "../../assets/t6.png"
import { FaDownload } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";







const Resume = () => {
    var settings = {
        dots: true,
        autoplay: true,
        infinite:true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div id='resume'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="header">
                            <h3>explore my resume</h3>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="bio">
                            <div className="icn">
                                <CiMail />
                            </div>
                            <h3>biography</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum.</p>
                            <a href="#">learn more <MdArrowOutward /></a>
                            <div className="btm"></div>
                        </div>
                        <div className="bio">
                            <div className="icn">
                                <CiMail />
                            </div>
                            <h3>biography</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum.</p>
                            <a href="#">learn more <MdArrowOutward /></a>
                            <div className="btm"></div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="rsm-img">
                            <img src={Rs} alt="" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="bio">
                            <div className="icn">
                                <CiMail />
                            </div>
                            <h3>biography</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum.</p>
                            <a href="#">learn more <MdArrowOutward /></a>
                            <div className="btm"></div>
                        </div>
                        <div className="bio">
                            <div className="icn">
                                <CiMail />
                            </div>
                            <h3>biography</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum.</p>
                            <a href="#">learn more <MdArrowOutward /></a>
                            <div className="btm"></div>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="rsm-btn">
                            <a href="#">discover more about me <MdArrowOutward /></a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="tools">
                            <h3>design tools</h3>
                        </div>
                        <div className="circle">
                            <div className="c1">
                                <img src={T6} alt="" />
                            </div>
                            <div className="c1">
                                <img src={T2} alt="" />
                            </div>
                            <div className="c1">
                                <img src={T3} alt="" />
                            </div>
                        </div>
                        <div className="circle">
                            <div className="c1">
                                <img src={T4} alt="" />
                            </div>
                            <div className="c1">
                                <img src={T5} alt="" />
                            </div>
                            <div className="c1">
                                <img src={T1} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div className="skill">
                            <h4>creative skills</h4>
                        </div>
                        <div className="html">
                            <div className="left">
                                <p>html</p>
                            </div>
                            <div className="right">
                                <p>95%</p>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="html">
                            <div className="left">
                                <p>css</p>
                            </div>
                            <div className="right">
                                <p>90%</p>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="html">
                            <div className="left">
                                <p>javascript</p>
                            </div>
                            <div className="right">
                                <p>85%</p>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="html">
                            <div className="left">
                                <p>react</p>
                            </div>
                            <div className="right">
                                <p>80%</p>
                            </div>
                        </div>
                        <div className="line"></div>
                    </Col>
                    <Col lg={6}>
                        <div className="journey">
                            <h4>my professional journey</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Iaculis sit eget sed eget quam auctor sed. tempor eget consequat congue.</p>
                        </div>
                    </Col>
                    <Col lg={{ span: 3, offset: 3, }}>
                        <div className="jr-btn">
                            <a href="#">download cv <FaDownload /></a>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="company">
                            <div className="company-a">
                                <h4>company a</h4>
                                <p>september 2021-present</p>
                            </div>
                            <div className="company-a">
                                <h4>company b</h4>
                                <p>august 2019 - september 2021</p>
                            </div>
                            <div className="company-a">
                                <h4>company c</h4>
                                <p>december 2018-august 2019</p>
                            </div>
                            <div className="company-a">
                                <h4>company d</h4>
                                <p>december 2018-august 2019</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="wrk">
                            <div className="wrk-1">
                                <h3>web design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Ipsum tortor condimentum tellus sem ac at velit facilisi. diam elit risus tortor vitae ornare leo dictumst lacus.</p>
                            </div>
                            <div className="wrk-1">
                                <h3>web development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Ipsum tortor condimentum tellus sem ac at velit facilisi. diam elit risus tortor vitae ornare leo dictumst lacus.</p>
                            </div>
                            <div className="wrk-1">
                                <h3>web design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Ipsum tortor condimentum tellus sem ac at velit facilisi. diam elit risus tortor vitae ornare leo dictumst lacus.</p>
                            </div>
                            <div className="wrk-1">
                                <h3>web development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Ipsum tortor condimentum tellus sem ac at velit facilisi. diam elit risus tortor vitae ornare leo dictumst lacus.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="know">
                            <div className="know-text">
                                <h4>know me from others</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Ipsum tortor condimentum tellus sem ac at velit facilisi. Diam elit risus tortor vitae.</p>
                            </div>
                            <Slider {...settings}>
                            <div className="know-card">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est optio omnis commodi excepturi autem, magnam culpa veniam ipsam porro libero consectetur cum quae tempora recusandae assumenda dolore quaerat veritatis tempore dolor dolorum eius. Quibusdam porro cumque suscipit architecto sint ullam, officia magnam fuga temporibus aliquam sed deserunt modi? Id, reprehenderit.</p>
                                        <h4>richi topley</h4>
                                        <h5>company owner</h5>
                                    </div>
                                    <div className="know-card">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, blanditiis ullam vel tenetur non corporis porro, velit inventore possimus aperiam veniam nam vero voluptate. Numquam, libero. Cumque iure iusto accusantium at, cupiditate officia facere rerum culpa vero, deleniti dicta beatae voluptatibus! Natus nulla quae aliquid architecto corporis molestiae nisi maxime!</p>
                                        <h4>jullies chelavier</h4>
                                        <h5>company owner</h5>
                                    </div>
                                </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Resume

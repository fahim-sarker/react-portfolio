import React from 'react'
import "./banner.css"
import { Container, Row, Col } from 'react-bootstrap'
import { FaDownload } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import Ban from "../../assets/banner6.jpg"
import P1 from "../../assets/one.png"
import P2 from "../../assets/two.png"
import P3 from "../../assets/three.png"
import P5 from "../../assets/five.png"
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <div id='Banner'>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="ban-text">
              <h2>i'm! fahim sarker</h2>
              <h3 className='type'></h3>
            <TypeAnimation
      sequence={[
        'i am- a front-end developer',
        1000, 
        'i am- a react developer',
        1000,
      ]}
      wrapper="type"
      speed={200}
      style={{ fontSize: '40px',color: 'yellow', display: 'inline-block', paddingBottom: '30px' }}
      repeat={Infinity}
    />
              <p>Lorem ipsum dolor sit amet consectetur. pulvinar sapien duis sapien aliquam dictumst justo nunc. faucibus quis aenean molestie vel lacus cursus egestas senectus nisl.</p>
              <a className='dow' href="#">download cv <FaDownload /></a>
              <a className='hire' href="#"> hire me <FaArrowTrendUp /></a>
            </div>
          </Col>
          <Col lg={{span:5, offset:1}}>
            <div className="ban-img">
              <img src={Ban} alt="banner" />
            </div>
          </Col>
            <Col lg={12}>
              <div className="ban-enner">
                <div className="p1">
                  <img src={P1} alt="" />
                </div>
                <div className="p2">
                <img src={P2} alt="" />
                </div>
                <div className="p3">
                <img src={P5} alt="" />
                </div>
                <div className="p5">
                <img src={P3} alt="" />
                </div>
              </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
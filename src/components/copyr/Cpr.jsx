import React from 'react'
import  "./cpr.css"
import { Container,Col,Row } from 'react-bootstrap'

const Cpr = () => {
  return (
    <div id='cpr'>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="cpr-text">
                    <p>Copyright © 2023 David Dean By Evonicmedia. All Rights Reserved.</p>
                </div>
            </Col>
            <Col lg={{span:3,offset:3}}>
                <div className="cpr-text">
                    <p>Powered By Evonicmedia</p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cpr

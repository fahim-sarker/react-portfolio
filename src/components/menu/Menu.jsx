import React from 'react'
import "./menu.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ScrollToTop from "react-scroll-to-top";



const Menu = () => {
    return (
        <>
           {[false,].map((expand) => (
        <Navbar key={expand} expand="lg" className='menu-bg'>
          <Container>
            <Navbar.Brand href="#">
                <h2><i>fahim<span>sarker</span></i></h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">about</Nav.Link>
                  <Nav.Link href="#action2">service</Nav.Link>
                  <Nav.Link href="#action2">works</Nav.Link>
                  <Nav.Link href="#action2">blog</Nav.Link>
                </Nav>
                <div className="nav-btn">
                  <a className='ct' href="#">contact</a>
                  </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <ScrollToTop smooth />
          </Container>
        </Navbar>
      ))}
        </>
    )
}

export default Menu

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {
  OffcanvasBody,
  OffcanvasHeader,
  Row,
  OffcanvasTitle,
  Nav
} from './TopNav.style';
import { LogoIcon } from 'assets/svg';

export default function TopNav() {

  return (
    <>
      {['md'].map(expand => (
        <Nav key={expand} bg="#000000" expand={expand} className="mb-0">
          <>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand><LogoIcon /></Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <OffcanvasHeader closeButton>
                <OffcanvasTitle id={`offcanvasNavbarLabel-expand-${expand}`}>
                <LogoIcon />
                </OffcanvasTitle>
              </OffcanvasHeader>
              <OffcanvasBody>
                  <Row>
                    <a href="/">Home</a>
                    <a href="/chat">Chat</a>
                    <a href="/">Support</a>
                    <a href="/">Feedback</a>
                  </Row>
              </OffcanvasBody>
            </Navbar.Offcanvas>
          </>
        </Nav>
      ))}
    </>
  );
}

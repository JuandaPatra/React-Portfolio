import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom"


class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>RJP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" as={Link} to={"/"}>HOME</Nav.Link>
                <Nav.Link href="#link" as={Link} to={'/about'}>ABOUT ME</Nav.Link>
                <Nav.Link href="#footer">CONTACT ME</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;

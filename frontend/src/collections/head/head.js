import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Headbar=()=>
{
    const name=sessionStorage.name;
    const gmail=sessionStorage.gmail
    const Logout=async()=>
    {
      sessionStorage.removeItem("gmail");
      window.location="/192.0809.05"
    }
    return(
        <div className="header">
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Quiz App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/192.0809.06">Games</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link>{name}</Nav.Link>
            {
              gmail?<Nav.Link onClick={Logout}>Logout</Nav.Link>:<Nav.Link href="/192.0809.00">Login</Nav.Link>
            }
            <Nav.Link eventKey={2} href="/192.0809.13">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}
export default Headbar;
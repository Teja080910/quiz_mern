import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
const Headbar=()=>
{
    const nav=useNavigate();
    const name=localStorage.name;
    const Home=async()=>
    {
        nav('/')
    }
    const About=async()=>
    {
        nav('/about')
    }
    const Myapps=async()=>
    {
        nav('/gamep')
    }
    return(
        <div className="header">
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Quiz App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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
            <Nav.Link href="/192.0809.00">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/192.0809.08">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            {/* <div className="headn">
            <div style={{fontFamily:'Satisfy',color:'green'}}><b>welcome:{name}</b></div>
            <button style={{marginLeft:'60%',background:'none',width:'80px',border:'none',color:'blue'}} onClick={Home}><b>Home</b></button>
            <button style={{marginLeft:'5%',background:'none',width:'80px',border:'none',color:'blue'}} onClick={About}><b>About</b></button>
            <button style={{marginLeft:'3%',background:'none',width:'80px',border:'none',color:'blue'}} onClick={Myapps}><b>My Games</b></button>
            </div> */}
        </div>
    )
}
export default Headbar;
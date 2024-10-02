import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
// import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <Navbar expand="lg" className={`bg-body-bg-${props.mode} navbar-${props.mode} bg-${props.mode}`}>
      <Container>
        <Navbar.Brand to="/">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about" >{props.aboutText}</Nav.Link>
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/Arif-Khaishagi">Github</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.crio.do/learn/portfolio/arifk847038/?edit=true">
                Portfolio
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className='d-flex'>
          <div className='bg-primary rounded mx-2' onClick={()=>{props.toggleMode('primary')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
          <div className='bg-warning rounded mx-2' onClick={()=>{props.toggleMode('warning')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
          <div className='bg-danger rounded mx-2' onClick={()=>{props.toggleMode('danger')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
          <div className='bg-info rounded mx-2' onClick={()=>{props.toggleMode('info')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
          <div className='bg-success rounded mx-2' onClick={()=>{props.toggleMode('success')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
        </div>
        <Form>
        <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Dark Mode"
        onClick={props.darkmode}
      />
      </Form>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText : PropTypes.string
  }

//   NavBar.defaultProps = {
//     title : "Add Title",
//     aboutText : "About"
// }

export default NavBar;


import React, { Component } from 'react';
//import $ from "jquery";
import './Header.css';
import Nav from 'react-bootstrap/Nav';
class Header extends Component {
    
  render() {
    return (
      <div className="Header">
        <Nav defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/">LOGO</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-1">Articles</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-2">Commentaires</Nav.Link>
            </Nav.Item>
        </Nav>

      </div>
      
    );
  }
}

export default Header;

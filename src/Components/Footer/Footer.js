import React, { Component } from 'react';
//import $ from "jquery";
import './Footer.css';
// import { Form, FormLabel, FormControl, Button,
//   Col, FormGroup} from 'react-bootstrap';

class Footer extends Component {


  render() {
    return (
      <div role="contentinfo" className="footer">
        <div className="social-links">
          <a className="social-link" href="https://www.facebook.com" aria-label="facebook">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a className="social-link" href="https://www.instagram.com" aria-label="instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a className="social-link" href="https://www.twitter.com" aria-label="twitter">
            <i class="fab fa-twitter-square"></i> 
          </a>
          <a className="social-link" href="https://www.youtube.com" aria-label="youtube">
            <i class="fab fa-youtube-square"></i>
          </a>
        </div>
      </div>
      
    );
  }
}

export default Footer;

import React, { Component } from 'react';
import './Articles.css';
//import Container from 'react-bootstrap/container';


class Article extends Component {

  render() {
    return (
      <div className="cards container">
        <div className="image-section">
          <img src={require('../Images/hotel.jpg')} alt=""/>

        </div>
        <div className="description-section">
          <p>truc machin chose truc machin chosetruc machin chosetruc machin chose</p>
        </div>
        <div className="comment-section">
          <span>Like</span>
          <div className="commentLast">
            <p>blabalbalbalbablaa</p>
          </div>
        </div>

      </div>
      
    );
  }
}

export default Article;

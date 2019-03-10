import React, { Component } from 'react';
import './Articles.css';
//import images from './Images'
//import $ from "jquery";
import ArticleItem from './ArticleItem';
//propType is  used to make sure the data you receive is valid
import PropTypes from 'prop-types';

/*$.get('http://localhost:8080/', function (response, error) {
 response.forEach(function(artic){
   new Article(artic.article_img, artic.article_description, artic.article_like, artic.article_comment);
 })
  console.log(response);
});

var articles = [];

class Article{
  constructor(img, description, like, comment){
    this.img = img;
    this.description = description;
    this.like = like;
    this.comment = comment;
    this.parent = document.getElementById('root');
  }

  create(){
    this.container = document.createElement('div');

    this.title = document.createElement('h3');

    this.containerImg = document.createElement('div');
    this.image = document.createElement('img');

    this.containerParag = document.createElement('div');
    this.parag = document.createElement('p'); //paragrph

    this.containerComm = document.createElement('div');
    this.span = document.createElement('span');
    this.innerComm = document.createElement('div');
    this.innerCommText = document.createElement('p'); //comment 
  }

  setAtt(){
    this.container.setAttribute('class', "card, container");
    this.containerImg.setAttribute('class', "image-section");
    this.image.setAttribute('src', "this.image");
    this.containerParag.setAttribute('class', "description-section");
    this.containerComm.setAttribute('class', "comment-section");
    this.innerComm.setAttribute('class', "commentLast");
  }

}*/

class Articles extends Component {

  render() {
      
    return this.props.articles.map((article) => (

        <ArticleItem key={article.id} article={article} />


    
    
    ));













      /*<div className="cards container">
        <div className="image-section">
          <img src="http://localhost:3000/Images/hotel.jpg" alt=""/>

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

      </div>*/
      
    
  }
}

//ArrayProptype
Articles.propTypes = { 
    articles: PropTypes.array.isRequired

}

export default Articles;

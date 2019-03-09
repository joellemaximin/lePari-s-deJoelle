import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Articles from './Components/Articles';
import Comments from './Components/Comment';
import $ from "jquery";

import './App.css';

$.get('http://localhost:3000/public/Images/hotel.jpg', function (response, error) {
//  response.forEach(function(artic){
//    new Article(artic.article_img, artic.article_description, artic.article_like, artic.article_comment);
//  })
  //console.log(response);
});
/*
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
    this.innerComm.setAttribute('class', "commentLast")
  }

}
*/


class App extends Component {
  state = {
    articles: [
      {
        id: 1,
        image: "./hotel.jpg",
        description: "this is the first article",
        comment: "comment_id",
        like: false,
      },
      {
        id: 2,
        image: " /public/Images/restau.jpeg",
        description: "this is the second article",
        comment: "comment_id",
        like: false,
      },
      {
        id: 3,
        image:" http://localhost:3000/Images/Bmacron.jpg",
        description: "this is the third article",
        comment: "comment_id",
        like: true,
      },
      {
        id: 4,
        image:" http://localhost:3000/Images/sacrecoeur.jpeg",
        description: "this is the 4 article",
        comment: "comment_id",
        like: true,
      },
      {
        id: 5,
        img: " http://localhost:3000/Images/sacrecoeur.jpg",
        description: "this is the 5 article",
        comment: "comment_id",
        like: true,
      },
      {
        id: 6,
        img:" http://localhost:3000/Images/Bmacron.jpg",
        description: "this is the 6 article",
        comment: "comment_id",
        like: false,
      }
    ]
  }
    //arraw function 



  render() {

    return (
      <div className="bodyapp">
        <Header/>
        <Articles articles={this.state.articles}  onClick={() => this.like()} /*{this.markLike}*//>
        <Comments/>
      </div>
    );
  }
}

export default App;

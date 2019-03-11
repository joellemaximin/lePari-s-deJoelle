import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Articles from './Components/Articles';
import Comments from './Components/Comment';
import $ from "jquery";
//import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './App.css';

$.get('http://localhost:8080/articles', function (response) {
  response.forEach(function(model){
    const div = document.createElement('div');
    div.innerHTML = model.article_description;
    document.body.appendChild(div);
    console.log(model);
  });
});

$.get('http://localhost:8080/users', function (response) {
  response.forEach(function(model){
    const div = document.createElement('div');
    div.innerHTML = model.user_firstname;
    document.body.appendChild(div);
    console.log(model);
  });
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
        image: " http://localhost:3000/Images/hotel.jpg",
        description: "Hotel agréable, près des quais, belle vue",
        comment: "L'hotel est bien, piscine chauffé, mais la qualité prix du petit dej n'est pas top",
      },
      {
        id: 2,
        image: " http://localhost:3000/Images/restau.jpeg",
        description: "Un des meilleurs restaurant que j'ai été durant mon voyage sur Paris",
        comment: "Le restaurant est bien. Merci pour le partage.",
      },
      {
        id: 3,
        image:" http://localhost:3000/Images/opera.jpg",
        description: "Un theatre magnifique lors de mon voyage sur Paris",
        comment: "Laplace Opéra est bien. Merci pour le partage.",

      },
      {
        id: 4,
        image:" http://localhost:3000/Images/montmatre.jpg",
        description: "Superbe place/Eglise a visiter, elle vue sur Paris.",
        comment: "Montmatre est bien. Merci pour le partage.",
      },
      {
        id: 5,
        img: " http://localhost:3000/Images/sacrecoeur.jpeg",
        description: "Superbe place/Eglise a visiter, quand j'ai été durant mon voyage sur Paris",
        comment: "Le Sacré Coeur est bien. Merci pour le partage.",
      },
      {
        id: 6,
        img:" http://localhost:3000/Images/triomphe.jpeg",
        description: "Belle place a y aller ",
        comment: "La place est super. Merci pour le partage.",
      }
    ]
  }
  
  //arraw function
  


  render() {

    return (
      <div className="bodyapp">
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">{this.props.header}</Navbar.Brand>
        </Navbar>
        <Header/>
        <Articles articles={this.state.articles} /*{this.markLike}*//>
        <Comments/>
      </div>
    );
  }
}

export default App;

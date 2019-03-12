import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Articles from './Components/Articles';
import Comments from './Components/Comment';
import Footer from './Components/Footer/Footer';

//import $ from "jquery";
//import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

/*
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
    container.appendChild(div);
    console.log(model);
  });
});

*/
/*$.get('http://localhost:8080/', function (response, error) {
  response.forEach(function(artic){
    new App(artic.article_img, artic.article_description, artic.article_like, artic.article_comment);
    const div = document.createElement('p');
    div.innerHTML = artic.article_coment;
    //container.appendChild(div)
  })
  
   console.log(response);
});*/


// $.post('http://localhost:8080/users',
//   {
//     //user_firstname : ' Henri'
//   },
//   function(response){

//   }
// );

// function envoyer(){
//   var article_description = document.querySelector('#articles').value;
//   console.log(article_description);
//   $.post('http://localhost:8080/articles', {article_description : article_description}, function (response){
//     console.log(response);
//   });
// }

// console.log(envoyer)




class App extends Component {
  state = {
    articles: []
     /* {
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
    
    users: [
      {
        id: 1,
        profile: "",
        firstName: "Alex",
        lastName: "Trian",
      },
      {
        id: 2,
        profile: "",
        firstName: "Ronan",
        lastName: "Josepe",
      },
      {
        id: 3,
        profile: "",
        firstName: "Catherine",
        lastName: "Doree",
      },
      {
        id: 4,
        profile: "",
        firstName: "Hubert",
        lastName: "Germain",
      },
    ],

    comments: [
      {
        id: 1,
        user_id: 1,
        article_id: "3",
      },
      {
        id: 2,
        user_id: 4,
        article_id: "2",
      },
      {
        id: 3,
        user_id: 3,
        article_id: "4",
      },
      {
        id: 4,
        user_id: 2,
        article_id: "1",
      },
    ]
    */
  }
  
  //arraw function
  


  render() {

    return (
      <div className="bodyapp" id="container">
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">{this.props.header}</Navbar.Brand>
        </Navbar>
        <Header/>
        <div className="container-fluid align-items-center">
          <Articles articles={this.state.articles} /*{this.markLike}*//>
          <Comments/>
          <Footer/>
        </div>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Articles from './Components/Articles';
import Comments from './Components/Comment';
import $ from "jquery";

import './App.css';

$.get('http://localhost:8080/', function (response, error) {
 response.forEach(function(artic){
//    new Product(artic.article_img, artic.article_description, artic.article_like, artic.article_comment);
//  })
//   console.log(response);
});


class App extends Component {
  render() {
    return (
      <div className="bodyapp">
        <Header/>
        <Articles/>
        <Comments/>
      </div>
    );
  }
}

export default App;

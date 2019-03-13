import React, { Component } from 'react';
import './Articles.css';
import $ from "jquery";
import ArticleItem from './ArticleItem';

//propType is  used to make sure the data you receive is valid
import PropTypes from 'prop-types';


class Articles extends Component {
  
  constructor(){
    super()
    this.state={
      donne: [],
      comment: [],
      // comment1: [],
      // comment2: [],

    }
  }

  componentWillMount(){
    var that = this;
    $.get('http://localhost:8080/', function (response) {
    console.log(response);
    let articles = response.map(function(artic, i){
      return(
        <ArticleItem key={i} item={artic} />
      )
    })
     that.setState({donne: articles})
    });
    
    $.get('http://localhost:8080/lastcomment', function (response) {
    console.log(response);
    let comment = response.map(function(comm, i){
      return(
        <ArticleItem key={i} item={comm} />
      )
    })
      that.setState({comment: comment})
    });

    // $.get('http://localhost:8080/lastcomment2', function (response) {
    // console.log(response);
    // let comment = response.map(function(comm2, i){
    //   return(
    //     <ArticleItem key={i} item={comm2} />
    //   )
    // })
    //   that.setState({comment1: comment})
    // });
    
    // $.get('http://localhost:8080/lastcomment3', function (response) {
    //   //console.log(response);
    //   let comment = response.map(function(comm3, i){
    //     return(
    //       <ArticleItem key={i} item={comm3} />
    //     )
    //   })
    //   that.setState({comment2: comment})
    // });
    
    // $.get('http://localhost:8080/lastcomment4', function (response) {
    //   console.log(response);
    // let comment = response.map(function(comm4, i){
    //     return(
    //       <ArticleItem key={i} item={comm4} />
    //     )
    //   })
    //   that.setState({comment3: comment})
    // });

    // $.get('http://localhost:8080/lastcomment5', function (response) {
    //   //console.log(response);
    //   let comment = response.map(function(comm5, i){
    //       return(
    //         <ArticleItem key={i} item={comm5} />
    //       )
    //   })
    //     that.setState({comment4: comment})
    // });
    
    // $.get('http://localhost:8080/lastcomment6', function (response) {
    //   console.log(response);
    //   let comment = response.map(function(comm6, i){
    //       return(
    //         <ArticleItem key={i} item={comm6} />
    //       )
    //   })
    //     that.setState({comment5: comment})
    // });
    

      
  }

  //this.props.articles.map((article) =>
  render() {
    return  (
      <div>
        
        {this.state.donne}
        {this.state.comment}

    
      </div>
    )
    
  }
}

//ArrayProptype
Articles.propTypes = { 
    articles: PropTypes.array.isRequired

}

export default Articles;

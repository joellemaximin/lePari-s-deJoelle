import React, { Component } from 'react';
import './Articles.css';
//propType is  used to make sure the data you receive is valid
import PropTypes from 'prop-types';
import Comment from './Comment';
import {Image, Button, Col}  from 'react-bootstrap';
//import { relative } from 'path';
import $ from "jquery";
 //<img {this.image} /><br/>
//.bind(this)
//this is a comment react
//{/* This is a comment */}


export class ArticleItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            paddingTop: '100px',
            //textDecorationColor: this.like ? 
            //blue' : 'none',
            position: "relative",
            
        }
    } 
    //constructor function for toggle
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false, 
            color : 'white',
            backgroundColor: 'green',
            donne : []
        };
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn, color:'black', backgroundColor:'red'
        }));
    }

    componentWillMount(){
        var that = this;
    $.get('http://localhost:8080/', function (response) {
        console.log(response);
        let articles = response.map(function(artic){
            return artic;
        })
         that.setState({donne: articles})
       });
    }


    //     let that = this;
    //     $.get('http://localhost:8080/', function (data) {
    //         let articles = data.map(function(desc){
    //             return (
    //                 <h3 key={desc}> {desc.article_description}</h3>
    //             )
    //         // })
    //         // response.forEach(function(artic){
    //         // new ArticleItem(artic.article_img, artic.article_description, artic.article_like, artic.article_comment);
            
    //         // })
    //         // console.log(response);
    //     });
    //     console.log(articles)
    //     that.setState( {comment: description})
    // }
       


    /*
        <div>
            <form>
                <input id="articles" type='text' name="articles" onChange= {this.setState} value="PUNAISE"/>
                <button onclick="envoyer()">Ajouter un Article</button>
            </form>

        </div>
    */

  render() {
      //const { isToggleOn } = this.state
      const { backgroundColor } = this.state
      const { color } = this.state
      console.log(this.state.donne)

    return (
   
        <div className="okay main-styles" style = {this.getStyle()}>
            <div>
                <Image src={this.image} alt="" id="imageArticle" />
            </div>
            
            <p className="textDescription">
                {this.description} <br/>
            </p> 

            <Button
                style={{color, backgroundColor}}
                as={Col} md="1" className="buttonColor"
                variant="outline-info"
                onClick={this.handleClick}>
                {this.state.isToggleOn ? 'LIKE' : 'UNLIKE'}
            </Button>

            <h2>Commentaires: </h2>
            <div className="lastComment">
                <p id='lastComment'>
                  {this.id}. {' '}
                  {this.comment}
                </p>
            </div>

                <Comment />

        </div>    
    )

  }
}

ArticleItem.propTypes = { 
    article: PropTypes.object.isRequired

}

export default ArticleItem;

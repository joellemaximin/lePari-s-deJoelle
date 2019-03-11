import React, { Component } from 'react';
import './Articles.css';
//propType is  used to make sure the data you receive is valid
import PropTypes from 'prop-types';
import Comment from './Comment';
import {Image, Button, Col}  from 'react-bootstrap';
//import { relative } from 'path';
//import $ from "jquery";
 //<img {this.props.article.image} /><br/>
//.bind(this)
//this is a comment react
//{/* This is a comment */}


export class ArticleItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            paddingTop: '100px',
            textDecorationColor: this.props.article.like ? 
            'blue' : 'none',
            position: "relative",
            
        }
    } 
    //constructor function for toggle
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false, 
            color : 'white',
            backgroundColor: 'green'
        };
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn}, {color: !state.color}, {backgroundColor: !state.backgroundColor
        }));
    }


    


  render() {
      //const { isToggleOn } = this.state
    return (
   
        <div className="okay main-styles" style = {this.getStyle()}>
            <div>
                <Image src={this.props.article.image} alt="" id="imageArticle" />
            </div>
            
            <p className="textDescription">
                {this.props.article.description} <br/>
            </p> 

            <Button
                style={{color: this.state.color, backgroundColor: this.state.backgroundColor}}
                as={Col} md="1" className="buttonColor"
                variant="outline-info"
                onClick={this.handleClick}>
                {this.state.isToggleOn ? 'LIKE' : 'UNLIKE'}
            </Button>

            <h2>Commentaires: </h2>
            <div className="lastComment">
                <p id='lastComment'>
                  {this.props.article.id}. {' '}
                  {this.props.article.comment}
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

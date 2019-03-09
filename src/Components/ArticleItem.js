import React, { Component } from 'react';
import './Articles.css';
//propType is  used to make sure the data you receive is valid
import PropTypes from 'prop-types';


//import images from './Images'
//import Container from 'react-bootstrap/container';
//import $ from "jquery";

export class ArticleItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecorationColor: this.props.article.like ? 
            'blue' : 'none'
        }
    } 
    //arraw function
    like = (e) => {
        if(this.like === false){
            return (this.like.style.backgroundColor = "blue")
        } else{
            return (this.like.style.backgroundColor = "none")
        }
    }
    // like = (e) => {
    //     console.log("kfoano")
    // }
  render() {
    //<img {this.props.article.image} /><br/>
    //.bind(this)
    //this is a comment react
    //{/* This is a comment */}
    return (
   
        <div style = {this.getStyle()}>
               <div><img src={this.props.article.image} alt=""/></div>
          <p>
            {this.props.article.description} <br/>
            <input type="button" value="Send" onClick={() => this.like()} /*{this.markLike}*/ /> {' '}
            {this.props.article.like} <br/>
            {this.props.article.comment_id} <br/>
          </p>
          <div>

          </div>
        </div>

    
    )

  }
}

ArticleItem.propTypes = { 
    article: PropTypes.object.isRequired

}

export default ArticleItem;

import React, { Component } from 'react';
//import $ from "jquery";
import './Comment.css';
import { Form, FormLabel, FormControl, Button,
  Col, FormGroup} from 'react-bootstrap';

class Comment extends Component {
  getName = () =>{
    return{
      position: 'relative',
      color: '#212529',
      padding: " auto 200px",
      marginRight: '200px',
      marginLeft: '200px',
      border: '.2rem solid #ececec',
      borderRadius: '8px',
      textAlign: 'center',
    }
  }

  getComment = () => {
    return {
      position: 'relative',
   
    }

  }

  constructor(){
    super();
    this.state = {
      fullName: ' ',
      comment: ' '
    };
  
    //this.input = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({ [e.target.name]:  e.target.value});
  }
    // handleName(e){
  //   this.setState()
  // }

  // handleComment(e){
  //   this.setState()
  // }



  
  handleSubmit(e){
    alert('Nouveau commentaire de :' + this.state.comment + ' '+ this.fullName);
    e.preventDefault();
  }

    // const div = document.createElement('div');
    // const p = document.createElement('p')
    // p.className += "newComment";

    // const text = ('Nouveau commentaire de :' +  this.state.fullName 
    // + this.state.comment );
    // text.appendChild(p)
    // e.preventDefault();
  
  

  render() {
    return (
      <div className="Comment">
        <div>
          <Form onSubmit={this.handleSubmit}  style={this.getName()} className="createComment" >
            <FormGroup controlId="full-name" as={Col} md="12">
              <FormLabel className="FormRow">Full-name: </FormLabel>
                <FormControl
                  type="text"
                  name="fullName"
                  value={this.fullName}
                  onChange={this.handleChange}
                />
            </FormGroup>
          

          
            <FormGroup as={Col} md="12"  style={this.getComment()} controlId="formBasicComment">
              <FormLabel className="FormRow addComment">Comment:</FormLabel>
                <FormControl
                  type="text"
                  placeholder='Ajouter un commentaire..'
                  name='comment'
                  value={this.comment}
                  onChange={this.handleChange}
                />
              <Button type="submit" size="md" value="Submit" className="Subutton">Submit</Button>
            </FormGroup>
          </Form>
        </div>
      </div>
      
    );
  }
}

export default Comment;

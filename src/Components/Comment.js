import React, { Component } from 'react';
//import $ from "jquery";
import './Comment.css';
import { Form, FormLabel, FormControl, Button,
  Col, FormGroup} from 'react-bootstrap';

class Comment extends Component {
  getComment = () =>{
    return{
      backgroundColor: '#ccc',
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

  handleSubmit(e){
    const div = document.createElement('div');
    const p = document.createElement('p')
    p.className += "newComment";

    const text = ('Nouveau commentaire de :' +  this.state.fullName 
    + this.state.comment );
    text.appendChild(p)
    e.preventDefault();
  }
  

  render() {
    return (
      <div className="Comment">
        <div style={this.getComment}>
          <Form onSubmit={this.handleSubmit} className="createComment" >
            <FormGroup controlId="full-name" as={Col} md="8">
              <FormLabel className="FormRow">Full-name: </FormLabel>
                <FormControl
                  type="text"
                  name="fullName"
                  value={this.fullName}
                  onChange={this.handleChange}
                />
            </FormGroup>
          

          
            <FormGroup as={Col} md="8" controlId="formBasicComment">
              <FormLabel className="FormRow addComment">Comment:</FormLabel>
                <FormControl
                  type="text"
                  placeholder='Ajouter un commentaire..'
                  name='comment'
                  value={this.comment}
                  onChange={this.handleChange}
                />
              <Button type="submit" value="Submit" className="Subutton">Submit</Button>
            </FormGroup>
          </Form>
        </div>
      </div>
      
    );
  }


}

export default Comment;

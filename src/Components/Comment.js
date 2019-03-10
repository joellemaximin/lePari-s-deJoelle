import React, { Component } from 'react';
//import $ from "jquery";
import './Comment.css';
import { Form, FormLabel, FormControl, Button,
  Col, FormGroup} from 'react-bootstrap';

class Comment extends Component {
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
    document.write('Nouveau commentaire de :' + this.state.comment + ' '+ this.fullName);
    e.preventDefault();
  }
  

  render() {
    return (
      <div className="Comment">
        <div>
          <Form onSubmit={this.handleSubmit} className="createComment" >
            <FormGroup controlId="full-name" as={Col} md="6">
              <FormLabel className="FormRow">Full-name: </FormLabel>
                <FormControl
                  type="text"
                  name="fullName"
                  value={this.fullName}
                  onChange={this.handleChange}
                />
            </FormGroup>
          

          
            <FormGroup as={Col} md="6" controlId="formBasicComment">
              <FormLabel className="FormRow">Comment:</FormLabel>
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

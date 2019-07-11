import React, { Component } from 'react';
import './Form.css';

class Form extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addReservation = event => {
    event.preventDefault();

    const newRes = {
      id: Date.now(),
      ...this.state
    }
    console.log(newRes)
    this.props.addRes(newRes)
  }

  render() {
    return(
      <form>
        <input 
          type='text'
          placeholder='Name'
          name ='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type='date'
          placeholder='Date'
          name ='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type='time'
          placeholder='Time'
          name ='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type='number'
          placeholder='Number of Guests'
          name ='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.addReservation(event)}>Submit</button>
      </form>
    )
  }
}

export default Form;
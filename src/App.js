import React, { Component } from 'react';
import './App.css';
import ResContainer from './ResContainer'
import Loader from './Loader';
import Form from './Form';
import {addRes} from './apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      errorMessage: '',
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(reservations => this.setState({reservations: reservations, isLoading: false}))
    .catch(error => this.setState({errorMessage: error.message}))
  }

  addRes = (newRes) => {
    this.setState({reservations: [...this.state.reservations, newRes] })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addRes={this.addRes}/>
        </div>
        <div className='resy-container'>
        {this.state.isLoading === true && 
          <Loader /> 
        }
        {this.state.isLoading === false && 
          <ResContainer reservations= {this.state.reservations} />
        }
        </div>
      </div>
    )
  }
}
// Attempt to save to local host
// return fetch('http://localhost:3001/api/v1/reservations', {
//   method: 'POST',
//   body: JSON.stringify({newRes}),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
// .then(response => response.json())
// .then(reservations => {
//   this.setState({
//     reservations: [...this.state.reservations, newRes]
//   })
// })
// .catch(error => {
//   this.setState({
//     errorMessage: 'Error adding reservation'
//   })
// })


export default App;

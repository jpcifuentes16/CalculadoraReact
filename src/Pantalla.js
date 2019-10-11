/* eslint   react/destructuring-assignment: 0 */
import React, { Component } from 'react';
import './Pantalla.css';

class Pantalla extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() 
  {

    

    return (
      <div id="pantalla" className="Pantalla">{this.props.valor}</div>
    );
  }
}

export default Pantalla;

/* eslint   react/destructuring-assignment: 0 */
import React, { Component } from 'react';
import './Boton.css';

class Boton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.botonesEspeciales=['+','-','/','x']
    this.clase="nada"
  }


  presionarBoton()
  {
    this.props.preionarBoton(this.props.valor)
  }


  render() 
  {
    if(this.botonesEspeciales.indexOf(this.props.valor)!=-1)
    {
      this.clase="especial"
    }
    let idB=''
    if(this.props.valor==='=')
    {
      idB='igual'
    }
    else if(this.props.valor==='+')
    {
      idB='suma'
    }
    else if(this.props.valor==='-')
    {
      idB='resta'
    }
    else if(this.props.valor==='x')
    {
      idB='mul'
    }
    else if(this.props.valor==='/')
    {
      idB='division'
    }
    else
    {
      idB='b'+this.props.valor
    }
    

    

    return (
      <span className={this.clase} id={idB} onClick={this.presionarBoton.bind(this)}>{this.props.valor}</span>
    );
  }
}

export default Boton;

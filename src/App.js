import React, { Component } from 'react';
import './App.css';
import Boton from './Boton'
import Pantalla from './Pantalla'

class App extends Component 
{
    constructor(props)
    {
      super(props)

        
      this.state = 
      {
        teclado:['7','8','9','+','4','5','6','-','1','2','3','/','0','.','=','x'],
        numeroMemoria:0,
        numerosEnPantalla:'0',
        operador:'',
        nuevoNumero:false,
        operacionEnCola:false
      }

      this.botonesEspeciales=['+','-','/','x']
    
    }

    suma()
    {
      let resultado=parseFloat(this.state.numeroMemoria)+parseFloat(this.state.numerosEnPantalla)
      
      if(resultado>999999999)
      {
        resultado="ERROR"
      }

      if(resultado.toString().length>9)
      {
        resultado = resultado.toString().slice(0, 9);
      }



      this.setState(
            {
              numerosEnPantalla:resultado,
              operador:'0'
            }
          );
    }
    mul()
    {
      let resultado=parseFloat(this.state.numeroMemoria)*parseFloat(this.state.numerosEnPantalla)
      
      if(resultado>999999999)
      {
        resultado="ERROR"
      }

      if(resultado.toString().length>9)
      {
        resultado = resultado.toString().slice(0, 9);
      }

      this.setState(
            {
              numerosEnPantalla:resultado,
              operador:''
            }
          );
    }
    resta()
    {
      let resultado=parseFloat(this.state.numeroMemoria)-parseFloat(this.state.numerosEnPantalla)
      
      if(resultado<0)
      {
        resultado="ERROR"
      }

      if(resultado.toString().length>9)
      {
        resultado = resultado.toString().slice(0, 9);
      }

      this.setState(
            {
              numerosEnPantalla:resultado,
              operador:'0'
            }
          );
    }
    division()
    {
      let resultado=parseFloat(this.state.numeroMemoria)/parseFloat(this.state.numerosEnPantalla)
      if(resultado.toString().length>9)
      {
        resultado = resultado.toString().slice(0, 9);
      }

      if(resultado===Infinity)
      {
        resultado ="ERROR"

      }

      this.setState(
            {
              numerosEnPantalla:resultado,
              operador:'0'
            }
          );
    }

    resetBanderaNuevoNumero()
    {
      this.setState(
            {
              nuevoNumero:false
            }
          );

    }


    preionarBoton(numeroNuevo)
    {
      if(this.state.operacionEnCola)
      {
        this.setState(
            {
              numeroMemoria: this.state.numerosEnPantalla,
              operacionEnCola:false
            })
      }
      let pantallaNueva;
      if((this.state.numerosEnPantalla==='0' || this.state.numerosEnPantalla==='ERROR'||this.state.nuevoNumero) && numeroNuevo!='.')
      {
        pantallaNueva=numeroNuevo;
      }
      else
      {
        pantallaNueva=this.state.numerosEnPantalla+numeroNuevo;
      }

      if(this.state.nuevoNumero)
      {
        this.resetBanderaNuevoNumero()
      }
      

      if(this.botonesEspeciales.indexOf(numeroNuevo)!=-1)
      {
        const numeroMemoriaEntrante= this.state.numerosEnPantalla
        this.setState(
            {
              operador:numeroNuevo,
              numeroMemoria: numeroMemoriaEntrante,
              nuevoNumero:true
            }
          );
        if(this.state.operador!='')
        {
            if(this.state.operador==='+')
            {
              this.suma()
            }
            else if(this.state.operador==='x')
            {
              this.mul()
            }
            else if(this.state.operador==='-')
            {
              this.resta()
            }
            else if(this.state.operador==='/')
            {
              this.division()
            }
            this.setState(
            {
              operador:numeroNuevo,
              operacionEnCola:true
              //numeroMemoria:this.state.numerosEnPantalla
            }
            );

            return 0
        }
        return 0
      }

      if(numeroNuevo==='=')
      {
         this.setState(
            {
              operador:''
            }
          );
        if(this.state.operador==='+')
        {
          this.suma()
        }
        else if(this.state.operador==='x')
        {
          this.mul()
        }
        else if(this.state.operador==='-')
        {
          this.resta()
        }
        else if(this.state.operador==='/')
        {
          this.division()
        }

        return 0
      }

      if(this.state.numerosEnPantalla.length>=9)
      {
        return
      }

      this.setState(
            {
              numerosEnPantalla:pantallaNueva
            }
          );

    }
  
  render() 
  {
    return (
      <div className="App">
        <Pantalla valor={this.state.numerosEnPantalla}/>
        <div className="teclado">
        {
          this.state.teclado.map((valor,index)=>
              {
                 return <Boton valor={valor} 
                 preionarBoton={this.preionarBoton.bind(this)}/>
              })
        }

        </div>
        
      </div>
    );
  }
}

export default App;
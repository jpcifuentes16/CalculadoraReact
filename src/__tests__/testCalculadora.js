import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
/*
La app se renderiza sin ningun problema
*/
describe('Prueba de que la aplicación se renderiza correctamente', () => {
   it('Este debería de renderizarse sin ningún problema', () => {
      shallow(<App />);
    });
});

/*
Al presionar un botón en la calculadora, se muestra correctamente
En la pantalla de la misma. 
*/
describe('Prueba de despliegue correctamente', () => {
   it('Este debería de mostrar en pantalla el numero presionado', () => {
      const wrapper = mount(<App />);
      const btn = wrapper.find('#b7')
      btn.simulate('click')
      const pantalla = wrapper.find('#pantalla')
      expect(pantalla.text()).toEqual('7')
    });
});


/*
El despliegue no debe poder mostrar números negativos. 
Si el número es negativo(como resultado de una resta), 
deben mostrar la palabra ERROR
*/
describe ("Validar numeros negativos", ()=>{
  test("este deberia de mostrar ERROR si el resultado es un numero negativo",()=>{
    const wrapper = mount(<App />);

    const btn = wrapper.find('#b1')
    btn.simulate('click')

    const operacion = wrapper.find('#resta')
    operacion.simulate('click')

    const btn2 = wrapper.find('#b7')
    btn2.simulate('click')

    const botonIgual = wrapper.find('#igual')
    botonIgual.simulate('click')

    const pantalla = wrapper.find('#pantalla')
    console.log(pantalla.text())

    expect(pantalla.text()).toEqual('ERROR')
  })
})


/*
El despliegue no debe poder mostrar números superiores a 999999999. 
Si el número es mayor (como resultado de una suma o multiplicación), 
deben mostrar la palabra ERROR
*/
describe ("Validar numeros grandes suma", ()=>{
  test("este deberia de mostrar ERROR si el resultado es mayor a 999999999",()=>{
    const wrapper = mount(<App />);

    const btn = wrapper.find('#b9')

    for (var i =0; i< 9; i++) {
      btn.simulate('click')
    }

    const operacion = wrapper.find('#mul')
    operacion.simulate('click')

    for (var i =0; i< 9; i++) {
      btn.simulate('click')
    }

    const botonIgual = wrapper.find('#igual')
    botonIgual.simulate('click')

    const pantalla = wrapper.find('#pantalla')
    console.log(pantalla.text())

    expect(pantalla.text()).toEqual('ERROR')
  })
})


/*
SUMA
*/
describe ("Suma de dos numeros", ()=>{
  test("este deberia de mostrar el resultado de sumar dos numeros",()=>{
    const wrapper = mount(<App />);

    const btn = wrapper.find('#b1')
    btn.simulate('click')

    const operacion = wrapper.find('#suma')
    operacion.simulate('click')

    const btn2 = wrapper.find('#b7')
    btn2.simulate('click')

    const botonIgual = wrapper.find('#igual')
    botonIgual.simulate('click')

    const pantalla = wrapper.find('#pantalla')
    console.log(pantalla.text())

    expect(pantalla.text()).toEqual('8')
  })
})


/*
RESTA
*/
describe ("Resta de dos numeros", ()=>{
  test("este deberia de mostrar el resultado de restar dos numeros",()=>{
    const wrapper = mount(<App />);

    const btn = wrapper.find('#b7')
    btn.simulate('click')

    const operacion = wrapper.find('#resta')
    operacion.simulate('click')

    const btn2 = wrapper.find('#b1')
    btn2.simulate('click')

    const botonIgual = wrapper.find('#igual')
    botonIgual.simulate('click')

    const pantalla = wrapper.find('#pantalla')
    console.log(pantalla.text())

    expect(pantalla.text()).toEqual('6')
  })
})

/*
Division 
*/
describe ("Division de dos numeros", ()=>{
  test("este deberia de mostrar el resultado de dividir dos numeros",()=>{
    const wrapper = mount(<App />);

    const btn = wrapper.find('#b4')
    btn.simulate('click')

    const operacion = wrapper.find('#division')
    operacion.simulate('click')

    const btn2 = wrapper.find('#b2')
    btn2.simulate('click')

    const botonIgual = wrapper.find('#igual')
    botonIgual.simulate('click')

    const pantalla = wrapper.find('#pantalla')
    console.log(pantalla.text())

    expect(pantalla.text()).toEqual('2')
  })
})


/*
Multiplicacion
*/
describe ("Multiplicacion de dos numeros", ()=>{
  test("este deberia de mostrar el resultado de multiplicar dos numeros",()=>{
    const wrapper = mount(<App />);

    const btn = wrapper.find('#b7')
    btn.simulate('click')

    const operacion = wrapper.find('#mul')
    operacion.simulate('click')

    const btn2 = wrapper.find('#b2')
    btn2.simulate('click')

    const botonIgual = wrapper.find('#igual')
    botonIgual.simulate('click')

    const pantalla = wrapper.find('#pantalla')
    console.log(pantalla.text())

    expect(pantalla.text()).toEqual('14')
  })
})


/*
El despliegue no debe poder mostrar más de 9 números. 
Cualquier número después del noveno debe ser ignorado.
*/
describe ("No se deben de mostrar más de 9 numeros", ()=>{
  test("este debería de ignorar todos los numeros después del noveno",()=>{
    const wrapper = mount(<App />);

    const btn = wrapper.find('#b1')

    for (var i = 0; i<13; i++) {
      btn.simulate('click')
    }
    
    const pantalla = wrapper.find('#pantalla')
    console.log(pantalla.text())

    expect(pantalla.text()).toEqual('111111111')
  })
})
import React from 'react'
import { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const Contador = () => {
  
    //let numero = 0;
    let [numero, setNumero] = useState(0)
    
    
    function add(){
        setNumero(++numero)
        console.log(numero)
    }

    function sub(){
        setNumero(--numero)
        console.log(numero)
    }

    function mais5(){
        setNumero(5+numero)
        console.log(numero)
    }

    function menos5(){
        setNumero(numero-5)
        console.log(numero)
    }

    function mais10(){
        setNumero(10+numero)
        console.log(numero)
    }

    function menos10(){
        setNumero(numero-10)
        console.log(numero)
    }
    
    return (
    <div>
    <Container>
      <h1>Contador</h1>
      <Button variant="secondary" onClick={menos10}>-10</Button>
      <Button variant="info" onClick={menos5}>-5</Button>
      <Button variant="danger" onClick={sub}>-</Button>
      {numero}
      <Button variant="success" onClick={add}>+</Button>
      <Button variant="primary" onClick={mais5}>+5</Button>
      <Button variant="warning" onClick={mais10}>+10</Button>
    </Container>
    </div>
  )
}

export default Contador
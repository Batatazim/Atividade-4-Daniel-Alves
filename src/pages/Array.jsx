import React from 'react'
import { Container } from 'react-bootstrap'

const Array = () => {

   const carros = 
   [
   "Fusca", 
   "Gol", 
   "Celta", 
   "Corola"
   ]
   
   const pessoas = 
   [
   "Orion", 
   "Daniel", 
   "Jailson mendes", 
   "Jubileu"
   ]

  return (
    <div>
    <Container>
    <h1>Array</h1>
    
    <h2>Carros</h2>

    {
      carros.map(item => (
        <p>{item}</p>
      ))
    }

    <h2>Pessoas</h2>
    
    <ol>
    {pessoas.map(item=>(
        <li>{item}</li>
      ))
    }
    </ol>


    </Container>
    </div>
    
    


  )
}

export default Array
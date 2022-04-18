import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesPopulares = () => {
  
    const [seriespop, setSeriespop] = useState([])

    useEffect(()=>{

       apiFilmes.get('tv/popular?language=pt-BR').then(resultado=>{
           setSeriespop(resultado.data.results)
          
       })
       
    },[])
        
    return (
    <div>
    <Container>
     <h1>Series populares</h1>
     <Row>
     {seriespop.map(item =>(
       <Col md={3} className="mb-3">
       <Card>
        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/'+ item.poster_path} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Titulo original: {item.original_name}</Card.Text>
          <Card.Text>Popularidade: {item.popularity}</Card.Text>
       <Link className='btn btn-secondary' to={'/series/' + item.id}>Ver detalhes</Link>
       </Card.Body>
       </Card>
       </Col>
     ))}
     </Row>
    </Container>
    </div>
  )
}

export default FilmesPopulares
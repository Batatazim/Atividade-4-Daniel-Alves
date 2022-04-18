import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const SeriesCartaz = () => {
  
    const [seriescar, setSeriescar] = useState([])

    useEffect(()=>{

       apiFilmes.get('tv/on_the_air?language=pt-BR').then(resultado=>{
           setSeriescar(resultado.data.results)
          
       })
       
    },[])
        
    return (
    <div>
    <Container>
     <h1>Series Em Cartaz</h1>
     <Row>
     {seriescar.map(item =>(
       <Col md={3} className="mb-3">
       <Card>
        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/'+ item.poster_path} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Titulo original: {item.original_name}</Card.Text>
          <Card.Text>Media de votos: {item.vote_average}</Card.Text>
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

export default SeriesCartaz
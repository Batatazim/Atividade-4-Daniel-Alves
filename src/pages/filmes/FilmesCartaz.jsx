import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesCartaz = () => {
  
    const [filmecar, setFilmescar] = useState([])

    useEffect(()=>{

       apiFilmes.get('movie/now_playing?language=pt-BR').then(resultado=>{
           setFilmescar(resultado.data.results)
          
       })
       
    },[])
        
    return (
    <div>
    <Container>
     <h1>Filmes Em Cartaz</h1>
     <Row>
     {filmecar.map(item =>(
       <Col md={3} className="mb-3">
       <Card>
        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/'+ item.poster_path} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>Titulo original: {item.original_title}</Card.Text>
          <Card.Text>Media de votos: {item.vote_average}</Card.Text>
    <Link className='btn btn-secondary' to={'/filmes/' + item.id}>Ver detalhes</Link>
  </Card.Body>
</Card>
       </Col>
     ))}
     </Row>
    </Container>
    </div>
  )
}

export default FilmesCartaz
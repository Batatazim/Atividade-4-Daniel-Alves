import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesLançamento = () => {
  
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{

       apiFilmes.get('movie/upcoming?language=pt-BR').then(resultado=>{
           setFilmes(resultado.data.results)
          
       })
       
    },[])

    console.log(filmes.length)
        
    return (
    <div>
    <Container>
     <h1>Filmes Lançamento</h1>

     { filmes.length === 0 && <h1>Carregando ... Aguarde</h1>}
     <Row>
     {filmes.map(item =>(
       <Col key = {item.id} md={3} className="mb-3">
       <Card>
        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/'+ item.poster_path} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>Titulo original: {item.original_title}</Card.Text>
          <Card.Text>Lançamento: {item.release_date}</Card.Text>
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

export default FilmesLançamento    
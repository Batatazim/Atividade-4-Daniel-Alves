import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesLançamento = () => {
  
    const [serieslan, setSerieslan] = useState([])

    useEffect(()=>{

       apiFilmes.get('tv/airing_today?language=pt-BR').then(resultado=>{
           setSerieslan(resultado.data.results)
          
       })
       
    },[])

    console.log(serieslan.length)
        
    return (
    <div>
    <Container>
     <h1>Series Lançamento</h1>

     { serieslan.length === 0 && <h1>Carregando ... Aguarde</h1>}
     <Row>
     {serieslan.map(item =>(
       <Col key = {item.id} md={3} className="mb-3">
       <Card>
        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/'+ item.poster_path} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Titulo original: {item.original_name}</Card.Text>
          <Card.Text>Lançamento: {item.release_date}</Card.Text>
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

export default FilmesLançamento    
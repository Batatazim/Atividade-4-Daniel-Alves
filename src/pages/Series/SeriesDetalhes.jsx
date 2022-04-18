import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const SeriesDetalhes = () => {
  
    const params = useParams()
    const navigate = useNavigate
    const [serie, setSerie] = useState({})
    const [atores, setAtores] = useState([])
    const [temporadas, setTemporadas] = useState([])
    
    useEffect(()=>{

       apiFilmes.get('tv/'+ params.id + '?language=pt-BR').then(resultado=>{
           setSerie(resultado.data);   
       });

       apiFilmes.get('tv/'+ params.id + '/credits' + '?language=pt-BR').then(resultado=>{
        setAtores(resultado.data.cast);    
       });

       apiFilmes.get('tv/'+ params.id + '?language=pt-BR').then(resultado=>{
        setTemporadas(resultado.data.seasons);   
      })

    
    },[])

    return (
    <div>
      {!serie.id && <h1>Carregando... Aguarde!</h1>}

      {serie.id &&
      <div>
        <Container>
        <h1>{serie.title}</h1>
        <Row>
          <Col md={4}>
              <Card>
              <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path} />
              </Card>
              </Col>
              <Col md={8}>
                    <p><strong>Título Original: </strong>{serie.original_title}</p>
                    <p><strong>Popularidade: </strong>{serie.popularity}</p>
                    <p><strong>Data de Lançamento: </strong>{serie.release_date}</p>
                    <p><strong>Orçamento: </strong>{serie.budget}</p>
                    <p><strong>Gêneros: </strong> {serie.genres.map(item => (
                      <span key={item.id}>{item.name}, </span>
                    ))}
                    </p>
                    <p><strong>Sinopse: </strong>{serie.overview}</p>
                    <Link className='btn btn-secondary' to={-1}>Voltar</Link>
              </Col>
              
              <Col md={12} className='mt-3'>
                <h1>Temporadas</h1>
              </Col>
              <Row>
              {temporadas.map(item=>(
               <Col className='mb-3' md={3} key={item.id}>
                <Card title = {item.name}>
                   <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                </Card>
               </Col>
              ))}
             </Row>
              
              <Col md={12} className='mt-3'>
                <h1>Atores</h1>
              </Col>
              <Row>
              {atores.map(item=>(
               <Col className='mb-3' md={3} key={item.id}>
                <Card title = {item.name}>
                   <Link to={'/atores/' + item.id}>
                   <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                   </Link>
                   <Card.Text><strong>{item.name}</strong></Card.Text>
                </Card>
               </Col>
              ))}
             </Row>
            </Row>

        </Container>
      </div>
    }
    </div>
  )
}

export default SeriesDetalhes
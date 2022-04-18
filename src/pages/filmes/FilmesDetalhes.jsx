import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = () => {
  
    const params = useParams()
    const navigate = useNavigate
    const [filme, setFilme] = useState({})
    const [atores, setAtores] = useState([])
    
    useEffect(()=>{

       apiFilmes.get('movie/'+ params.id + '?language=pt-BR').then(resultado=>{
           setFilme(resultado.data)    
       })
    
    },[])

    useEffect(()=>{

      apiFilmes.get('movie/'+ params.id + '/credits' + '?language=pt-BR').then(resultado=>{
        setAtores(resultado.data.cast)    
      })
   
   },[])

    

    return (
    <div>
      {!filme.id && <h1>Carregando... Aguarde!</h1>}

      {filme.id &&
      <div>
        <Container>
        <h1>{filme.title}</h1>
        <Row>
          <Col md={4}>
              <Card>
              <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
              </Card>
              </Col>
              <Col md={8}>
                    <p><strong>Título Original: </strong>{filme.original_title}</p>
                    <p><strong>Popularidade: </strong>{filme.popularity}</p>
                    <p><strong>Data de Lançamento: </strong>{filme.release_date}</p>
                    <p><strong>Orçamento: </strong>{filme.budget}</p>
                    <p><strong>Gêneros: </strong> {filme.genres.map(item => (
                      <span key={item.id}>{item.name}, </span>
                    ))}
                    </p>
                    <p><strong>Sinopse: </strong>{filme.overview}</p>
                    <Link className='btn btn-secondary' to={-1}>Voltar</Link>
              </Col>
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

export default FilmesDetalhes
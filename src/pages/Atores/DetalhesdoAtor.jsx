import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const DetalhesdoAtor = () => {

    const params = useParams()
    const [ator, setAtor] = useState({})
    const [filmes, setFilmes] = useState([])


    useEffect(() => {
        apiFilmes.get('person/' + params.id + '?language=pt-BR').then(resultado => {
            setAtor(resultado.data)
        })

        apiFilmes.get('person/' + params.id + '/movie_credits?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.cast);
        })        
    }, [])

    return (
        <div>
          <Container>
            {!ator.id && <h1>Carregando... Aguarde!</h1>}

            {ator.id &&
                <div>
                    <h1>{ator.name}</h1>
                    
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                            </Card>
                        </Col>
                        <Col md={8}>
                            <p><strong>Data de Nascimento </strong>{ator.birthday}</p>
                            <p><strong>Local de Nascimento </strong>{ator.place_of_birth}</p>
                            <p><strong>Biografia </strong>{ator.biography}</p>
                            <Link className='btn btn-secondary' to={-1}>Voltar</Link>
                        </Col>
                        <Col md={12} className="mt-3">
                            <h1>Filmes</h1>
                        </Col>
                        <Row>
                            {filmes.map(item => (
                                <Col className="mb-3" md={4} key={item.id}>
                                    
                                        <Card title={item.title}>
                                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                                            <Card.Text><strong>Nome: {item.title}</strong></Card.Text>
                                            <Card.Text><strong>Lançamento: {item.release_date}</strong></Card.Text>
                                            <Link className='btn btn-secondary' to={'/filmes/' + item.id}>Ver detalhes</Link>
                                        </Card>
                                </Col>
                            ))}
                         </Row>                        
                    </Row>
                    
                </div>
            }
            </Container>
        </div>
    )
}

export default DetalhesdoAtor
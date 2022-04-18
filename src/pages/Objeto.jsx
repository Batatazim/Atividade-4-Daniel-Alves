import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Objeto = () => {


  const carros =[
 {
   marca: 'VW', 
   modelo: 'Fusca', 
   cor: 'Vermelho', 
   ano: 1965, 
   foto: "https://cdn.autopapo.com.br/box/uploads/2018/12/14184150/restauracao-do-fusca-1967-91-732x488.jpg",
   fabricante: {
   cnpj: 123,
   razao_social: ''
   }
  },
  {
    marca: 'Fiat', 
    modelo: 'Uno', 
    cor: 'Branco', 
    ano: 2001, 
    foto:"https://http2.mlstatic.com/D_NQ_NP_935689-MLB43717018365_102020-O.jpg",
    fabricante: {
      cnpj: 321,
      razao_social: ''
      }
   },
   {
    marca: 'Renault', 
    modelo: 'Sandero', 
    cor: 'Cinza', 
    ano: 2020, 
    foto:"https://webseminovos.blob.core.windows.net/anuncio-original/O_GFQ-9698_01.JPG",
    fabricante: {
      cnpj: 312,
      razao_social: ''
      }
   },
   {
    marca: 'Ford', 
    modelo: 'Ka', 
    cor: 'Preto', 
    ano: 2019, 
    foto:"https://www.vittacargarage.com.br/carros/fe86afb314b03a80ed3dc09e4b29c8c5-thumbjpeg-ford-ka-8642447-1000-750-70.jpg",
    fabricante: {
      cnpj: 312,
      razao_social: ''
      }
   },
   {
    marca: 'VW', 
    modelo: 'Fusca', 
    cor: 'Vermelho', 
    ano: 1965, 
    foto: "https://cdn.autopapo.com.br/box/uploads/2018/12/14184150/restauracao-do-fusca-1967-91-732x488.jpg",
    fabricante: {
    cnpj: 123,
    razao_social: ''
    }
   },
] 

  return (

    <div>
      <Container>
      <h1>Carros</h1>
      <Row md={4}>
       {carros.map(item => (
        <Col>
        <Card>
        <Card.Img  height={160.88} variant="top" src={item.foto} />
        <Card.Body>
          <Card.Title>{item.modelo}</Card.Title>
          <Card.Text>
            <p><strong>Marca:</strong> {item.marca} </p>
            <p><strong>Cor:</strong> {item.cor} </p>
            <p><strong>Ano:</strong> {item.ano} </p>
          </Card.Text>
          <Button variant="danger">Mais Detalhes</Button>
        </Card.Body>
      </Card>
      </Col>
      ))}
      </Row>
      </Container>
      </div>
  )
}

export default Objeto
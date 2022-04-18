import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Cartao = (props) => {

   console.log(props)

  return (
    <div>

<Card style={{ width: '18rem' }} >
  <Card.Img  height={160.88} variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.titulo}</Card.Title>
    <Card.Text>
    {props.desc}
    </Card.Text>
    <Button variant="primary">perta aqui amigo</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Cartao
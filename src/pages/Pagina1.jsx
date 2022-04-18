import React from 'react';
import Cartao from '../components/Cartao';
import { Button, Card, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';


const Pagina1 = () => {
  return (
    <div>
<Container>

<Row>
  
<Col>
<Cartao 
titulo="Cirilão" 
img="https://i.ytimg.com/vi/24SEJb-zITo/maxresdefault.jpg" 
desc="Mlk doido"/>
</Col>

<Col>
<Cartao 
titulo="Caramelo" 
img="https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg" 
desc="bravo demais"/>
</Col>

<Col>
<Cartao 
titulo="Doguin" 
img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPJRhOJDYn9cnjm8gGgsXI_Kkg17_jIypWg&usqp=CAU" 
desc="Radical"/>
</Col>

</Row>

</Container>

 </div>
  )
}

export default Pagina1
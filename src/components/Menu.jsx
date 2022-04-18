import React from 'react'
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <div>

<Navbar bg="secondary" variant="dark" className='mb-4'>
    <Container>
    <Navbar.Brand href="#home">Sabores</Navbar.Brand>
    <Nav className="me-auto">
      <Link className="nav-link" to="/carros">Carros</Link>
      <Link className="nav-link" to="/array">Array</Link>
      <Link className="nav-link" to="/objeto">Objeto</Link>
      <Link className="nav-link" to="/pagina1">Pagina1</Link>
      <Link className="nav-link" to="/contador">Contador</Link>
      
      <NavDropdown  title="Filmes" className="show" id="basic-nav-dropdown">
      <Link className="dropdown-item" to="/filmes/populares">Filmes Populares</Link>
      <Link className="dropdown-item" to="/filmes/lancamento">Filmes Lançamento</Link>
      <Link className="dropdown-item" to="/filmes/cartaz">Filmes Cartaz</Link>
      </NavDropdown>

      <NavDropdown  title="Series" className="show" id="basic-nav-dropdown">
      <Link className="dropdown-item" to="/series/populares">Series Populares</Link>
      <Link className="dropdown-item" to="/series/lancamento">Series Lançamento</Link>
      <Link className="dropdown-item" to="/series/cartaz">Series Cartaz</Link>
      </NavDropdown>
    </Nav>
    </Container>
  </Navbar>

    </div>
  )
}

export default Menu
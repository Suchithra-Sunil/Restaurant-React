import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar  variant="dark" className='bg-primary'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <strong className='mt-4'>The Golden Fork</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header
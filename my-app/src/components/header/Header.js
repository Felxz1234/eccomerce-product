import React from "react"
import './header.css'
import avatar from '../../images/image-avatar.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from '../../images/image-product-1.jpg'
    
function Header(props){

    return(
        <div className="header">
            <Navbar expand="lg">
            <Container className="n"  >
                <Navbar.Brand className="snakeTitle"  href="#home">Sneakers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="collapse" id="basic-navbar-nav">
                <Nav className="me-auto b">
                    <Nav.Link href="#home">Collections</Nav.Link>
                    <Nav.Link href="#link">Men</Nav.Link>
                    <Nav.Link href="#link">Women</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    <NavDropdown className="nave" title={ <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/>       
                </svg>}>
                  <NavDropdown.Item>Cart</NavDropdown.Item>
                  <NavDropdown.Divider></NavDropdown.Divider>
                  <NavDropdown.Item className="item">
                     <div className="d-flex  flex-column justify-content-center align-items-center">
                       
                        {props.card > 0 &&
                          <>
                           <img className="cal" src={img}></img>
                            <p className= " f edition">Fall Limited Edition Sneakers</p>
                           <p className="f">$125 x {props.numero}</p>
                           <p>total = ${props.card}</p>
                          </>                          
                        }
                        {props.card == 0 && 
                           <h4>nada no carrinho</h4>                    
                        }
                                            
                     </div>
                  </NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <div className="s" >
                  
                  <img src={avatar}></img>
                </div>     
                </Navbar.Collapse>
                
            </Container>
            
                
            </Navbar>
        </div>   
  );
}


export default Header
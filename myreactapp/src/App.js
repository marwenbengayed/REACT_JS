/* bootstrap CSS file */
import 'bootstrap/dist/css/bootstrap.min.css';
/* Importing Navbar component*/
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
/* Importing Card component*/
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React from 'react';

function MyComponent() {
    return(
        
        <React.Fragment>
            
                <div className="App">
                    
                        {/* // Navbar Component: Link and Dropdown list */}
                    
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand href="#home">React-Bootstrap Navbar</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                                            {/* // Header Component: Simple text and subtext */}
                
                    <header>
                        <h1>Page header </h1><small>Subtext for header</small>
                    </header>
                    <br></br>
                    
                        {/* // Card1 Component: basic card  */}
                    
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card 1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    
                        {/* // Card2 Component: Title, text, and links  */}
                    
                    <Card border="success" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card 2</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <br></br>
                    
                        {/* // Card3 Component: Footer, Title, text, and Footer  */}
                    
                    <Card border="danger" style={{ width: '18rem' }} className="text-center">
                        <Card.Header>Card 3</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="text-muted">Card Footer</Card.Footer>
                    </Card>
                </div>
            
            </React.Fragment>
)
}

export default MyComponent;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import ApplicationForm from './components/ApplicationForm';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Kredit Kendaraan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Form Pengajuan</Nav.Link>
              <Nav.Link href="/admin">Dashboard Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container fluid>
          <Row>
            <Col xs={2} id="sidebar">
              <Nav className="flex-column">
                <Nav.Link href="/">Form Pengajuan</Nav.Link>
                <Nav.Link href="/admin">Dashboard Admin</Nav.Link>
              </Nav>
            </Col>
            <Col xs={10} id="page-content">
              <Routes>
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/" element={<ApplicationForm />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;

import React, { FC } from "react";
import { Container, Navbar } from "react-bootstrap";
const Header: FC = () => {
  return (
    <Navbar bg="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">CN Weather App</Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
};

export default Header;

import React, { FC } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherData } from "../../redux/global/global.action";
import { DefaultState } from "../../redux/interface";
const Header: FC = () => {
  const dispatch = useDispatch();
  const { home } = useSelector((x: DefaultState) => x.global);
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

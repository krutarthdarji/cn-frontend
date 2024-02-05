import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const PageNotFound: FC = () => {
  return (
    <Container className="mt-3 text-center">
      <h4>
        Error 404, Page Not Found. Please click here to navigate to home page
        from <Link to="/">here</Link>
      </h4>
    </Container>
  );
};

export default PageNotFound;

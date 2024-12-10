import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useLocation } from "react-router";

const Footer: React.FC = () => {
  const location = useLocation();
  return (
    <Container>
      <Row>
        <Col className={location.pathname === "/" ? "text-light" : undefined}>
          <label> © Background by Kuttoyaki</label>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

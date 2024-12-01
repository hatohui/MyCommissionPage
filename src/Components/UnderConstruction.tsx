import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const UnderConstruction: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container className="d-flex text-center position-absolute top-50 start-50 translate-middle align-content-center justify-content-center">
      <Row>
        <Col>PAGE UNDER CONSTRUCTION</Col>
        <Button variant="danger" onClick={() => navigate(-1)}>
          RETURN
        </Button>
      </Row>
    </Container>
  );
};

export default UnderConstruction;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const App: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>404 PAGE NOT FOUND</div>
      <Button variant="outline-danger" onClick={() => navigate(-1)}>
        Go back
      </Button>
    </Container>
  );
};

export default App;

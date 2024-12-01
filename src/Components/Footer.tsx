import React from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router";

const Footer: React.FC = () => {
  const location = useLocation();
  return (
    <div className="position-absolute bottom-0 start-0">
      <Row>
        <Col className={location.pathname === "/" ? "text-light" : undefined}>
          <label> © Background by Kuttoyaki</label>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;

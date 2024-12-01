import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <div className="position-absolute bottom-0 start-0">
      <Row>
        <Col>
          <label> © Background by Kuttoyaki</label>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;

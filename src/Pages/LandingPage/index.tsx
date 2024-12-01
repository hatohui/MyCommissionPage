import React from "react";
import { Card, Row, Col, Image, CardFooter } from "react-bootstrap";
import background from "..//../Images/LandingPage.jpg";
import hato from "../../Images/douzo.webp";

const blur = { backdropFilter: "blur(19px)" };
const darkMode = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  zIndex: 1,
};

const index: React.FC = () => {
  return (
    <div
      className="d-flex vh-100 vw-100
    align-items-center justify-content-center 
    position-absolute top-50 start-50 translate-middle"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "75%",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={darkMode}
      ></div>
      <Card className=" w-auto p-4 bg-transparent border-0 z-2">
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <Image
              src={hato}
              rounded
              className="w-auto"
              style={{
                height: 400,
              }}
            ></Image>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h1>Welcome to the Noodles's Den!~</h1>
            <h2>ようこそ、いらっしゃいませ</h2>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            Hemlo, it's Hatohui, a software engineer based in Vietnam
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default index;

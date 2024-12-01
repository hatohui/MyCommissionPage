import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  FormText,
  Row,
  Button,
  FormCheck,
  FloatingLabel,
} from "react-bootstrap";
import { CommissionDetails, CommissionType } from "../../types";

const index: React.FC = () => {
  const [preference, setPreference] = useState<string>("");
  const [extraChar, setExtraChar] = useState<boolean>(false);
  const [commDetail, setCommDetail] = useState<CommissionDetails>({
    name: "",
    email: "",
    type: CommissionType.NONE,
    refLink: "",
    tag: "",
    platform: "",
    inPerson: false,
    idea: "",
    urgent: false,
    numOfChar: 1,
    background: false,
  });

  //handle form changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "inPerson":
      case "urgent":
      case "background":
        setCommDetail({
          ...commDetail,
          [event.target.name]: !commDetail[event.target.name],
        });
        break;
      case "numOfChar":
      case "type":
        const value = isNaN(parseInt(event.target.value))
          ? 0
          : parseInt(event.target.value);
        setCommDetail({
          ...commDetail,
          [event.target.name]: value,
        });
        break;
      default:
        setCommDetail({
          ...commDetail,
          [event.target.name]: event.target.value,
        });
    }
  };

  //handle the additional char toggle
  const handleAdditionalCharToggle = () => {
    setCommDetail({
      ...commDetail,
      numOfChar: 1,
    });
    setExtraChar(!extraChar);
  };

  //handle submit
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted successfully");
  };

  //calculate the prices
  let price = 0;
  switch (commDetail.type) {
    case -1:
      price = 0;
      break;
    case 0:
      price = 50;
      break;
    case 1:
      price = 100;
      break;
    case 2:
      price = 200;
      break;
    case 3:
      price = -1;
      break;
  }

  //Show the pricing tag for commission types
  let toShow: string | null;
  if (commDetail.type === CommissionType.NONE) {
    toShow = "Please select a commission type to see the pricing.";
  } else if (commDetail.type === CommissionType.OTHER) {
    toShow = "Cannot calculate the price for this type of commission.";
  } else {
    toShow = `Price: $${price} USD`;
  }

  //show the sum price:

  console.log(commDetail);

  return (
    <Container className="d-flex align-items-center">
      <Row>
        <Col lg={4}>
          <div className="m-4 text-center lead">
            <h1>Commission Details</h1>
            <div>
              Status: <span className="text-success">OPEN</span>
            </div>
            {price != 0 && price != -1 ? <Row>Price</Row> : null}
          </div>
        </Col>
        <Col lg={true}>
          <Container className="p-5 pt-2">
            <Form onSubmit={handleSubmit}>
              <Row>
                <FormGroup as={Col} lg={true} className="mb-3">
                  <FormLabel>Name</FormLabel>
                  <FormControl
                    type="text"
                    name="name"
                    value={commDetail.name}
                    placeholder="Enter your name"
                    onChange={handleChange}
                    required
                  ></FormControl>
                  <FormText muted>An username I can refer you as</FormText>
                </FormGroup>
                <FormGroup as={Col} lg={true} className="mb-3">
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    type="email"
                    name="email"
                    value={commDetail.email}
                    placeholder="name@example.com"
                    onChange={handleChange}
                    required
                  ></FormControl>
                  <FormText muted>
                    Please provide the mail used in Paypal I can send you an
                    invoice for your commission
                  </FormText>
                </FormGroup>
              </Row>
              <Row>
                <FormGroup className="mb-3">
                  <FormLabel>Commission Type</FormLabel>
                  <FormSelect
                    required
                    defaultValue={CommissionType.NONE}
                    name="type"
                    onChange={handleChange as any}
                  >
                    <option
                      disabled
                      value={CommissionType.NONE}
                      className="text-secondary"
                    >
                      select a commission type
                    </option>
                    <option value={CommissionType.ICON}>Icon</option>
                    <option value={CommissionType.FULL}>Full</option>
                    <option value={CommissionType.SKETCHPAGE}>
                      Sketch Page
                    </option>
                    <option value={CommissionType.OTHER}>Other</option>
                  </FormSelect>
                  <FormText muted>{toShow}</FormText>
                </FormGroup>
                <FormGroup as={Col} lg={true}>
                  <FormCheck
                    type="checkbox"
                    label="Additional character(s)"
                    id="add_character"
                    onClick={handleAdditionalCharToggle}
                  ></FormCheck>
                </FormGroup>
                <FormGroup as={Col} lg={true} className="mb-2">
                  <FormCheck
                    type="checkbox"
                    id="add_background"
                    label="Background"
                  ></FormCheck>
                  {commDetail.background ? <FormText>+$30 USD</FormText> : null}
                </FormGroup>
                <FormGroup>
                  <FloatingLabel label="Amount of characters" className="mb-3">
                    <FormControl
                      type="number"
                      min="1"
                      max="6"
                      name="numOfChar"
                      value={
                        commDetail.numOfChar !== 0 ? commDetail.numOfChar : ""
                      }
                      disabled={!extraChar}
                      onChange={handleChange}
                    ></FormControl>
                    <FormText muted>
                      Total amount of characters in the drawing
                    </FormText>
                  </FloatingLabel>
                </FormGroup>
                <FormGroup as={Col} lg={true}></FormGroup>
              </Row>
              <Row>
                <FormGroup className="mb-3">
                  <FormLabel>
                    How do you prefer to send me your references?
                  </FormLabel>
                  <FormSelect
                    required
                    onChange={(e) => setPreference(e.target.value)}
                  >
                    <option disabled value="" className="text-secondary">
                      select your preference
                    </option>
                    <option value="personal">personally via DMs</option>
                    <option value="form">through this form</option>
                  </FormSelect>
                </FormGroup>
              </Row>
              {preference === "personal" ? <Row></Row> : null}
              <FormCheck
                type="checkbox"
                label="urgent?"
                name="inPerson"
                onChange={handleChange}
              ></FormCheck>
              <Button type="submit">Submit</Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default index;

import React, { Component } from "react";
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import {
  Button,
  FormGroup,
  Form,
  Label,
  Input,
  FormText,
  Col,
  Row,
} from "reactstrap";
class addEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizers: [],
    };
  }
  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <div>
          <ExamplesNavbar />
        </div>
        <div style={{ backgroundColor: "#05001e" }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>

        <Form
          style={{
            backgroundColor: "#05001e",
            padding: "30px",
            cursor: "pointer",
            color: "white",
          }}
        >
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Name of event
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="text"
                id="exampleText"
                placeholder="Robowars"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Prices
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="text"
                id="exampleText"
                placeholder="Robowars"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Description
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="text"
                id="exampleText"
                placeholder="....."
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Date
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="text"
                id="exampleText"
                placeholder="Robowars"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Venue
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="text"
                id="exampleText"
                placeholder="Robowars"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" sm={2}>
              Event Type
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                style={{ backgroundColor: "#05001e" }}
              >
                <option>Tech</option>
                <option>Management</option>
                <option>Robotics</option>
                <option>Management</option>
                <option>School</option>
                <option>Open for all</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Team Size
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="text"
                id="exampleText"
                placeholder="Robowars"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Start Time
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="text"
                id="exampleText"
                placeholder="Robowars"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              End Time
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="text"
                id="exampleText"
                placeholder="Robowars"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Charge
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="text"
                id="exampleText"
                placeholder="Robowars"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              RuleBook URL
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="text"
                id="exampleText"
                placeholder="Robowars"
              />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
        <Footer />
      </div>
    );
  }
}

export default addEvent;

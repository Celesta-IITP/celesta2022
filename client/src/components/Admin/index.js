import React from "react";
import axios from "axios";
import ExamplesNavbar from "../Navbars/IndexNavbar.js";
import Footer from "..//Footer/Footer.js";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Table,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default class Admin extends React.Component {
  state = {
    celestaId: "",
    points: "",
    msg: "",
  };

  idselect = (event) => {
    this.setState({ celestaId: event.target.value });
  };

  handleChangepoints = (event) => {
    this.setState({ points: event.target.value });
    console.log("updated");
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/ca/points", {
        celestaId: this.state.celestaId,
        points: this.state.points,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({ msg: "Points updated" });
      });
  };

  render() {
    return (
      <div>
        <ExamplesNavbar />
        <Container>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col md="6">
              <Card className="card-plain">
                <CardHeader>
                  <h1 className="profile-title text-left">Update CA Points</h1>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>CELESTA ID</label>
                          <Input
                            defaultValue="CLST0000"
                            type="text"
                            name="celestaId"
                            onChange={this.idselect}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6"></Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>POINTS</label>
                          <Input
                            defaultValue="10"
                            type="text"
                            name="points"
                            onChange={this.handleChangepoints}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6"></Col>
                    </Row>
                    <Row>
                      <Col md="12"></Col>
                    </Row>
                    <Button
                      className="btn-round float-right"
                      color="primary"
                      data-placement="right"
                      id="tooltip341148792"
                      type="submit"
                    >
                      UPDATE
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="right"
                      target="tooltip341148792"
                    >
                      Update Points
                    </UncontrolledTooltip>
                  </Form>
                  <h1>{this.state.msg}</h1>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <Container>
          <TabPane tabId="tab1">
            <Table className="tablesorter" responsive>
              <thead className="text-primary">
                <tr>
                  <th className="header">CA ID</th>
                  <th className="header">Name</th>
                  <th className="header">Points</th>
                  <th className="header">Email ID</th>
                  <th className="header">Phone No.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CLST0000</td>
                  <td>Darshil</td>
                  <td>100</td>
                  <td>dp@gmail.com</td>
                  <td>0001112223</td>
                </tr>
              </tbody>
            </Table>
          </TabPane>
        </Container>

        <Footer />
      </div>
    );
  }
}

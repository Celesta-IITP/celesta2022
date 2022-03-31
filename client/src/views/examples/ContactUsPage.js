/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

let ps = null;

class ContactUsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1,
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index,
    });
  };
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container className="align-items-center">
              <Row  >
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">Reach Us At</h1>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description">
                    <h4>Indian Institute of Technology Patna</h4>
                    <h4>Bihta Patna-801103 (Bihar)</h4>
                    <br />
                    <div
                      className="typography-line"
                      style={{ paddingLeft: "0px" }}
                    >
                      <blockquote>
                        <p className="blockquote blockquote-info">
                          Aakanksha :- <a href="tel:+918708945855">+91 8708 945 855</a>
                          <br />
                          Satyam :- <a href="tel:+917352862047">+91 7352 862 047</a>
                          <br />
                          
                          {/* <br /> */}
                        </p>
                      </blockquote>
                    </div>
                  </p>
                  <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      href="https://twitter.com/celesta_iitp?lang=en"
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      href="https://www.facebook.com/CelestaIITP/"
                      id="tooltip982846143"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Like us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="dribbble"
                      href="https://www.instagram.com/celestaiitp_official/?hl=en"
                      id="tooltip951161185"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                      Follow us
                    </UncontrolledTooltip>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/iitp.jpg")}
                        style={{ height: "150px" }}
                      />
                      <h4 className="title">Important Links</h4>
                    </CardHeader>
                    <CardBody style={{ alignSelf: "center" }}>
                      <Button className="btn-link" color="warning">
                        Directions
                      </Button>
                      <br />
                      <Button className="btn-link" color="warning">
                        Core Comittee
                      </Button>
                      <br />
                      <Button className="btn-link" color="warning">
                        Accommodation
                      </Button>
                      <br />
                      <Button className="btn-link" color="warning">
                        Bus Routes
                      </Button>
                      <br />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </>
    );
  }
}

export default ContactUsPage;

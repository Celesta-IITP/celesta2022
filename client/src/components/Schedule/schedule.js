import React from "react";
import classnames from "classnames";
import ExamplesNavbar from "../Navbars/IndexNavbar.js";
import Footer from "..//Footer/Footer.js";
// reactstrap components
import {
  TabContent,
  Table,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
    <div>
    <ExamplesNavbar />
      <div className="section section-tabs">
        <Container>
          <div className="title">
            <h3 className="mb-3">Schedule</h3>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" >
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                </small>
              </div>
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 4
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 4)}
                        href="#pablo"
                      >
                        Guest Lectures
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 5
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 5)}
                        href="#pablo"
                      >
                        Events
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.textTabs}
                  >
                    <TabPane tabId="link4">
                    <TabPane tabId="tab1">
                          <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                              <tr>
                                <th className="header">GUEST NAME</th>
                                <th className="header" style={{ textAlign: "center"}}>TOPIC</th>
                                <th className="header" style={{ textAlign: "center"}}>DATE</th>
                                <th className="header" style={{ textAlign: "center"}}>DAY</th>
                                <th className="header" style={{ textAlign: "center"}}>TIME-SLOT</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Dr. Shankar Venugopal</td>
                                <td>DESIRable Skills for the Future</td>
                                <td>12/12/20</td>
                                <td>Saturday</td>
                                <td>10:00-11:00</td>
                              </tr>
                              <tr>
                                <td>Avelo roy</td>
                                <td>Business Model</td>
                                <td>12/12/20</td>
                                <td>Saturday</td>
                                <td>17:00-18:00</td>
                              </tr>
                              <tr>
                                <td>Rakesh malhotra</td>
                                <td>-</td>
                                <td>13/12/20</td>
                                <td>Sunday</td>
                                <td>10:00-11:00</td>
                              </tr>
                              <tr>
                                <td>Shayamal Vallabhjee</td>
                                <td>-</td>
                                <td>13/12/20</td>
                                <td>Sunday</td>
                                <td>17:00-18:00</td>
                              </tr>
                              <tr>
                                <td>Rajan Singh</td>
                                <td>Rediscovering focus in a sea of distraction</td>
                                <td>18/12/20</td>
                                <td>Friday</td>
                                <td>17:00-18:00</td>
                              </tr>
                              <tr>
                                <td>Samar Singla</td>
                                <td>Samar's journey as an entrepreneur </td>
                                <td>19/12/20</td>
                                <td>Saturday</td>
                                <td>10:00-11:00</td>
                              </tr>
                              <tr>
                                <td>HC Verma</td>
                                <td>-</td>
                                <td>20/12/20</td>
                                <td>Sunday</td>
                                <td>10:00-11:00</td>
                                
                              </tr>
                              <tr>
                                <td>Alyne</td>
                                <td>-</td>
                                <td>20/12/20</td>
                                <td>Sunday</td>
                                <td>17:00-18:00</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                    </TabPane>
                    <TabPane tabId="link5">

                    <TabPane tabId="tab1">
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">Event</th>
                                <th className="header" style={{ textAlign: "center"}}>Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>ByteRace</td>
                                <td>Dec 12th, 2020 - Dec 12th, 2020 </td>
                              </tr>
                              <tr>
                                <td>SolidDesigns</td>
                                <td>Dec 12th, 2020 - Dec 19th, 2020 </td>
                              </tr>
                              <tr>
                                <td>Quest-Ion</td>
                                <td>Dec 11th,13th,15th,17th,19th 2020 (8PM) </td>
                              </tr>
                              <tr>
                                <td>NJATH</td>
                                <td>Dec 18th,19th,20th 2020</td>
                              </tr>
                              <tr>
                                  <td>Debate</td>
                                  <td>Dec 19th, 2020</td>
                              </tr>
                              <tr>
                                  <td>AP</td>
                                  <td>Till the End</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                      
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>       
      </div>
      <Footer />
      </div>
    );
  }
}

export default schedule;

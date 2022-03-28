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
                                <th className="header" style={{ textAlign: "center"}}>DAY</th>
                                <th className="header" style={{ textAlign: "center"}}>DATE</th>
                                <th className="header" style={{ textAlign: "center"}}>TIME-SLOT</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* <tr>
                                <td>Dr. Shankar Venugopal</td>
                                <td>DESIrable Skills for the Future</td>
                                <td>Saturday</td>
                                <td>12/12/20</td>
                                
                                <td>10:00-11:00</td>
                              </tr>
                              <tr>
                                <td>Avelo roy</td>
                                <td>Business Model</td>
                                <td>Saturday</td>
                                <td>12/12/20</td>
                                
                                <td>17:00-18:00</td>
                              </tr>
                              <tr>
                                <td>Rakesh malhotra</td>
                                <td>Enterpreneurship</td>
                                <td>Sunday</td>
                                <td>13/12/20</td>
                                
                                <td>10:00-11:00</td>
                              </tr>
                              <tr>
                                <td>Shiraz Minwalla</td>
                                <td>The search for Quantum Gravity</td>
                                <td>Thursday</td>
                                <td>17/12/20</td>
                                
                                <td>17:00-18:00</td>
                              </tr>
                              <tr>
                                <td>Rajan Singh</td>
                                <td>Rediscovering focus in a sea of distraction</td>
                                <td>Friday</td>
                                <td>18/12/20</td>
                               
                                <td>17:00-18:00</td>
                              </tr>
                              <tr>
                                <td>Samar Singla</td>
                                <td>Samar's journey as an entrepreneur </td>
                                <td>Saturday</td>
                                <td>19/12/20</td>
                                
                                <td>10:00-11:00</td>
                              </tr>
                              <tr>
                                <td>Abhinay Bhasin</td>
                                <td>The Impact of AI on Human Effort: Does it Empower or Overpower</td>
                                <td>Saturday</td>
                                <td>19/12/20</td>
                                
                                <td>17:00-18:00</td>
                                
                              </tr>
                              <tr>
                                <td>HC Verma</td>
                                <td>The spirit of taking up challenges</td>
                                <td>Sunday</td>
                                <td>20/12/20</td>
                                
                                <td>10:00-11:00</td>
                                
                              </tr>
                              <tr>
                                <td>Alyne Tamir</td>
                                <td>Ask Alyne</td>
                                <td>Sunday</td>
                                <td>20/12/20</td>
                                
                                <td>17:00-18:00</td>
                              </tr> */}
                            </tbody>
                            <h3>Coming Soon!!</h3>
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
                                <th className="header" style={{ textAlign: "center"}}>Paid/Non-Paid</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Virtual Crypto Trading</td>
                                <td>31st March-2nd April 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>Astro Particle Voyage</td>
                                <td>25,26 March, 30 March-1 April 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>Sudo Override (Capture the Flag)</td>
                                <td>28 March 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>Hack-it-out</td>
                                <td>27 March-3 April 2022</td>
                                <td>Paid</td>
                              </tr>
                              <tr>
                                <td>Depiction</td>
                                <td>27 March- 3 April 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>Brand-Verse</td>
                                <td>27 March- 3 April 2022</td>
                                <td>Not Paid</td>
                              </tr>
                              {/* <tr>
                                <td>ROS Workshop+Hackathon</td>
                                <td>"Workshop: 09-14 Jan,Hackathon: 15-16 Jan"</td>
                                <td>Paid</td>
                              </tr>
                              <tr>
                                <td>Innover</td>
                                <td>Till 21st December 2020</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>NJATH</td>
                                <td>18-20th December 2020</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>Hack It Out</td>
                                <td>-</td>
                                <td>Not Paid</td>
                              </tr>
                              <tr>
                                <td>ByteRace</td>
                                <td>29th December 2020 @8PM</td>
                                <td>Paid</td>
                              </tr> */}
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
